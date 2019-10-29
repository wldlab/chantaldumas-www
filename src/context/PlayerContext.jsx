/* eslint-disable jsx-a11y/media-has-caption */
// vendors
import React, { createContext, Component } from "react"

const defaultState = {
  playStatus: "STOPPED",
  playlist: [],
  currentAlbum: undefined,
  currentPlaying: 0,
  progress: undefined,
  seeking: false,
}

const defaultAction = {
  pause: () => {},
  play: () => {},
  updatePlaylist: () => {},
  changeCurrentPlaying: () => {},
}

const PlayerContext = createContext({ ...defaultState, ...defaultAction })

export class PlayerProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...defaultState,
    }

    this.audioPlayerRef = React.createRef()

    this.changeCurrentPlaying = this.changeCurrentPlaying.bind(this)
    this.handleEnded = this.handleEnded.bind(this)
    this.handleCanplaythrough = this.handleCanplaythrough.bind(this)
    this.handlePaused = this.handlePaused.bind(this)
    this.handlePlaying = this.handlePlaying.bind(this)
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    this.updatePlaylist = this.updatePlaylist.bind(this)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }

  handleCanplaythrough(e) {
    const { playStatus } = this.state

    // prevent to start back after paused
    if (playStatus === "LOADING") {
      this.setState({
        seeking: false,
      })
      this.play()
    }
  }

  handleEnded(e) {
    const { playlist, currentPlaying } = this.state

    this.setState({ playStatus: "STOPPED" })

    if (playlist.length > currentPlaying + 1) {
      this.changeCurrentPlaying(currentPlaying + 1)

      return
    }

    this.setState({ ...defaultState })
  }

  handlePaused(e) {
    this.setState({ playStatus: "PAUSED" })
  }

  handlePlaying(e) {
    this.setState({ playStatus: "PLAYING" })
  }

  handleTimeUpdate(e) {
    // TODO: Optimize performance
    const { duration, currentTime } = e.target

    const progress = currentTime / duration

    this.setState({ progress })
  }

  cleanPlaylist() {
    this.updatePlaylist([], 0)
  }

  async changeCurrentPlaying(currentPlaying) {
    this.pause()

    await this.setState({
      currentPlaying,
      playStatus: "PLAYING",
      progress: "undefined",
    })

    this.load()
    this.play()
  }

  async updatePlaylist(currentAlbum, playlist = [], currentPlaying = 0) {
    await this.setState({
      playlist,
      currentPlaying,
      currentAlbum,
      playStatus: "PLAYING",
      progress: "undefined",
      seeking: true,
    })

    this.load()
    this.play()
  }

  play() {
    this.audioPlayerRef.current.play()
  }

  pause() {
    this.audioPlayerRef.current.pause()
  }

  load() {
    this.audioPlayerRef.current.load()
  }

  render() {
    const { children } = this.props
    const {
      currentAlbum,
      currentPlaying,
      playlist,
      playStatus,
      progress,
      seeking,
    } = this.state

    // TODO: Sort and filter playlist
    const sources = playlist[currentPlaying] || []

    return (
      <PlayerContext.Provider
        value={{
          changeCurrentPlaying: this.changeCurrentPlaying,
          pause: this.pause,
          play: this.play,
          updatePlaylist: this.updatePlaylist,
          currentAlbum,
          currentPlaying,
          playStatus,
          progress,
          seeking,
        }}
      >
        <>
          {children}
          <audio
            ref={this.audioPlayerRef}
            onCanPlayThrough={this.handleCanplaythrough}
            onEnded={this.handleEnded}
            onPause={this.handlePaused}
            onPlaying={this.handlePlaying}
            onTimeUpdate={this.handleTimeUpdate}
          >
            {sources.map(({ src, type }) => (
              <source src={src} type={type} />
            ))}
          </audio>
        </>
      </PlayerContext.Provider>
    )
  }
}

export default PlayerContext
