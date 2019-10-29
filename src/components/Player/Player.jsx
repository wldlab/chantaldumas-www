// vendors
import React, { useContext } from "react"
import { css } from "@emotion/core"
import Progress from "../Progress/Progress"
import PlayerContext from "../../context/PlayerContext"

const Player = () => {
  const player = useContext(PlayerContext)

  return (
    <div
      css={css`
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0;
        padding: 0;
      `}
    >
      <Progress value={player.progress} loading={player.seeking} />
    </div>
  )
}

export default Player
