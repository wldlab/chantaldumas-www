import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ArtistsView from "../views/ArtistsView"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import AlbumCard from "../components/AlbumCard"
import Columns, { UnbreakableBlock } from "../components/Columns"
import { forcingBreakingWord } from "../utils/forcing-breaking-word"
import {
  OpenWindowWrapper,
  SectionArtistName,
  SectionTitle,
} from "../views/indexPage.style"
import { useIntl } from "react-intl"
import StepWithBackgroundNumber from "../components/StepWithBackgroundNumber/StepWithBackgroundNumber"

const IndexPage = ({ data }) => {
  const { formatMessage: t } = useIntl()

  const artists = data.artists.edges.map(({ node }) => ({
    name: node.frontmatter.title,
    description: node.html,
  }))

  return (
    <Layout>
      <SEO title="Home" />

      <section id={t({ id: "slug.audioWorks" })}></section>

      <ArtistsView artists={artists} />

      <section id={t({ id: "slug.openWindows" })}>
        <SectionTitle>Open Windows</SectionTitle>

        <SectionArtistName>
          Caroline <br />
          Gagné
        </SectionArtistName>

        <OpenWindowWrapper>
          <p>
            Published in two volumes, one in print and the other online, the
            publication Dialogues with Chantal Dumas invites readers and
            listeners to discover the work of Chantal Dumas. As a sound artist
            who has been associated with Avatar since 1994, she was part of Ding
            Dong deluxe, the very first CD put out by the OHM Éditions label,
            which subsequently also released Les Chantal Dumas and Le parfum des
            femmes. The various dialogues in this publication offer a close and
            in-depth look at the composer’s practice, the particular
            characteristics of radio art, and its position in the broader field
            of sound art.
          </p>
        </OpenWindowWrapper>

        <Columns>
          <UnbreakableBlock>
            <p>Transmission et contexte d’écoute</p>

            <p>
              <i>Transmission</i> and <i>listening context</i> are the words
              that really made an impression on me in my initial conver­sations
              with Dumas. On the one hand, I was interested in sound and its
              potential as an artistic language; on the other hand, I discovered
              the key role that radio as a creative space had in the history of
              sound art as well as in the artist’s development. During one of
              our conversations, Dumas remembered an alcove in an apartment she
              stayed in while in Marseilles, which became a special space for
              her. She described the alcove as a specific place, a listening
              context in which, thanks to the transmission of sound waves, she
              could imagine the co-existence of places, strangers and the lives
              they led, simultaneous tempo­ralities, and images shaped by the
              sounds circulating there. These sounds penetrated the intangible,
              traced carto­graphies and sketched inter­actions, bore stories or
              transmitted knowledge.
            </p>
          </UnbreakableBlock>

          <UnbreakableBlock>
            <p>Opening the Windows</p>

            <p>
              I’ve often heard Dumas use the metaphor of “open windows” to
              describe her work. I imagine the composer’s creative methods as
              movements that generate other movements and that offer us
              different perspectives for understanding the world, that encourage
              us to listen and to recognize that unlikely universes can
              sometimes make contact. Opening the window means allowing a way
              through. As Mario Gauthier wrote to Dumas in an email exchange,
              this is “because you give us just part of what can be perceived.”
            </p>

            <p>
              “Open Window” is also the title of a poem by Victor Hugo, who
              likewise evokes and stimulates our sense of hearing. By taking one
              of the many routes that this project opened up, I was pleased to
              discover this poem, which begins with the words <i>I hear</i>.
            </p>
          </UnbreakableBlock>
        </Columns>

        <OpenWindowWrapper>
          <p>
            Volume 1: <i>Le son-refuge</i>
          </p>

          <p>
            Then there was the theme of “refuge,” based on which Dumas had
            already sketched some ideas, conducted interviews. While an
            artist-in-residence at Avatar in the fall of 2018, she also
            rediscovered the piano, which was akin to reconnecting with an old
            friend whom we haven’t seen in a long time. Everything was in place
            for the creation of a new work: Le son-refuge. We then invited other
            artists to get involved and become part of the dialogue.
          </p>
        </OpenWindowWrapper>

        <Columns>
          <UnbreakableBlock>
            <p>
              Delighted to collaborate, Anna Friz, Carole Rieussec, and Erin
              Sexton satisfied our desire that this project would provide a
              pretext for creation, and we produced three original works, all of
              which resonate with Dumas’s art. Anna Friz composed a piece based
              on two past recordings, which she considers fundamental to her
              development. Erin Sexton used a performative mode to explore, as
              she often does, the question of signal transmission by placing
              herself in the position of a transmitter and even more
              particularly, a receiver. Carole Rieussec created a sound work
              using a selection of speaking voices that evoke the walking body
              seeking refuge from exile and imagination seeking an anchor in the
              present.
            </p>
          </UnbreakableBlock>

          <UnbreakableBlock>
            <p>
              Speech, the sound of the voice, runs throughout Dumas’s work and
              is an aspect that strongly resonates with Céline Huyghebaert, who
              has made it a thread of a creative piece of writing that echoes
              the audio works produced for this publication.
            </p>

            <p>
              In addition, this volume includes a selection of seventeen works
              by Dumas, created between 1993 and 2017 and accompanied by notes,
              which offer various tracks of reading and listening, or vice
              versa.
            </p>
          </UnbreakableBlock>
        </Columns>

        <OpenWindowWrapper>
          <p>
            Volume 2: <i>Radio Art and Sound Art</i>
          </p>

          <p>
            Putting Dumas’s work into perspective also means spanning an era
            during which the mediums and their accessibility changed often.
            First of all, this is precisely what Avatar sought to explore by
            inviting the artist to participate in this publication. “The
            question of what area of sound I was asked to work with—web, radio,
            theatre, documentary—is interesting at this moment. Yet, in my case,
            does the area even make a difference?” Today, broadcasting and
            listening largely pass through the web, and the modes of publication
            and reception have hanged considerably. Dumas: “I wonder how the
            transformation of transmission and listening affect writing about
            radio art. Are we still talking about radio? Would sound production
            be a more suitable term?”
          </p>
        </OpenWindowWrapper>

        <Columns>
          <UnbreakableBlock>
            <p>
              We asked six Canadian and European experts such questions about
              various forms of “sound writing.” They rose to the challenge by
              offering texts that examine Dumas’s work, focusing on certain
              aspects that stand out, and broadening their analysis to consider
              creation openly. These texts—several essays—are collected in the
              publication’s second volume, titled Radio Art and Sound Art.
              Étienne Noiseau presents an overview of Dumas’s major works. Mario
              Gauthier reflects on radio by analyzing Le son-refuge. A text by
              Hélène Prévost evokes the scope of the artist’s production and the
              context in which her practice has evolved.
            </p>
          </UnbreakableBlock>

          <UnbreakableBlock>
            <p>
              A testimonial by Frédéric Dallaire addresses the notion of
              perception while implicitly looking at the question of
              collaboration. By analyzing the work Tanz, Serge Cardinal
              considers sound as material, as that which gives form and creates
              movement and space. Lastly, Golo Föllmer has written a text based
              on a recent interview conducted with the artist that examines the
              role of installation, sound, and interactivity in her practice.
            </p>
          </UnbreakableBlock>
        </Columns>

        <OpenWindowWrapper>
          <p>
            In essence, <i>Dialogues with Chantal Dumas</i> is a complex work in
            which, for Chantal Dumas, sound is a fully fledged artistic language
            that has the potential to redefine reality.
          </p>
        </OpenWindowWrapper>
      </section>

      <section id={t({ id: "slug.nothingButWater" })}>
        <SectionTitle>
          Nothing <br />
          but water
        </SectionTitle>

        <SectionArtistName>
          Céline <br />
          Huyghebaert
        </SectionArtistName>

        <StepWithBackgroundNumber id="1"></StepWithBackgroundNumber>
      </section>

      <section id={t({ id: "slug.archivedWorks" })}></section>

      <AlbumCard title="Le petit homme dans l’oreille">
        <p>
          Le petit homme dans l’oreille (2000)
          <br />
          Œuvre sonore de Christian Calon et Chantal Dumas
          <br />
          Durée : 57 min
        </p>
        <p>
          Été.
          <br />9 juillet–9 septembre 1999.
          <br />
          20 000 km sur les routes et les pistes du Canada. Montée de Montréal
          au cercle arctique (Yukon) à travers les Prairies, descente vers le
          Pacifique et retour par les Badlands. Remplie d’équipements de prise
          de son, d’outils, de cassettes DAT, tente, Coleman, sacs de couchage,
          ustensiles de cuisine, pneu de secours, bières, appareil photo,
          bottes, livres et cartes routières, la minivan Mercury prit la route.
        </p>
        <p>
          Commandée par Mario Gauthier pour l’émission L’espace du son, cette
          œuvre a été produite par la Chaîne culturelle de Radio-Canada
          (Montréal, Canada). L’accompagnement de Rob Dramer, de Lillian Ireland
          et de Mike Krutko a également permis la réalisation de ce parcours
          sonore, tout comme les maintes voix anonymes qui l’ont inspiré.
        </p>
        <p>
          Le petit homme dans l’oreille a été enregistrée sur CD et publiée dans
          le coffret de deux disques radio roadmovies.
        </p>
      </AlbumCard>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query accueilPageQuery {
    artists: allMarkdownRemark(
      filter: { frontmatter: { locale: { eq: "fr" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`
