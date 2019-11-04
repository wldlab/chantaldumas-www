import React from "react"
import slug from "slug"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import { useIntl } from "react-intl"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ArtistsView from "../views/ArtistsView"
import AlbumCard from "../components/AlbumCard"
import Columns, { UnbreakableBlock } from "../components/Columns"
import {
  OpenWindowWrapper,
  SectionArtistName,
  SectionTitle,
  OpenWindowBlock,
} from "../views/indexPage.style"
import StepWithBackgroundNumber from "../components/StepWithBackgroundNumber/StepWithBackgroundNumber"
import { typography } from "../styles/styles"
import Padded from "../components/Padded"
import mediaQuery from "../utils/media-query"

import logoAvatar from "../images/logo-avatar.svg"
import logoCALQ from "../images/logo-calq.svg"

const getMdxFile = (array, lang) => {
  return array.find(({ node }) => {
    return node.childMdx && node.childMdx.frontmatter.locale === lang
  }).node
}

const getAudioFiles = array => {
  return array.map(({ node }) => node).filter(({ childMdx }) => !childMdx)
}

const IndexPage = ({ data, pageContext: { langKey }, ...props }) => {
  const { formatMessage: t } = useIntl()

  const artists = data.artists.edges
    .filter(
      ({
        node: {
          childMdx: {
            frontmatter: { locale },
          },
        },
      }) => locale === langKey
    )
    .map(({ node }) => ({
      name: node.childMdx.frontmatter.title,
      description: node.childMdx.body,
    }))

  const nothingButWaterChapters = data.nothingButWaterChapters.edges.map(
    ({ node }) => node
  )

  const archives = data.archives.group || []

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

        <OpenWindowBlock>
          <OpenWindowWrapper>
            <p>
              Published in two volumes, one in print and the other online, the
              publication Dialogues with Chantal Dumas invites readers and
              listeners to discover the work of Chantal Dumas. As a sound artist
              who has been associated with Avatar since 1994, she was part of
              Ding Dong deluxe, the very first CD put out by the OHM Éditions
              label, which subsequently also released Les Chantal Dumas and Le
              parfum des femmes. The various dialogues in this publication offer
              a close and in-depth look at the composer’s practice, the
              particular characteristics of radio art, and its position in the
              broader field of sound art.
            </p>
          </OpenWindowWrapper>
        </OpenWindowBlock>

        <OpenWindowBlock>
          <Columns>
            <UnbreakableBlock>
              <p>Transmission et contexte d’écoute</p>

              <p>
                <i>Transmission</i> and <i>listening context</i> are the words
                that really made an impression on me in my initial
                conver­sations with Dumas. On the one hand, I was interested in
                sound and its potential as an artistic language; on the other
                hand, I discovered the key role that radio as a creative space
                had in the history of sound art as well as in the artist’s
                development. During one of our conversations, Dumas remembered
                an alcove in an apartment she stayed in while in Marseilles,
                which became a special space for her. She described the alcove
                as a specific place, a listening context in which, thanks to the
                transmission of sound waves, she could imagine the co-existence
                of places, strangers and the lives they led, simultaneous
                tempo­ralities, and images shaped by the sounds circulating
                there. These sounds penetrated the intangible, traced
                carto­graphies and sketched inter­actions, bore stories or
                transmitted knowledge.
              </p>
            </UnbreakableBlock>

            <UnbreakableBlock>
              <p>Opening the Windows</p>

              <p>
                I’ve often heard Dumas use the metaphor of “open windows” to
                describe her work. I imagine the composer’s creative methods as
                movements that generate other movements and that offer us
                different perspectives for understanding the world, that
                encourage us to listen and to recognize that unlikely universes
                can sometimes make contact. Opening the window means allowing a
                way through. As Mario Gauthier wrote to Dumas in an email
                exchange, this is “because you give us just part of what can be
                perceived.”
              </p>

              <p>
                “Open Window” is also the title of a poem by Victor Hugo, who
                likewise evokes and stimulates our sense of hearing. By taking
                one of the many routes that this project opened up, I was
                pleased to discover this poem, which begins with the words{" "}
                <i>I hear</i>.
              </p>
            </UnbreakableBlock>
          </Columns>
        </OpenWindowBlock>

        <OpenWindowBlock>
          <OpenWindowWrapper>
            <p>
              Volume 1: <i>Le son-refuge</i>
            </p>

            <p>
              Then there was the theme of “refuge,” based on which Dumas had
              already sketched some ideas, conducted interviews. While an
              artist-in-residence at Avatar in the fall of 2018, she also
              rediscovered the piano, which was akin to reconnecting with an old
              friend whom we haven’t seen in a long time. Everything was in
              place for the creation of a new work: Le son-refuge. We then
              invited other artists to get involved and become part of the
              dialogue.
            </p>
          </OpenWindowWrapper>
        </OpenWindowBlock>

        <OpenWindowBlock>
          <Columns>
            <UnbreakableBlock>
              <p>
                Delighted to collaborate, Anna Friz, Carole Rieussec, and Erin
                Sexton satisfied our desire that this project would provide a
                pretext for creation, and we produced three original works, all
                of which resonate with Dumas’s art. Anna Friz composed a piece
                based on two past recordings, which she considers fundamental to
                her development. Erin Sexton used a performative mode to
                explore, as she often does, the question of signal transmission
                by placing herself in the position of a transmitter and even
                more particularly, a receiver. Carole Rieussec created a sound
                work using a selection of speaking voices that evoke the walking
                body seeking refuge from exile and imagination seeking an anchor
                in the present.
              </p>
            </UnbreakableBlock>

            <UnbreakableBlock>
              <p>
                Speech, the sound of the voice, runs throughout Dumas’s work and
                is an aspect that strongly resonates with Céline Huyghebaert,
                who has made it a thread of a creative piece of writing that
                echoes the audio works produced for this publication.
              </p>

              <p>
                In addition, this volume includes a selection of seventeen works
                by Dumas, created between 1993 and 2017 and accompanied by
                notes, which offer various tracks of reading and listening, or
                vice versa.
              </p>
            </UnbreakableBlock>
          </Columns>
        </OpenWindowBlock>

        <OpenWindowBlock>
          <OpenWindowWrapper>
            <p>
              Volume 2: <i>Radio Art and Sound Art</i>
            </p>

            <p>
              Putting Dumas’s work into perspective also means spanning an era
              during which the mediums and their accessibility changed often.
              First of all, this is precisely what Avatar sought to explore by
              inviting the artist to participate in this publication. “The
              question of what area of sound I was asked to work with—web,
              radio, theatre, documentary—is interesting at this moment. Yet, in
              my case, does the area even make a difference?” Today,
              broadcasting and listening largely pass through the web, and the
              modes of publication and reception have hanged considerably.
              Dumas: “I wonder how the transformation of transmission and
              listening affect writing about radio art. Are we still talking
              about radio? Would sound production be a more suitable term?”
            </p>
          </OpenWindowWrapper>
        </OpenWindowBlock>

        <OpenWindowBlock>
          <Columns>
            <UnbreakableBlock>
              <p>
                We asked six Canadian and European experts such questions about
                various forms of “sound writing.” They rose to the challenge by
                offering texts that examine Dumas’s work, focusing on certain
                aspects that stand out, and broadening their analysis to
                consider creation openly. These texts—several essays—are
                collected in the publication’s second volume, titled Radio Art
                and Sound Art. Étienne Noiseau presents an overview of Dumas’s
                major works. Mario Gauthier reflects on radio by analyzing Le
                son-refuge. A text by Hélène Prévost evokes the scope of the
                artist’s production and the context in which her practice has
                evolved.
              </p>
            </UnbreakableBlock>

            <UnbreakableBlock>
              <p>
                A testimonial by Frédéric Dallaire addresses the notion of
                perception while implicitly looking at the question of
                collaboration. By analyzing the work Tanz, Serge Cardinal
                considers sound as material, as that which gives form and
                creates movement and space. Lastly, Golo Föllmer has written a
                text based on a recent interview conducted with the artist that
                examines the role of installation, sound, and interactivity in
                her practice.
              </p>
            </UnbreakableBlock>
          </Columns>
        </OpenWindowBlock>

        <OpenWindowBlock>
          <OpenWindowWrapper>
            <p>
              In essence, <i>Dialogues with Chantal Dumas</i> is a complex work
              in which, for Chantal Dumas, sound is a fully fledged artistic
              language that has the potential to redefine reality.
            </p>
          </OpenWindowWrapper>
        </OpenWindowBlock>
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

        {nothingButWaterChapters.map(({ childMdx: { body } }, index) => (
          <StepWithBackgroundNumber id={index + 1}>
            <MDXRenderer>{body}</MDXRenderer>
          </StepWithBackgroundNumber>
        ))}
      </section>

      <picture
        css={css`
          display: block;
          margin: ${200 / typography.size.base}rem calc(50% - 50vw);
        `}
      >
        <source
          sizes="100vw"
          srcset={data.imgSpacerArchive.img.fluid.srcSetWebp}
          type="image/webp"
        />

        <img
          src={data.imgSpacerArchive.img.fluid.src}
          alt=""
          sizes="100vw"
          srcset={data.imgSpacerArchive.img.fluid.srcSet}
        />
      </picture>

      <section id={t({ id: "slug.archivedWorks" })}>
        <Padded>
          <Columns
            css={css`
              min-height: 75vh;
            `}
          >
            <UnbreakableBlock>
              <p>
                This text contains references to the following works or
                documents listed in order of appearance:
              </p>
            </UnbreakableBlock>

            <UnbreakableBlock>
              <Columns
                css={css`
                  font-size: ${typography.size.s[1] /
                    typography.size.bases[1]}em;
                  line-height: ${20 / 15};
                `}
              >
                <UnbreakableBlock>
                  <p>
                    Véronique Sanson, <br />
                    “Rien que de l’eau,” 1992.
                  </p>

                  <p>
                    Dictionary of the Centre National de Ressources Textuelles
                    et Lexicales.
                  </p>

                  <p>Carole Rieussec, JOKER, 2019.</p>

                  <p>
                    Mathieu Simonet, <br />
                    Anne-Sarah K., 2019.
                  </p>

                  <p>
                    Stephen King, <br />
                    The Langoliers, 1990.
                  </p>

                  <p>
                    Chantal Dumas, <br />
                    Le son-refuge, 2019.
                  </p>

                  <p>
                    Wolfgang Amadeus Mozart, Piano Sonata No. 18 in D major,
                    1789.
                  </p>

                  <p>
                    Georges Perec, <br />
                    L’Infra-ordinaire, 1989.
                  </p>

                  <p>
                    Marielle Macé, <br />
                    Sidérer, considérer – <br />
                    Migrants en France, 2017.
                  </p>
                </UnbreakableBlock>

                <UnbreakableBlock>
                  <p>
                    Emmanuel Perrin, <br />
                    “Le ‘Bloop,’ un mystérieux son venu de l’océan qui a
                    longtemps intrigué les chercheurs,” 2015.
                  </p>
                  <p>Erin Sexton, Expedition, 2019.</p>
                  <p>
                    Philippe Baudouin, <br />
                    “Les voix fantomatiques de Philippe Baudouin,” 2018.
                  </p>
                  <p>Wikipedia.</p>
                  <p>
                    Ryōko Sekiguchi, <br />
                    La Voix sombre, 2015.
                  </p>
                  <p>
                    Anna Friz, <br />
                    Imperfect Breath, 2019.
                  </p>
                  <p>
                    Giorgio Agamben, <br />
                    Nudities, 2010.
                  </p>
                  <p>
                    Musée d’art contemporain de Montréal, Leonard Cohen, A Crack
                    in Everything, 2017–2018.
                  </p>
                </UnbreakableBlock>
              </Columns>
            </UnbreakableBlock>
          </Columns>
        </Padded>

        {archives.map(({ edges }) => {
          const mdx = getMdxFile(edges, langKey)
          const audioFiles = getAudioFiles(edges)

          const tracks = audioFiles.map(file => [
            {
              src: file.publicURL,
              type: file.internal.mediaType,
            },
          ])

          return (
            <AlbumCard
              title={mdx.childMdx.frontmatter.title}
              slug={slug(mdx.childMdx.frontmatter.title)}
              tracks={tracks}
            >
              <MDXRenderer>{mdx.childMdx.body}</MDXRenderer>
            </AlbumCard>
          )
        })}
      </section>

      <footer
        css={css`
          display: grid;

          grid-gap: 30px;
          grid-template-columns: repeat(1, 1fr);
          margin: 100px auto;

          ${mediaQuery.greaterThen(1280)} {
            grid-template-columns: repeat(4, 1fr);
          }

          a {
            color: inherit;
            text-decoration: inherit;
          }
        `}
      >
        <div
          css={css`
            grid-column: 1 / span 1;
          `}
        >
          <p>Dialogues with Chantal&nbsp;Dumas</p>

          <p>
            Volume 1: <br />
            Le son-refuge
          </p>

          <p>This publication was produced with the participation of:</p>
        </div>

        <ul
          css={css`
            grid-column: span 2;
            column-width: 260px;
            column-count: 2;
            column-gap: 30px;
            ul,
            & {
              list-style: none;
              padding: 0;
            }

            > li {
              break-inside: avoid; /* Chrome, Safari */
              page-break-inside: avoid; /* Theoretically FF 20+ */
              display: table; /* Actually FF 20+ */
              margin: 0 0 1em;
            }
          `}
        >
          <li>
            Publication editor:
            <ul>
              <li>Caroline Gagné</li>
            </ul>
          </li>

          <li>
            Authors:
            <ul>
              <li>Caroline Gagné</li>
              <li>Céline Huyghebaert</li>
            </ul>
          </li>

          <li>
            English translation of the original French texts:
            <ul>
              <li>Oana Avasilichioaei</li>
            </ul>
          </li>

          <li>
            Copy editing of French texts:
            <ul>
              <li>Valérie Litalien</li>
            </ul>
          </li>

          <li>
            Proofreading:
            <ul>
              <li>Judy Queen</li>
              <li>Valérie Litalien</li>
            </ul>
          </li>

          <li>
            Artists:
            <ul>
              <li>Chantal Dumas</li>
              <li>Anna Friz</li>
              <li>Carole Rieussec</li>
              <li>Erin Sexton</li>
            </ul>
          </li>

          <li>
            Digital mastering:
            <ul>
              <li>Thierry Gauthier</li>
            </ul>
          </li>

          <li>
            Graphic design:
            <ul>
              <li>
                <a href="http://criteriumdesign.com/">Criterium</a>
              </li>
            </ul>
          </li>

          <li>
            Web programming and content integration:
            <ul>
              <li>
                <a href="http://criteriumdesign.com/">Criterium</a>
              </li>
            </ul>
          </li>
        </ul>

        <div
          css={css`
            max-width: 246px;
            font-size: ${typography.size.s[0] / typography.size.bases[0]}em;

            ${mediaQuery.greaterThen(typography.breakpoints[1])} {
              font-size: ${typography.size.s[1] / typography.size.bases[1]}em;
            }
          `}
        >
          <p>
            Publishing and distribution: <br />
            Avatar, association de création et de diffusion sonores et
            électroniques
            <br />
            541, rue De Saint-Vallier Est, bureau 562, Québec <br />
            (Québec) G1K 3P9
            <br />
            418 522-8918
            <br />
            <a href="https://avatarquebec.org">avatarquebec.org</a>
          </p>

          <p>
            Legal deposit:
            <br />
            Bibliothèque et Archives nationales du Québec, 2019
            <br />
            Bibliothèque et Archives Canada, 2019
            <br />
            ISBN 978-2-920512-26-9 <br />
            (édition imprimée)
            <br />
            ISBN 978-2-920512-25-2 <br />
            (microsite)
          </p>

          <p>
            © Avatar, the artists, <br />
            the authors, 2019
          </p>

          <p>
            All rights reserved – <br />
            Printed in Canada
          </p>

          <div
            css={css`
              display: flex;
              align-items: center;
              margin: 50px 0;
              text-align: center;
            `}
          >
            <a href="https://avatarquebec.org/">
              <img src={logoAvatar} alt="" />
            </a>

            <a
              href="https://www.calq.gouv.qc.ca/"
              css={css`
                flex-grow: 2;
                * {
                  margin: auto;
                }
              `}
            >
              <img src={logoCALQ} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query homePageQuery {
    artists: allFile(filter: { sourceInstanceName: { eq: "artist" } }) {
      edges {
        node {
          childMdx {
            frontmatter {
              title
              locale
            }
            body
          }
        }
      }
    }

    nothingButWaterChapters: allFile(
      filter: { sourceInstanceName: { eq: "nothingButWater" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childMdx {
            body
          }
        }
      }
    }

    imgSpacerArchive: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "img-spacer-archive" }
    ) {
      img: childImageSharp {
        fluid(maxWidth: 2560) {
          srcSetWebp
          srcSet
          src
        }
      }
    }

    archives: allFile(filter: { sourceInstanceName: { eq: "archives" } }) {
      group(field: relativeDirectory) {
        edges {
          node {
            internal {
              mediaType
            }
            childMdx {
              body
              frontmatter {
                title
                locale
              }
            }
            publicURL
          }
        }
      }
    }
  }
`
