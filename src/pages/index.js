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
import { hideVisually } from "polished"
import AudioWorkPart from "../views/AudioWorkPart"

import dumas from "../data/audioWorks/Dumas.m4a"
import friz from "../data/audioWorks/Friz.m4a"
import rieussec from "../data/audioWorks/Rieussec.m4a"
import sexton from "../data/audioWorks/Sexton.m4a"

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

  const nothingButWaterChapters = data.nothingButWaterChapters.edges
    .map(({ node }) => node)
    .filter(node => node.childMdx.frontmatter.locale === langKey)

  const archives = data.archives.group || []

  return (
    <Layout>
      <SEO title="Home" />

      <section
        id={t({ id: "slug.audioWorks" })}
        css={css`
          margin-bottom: 175px;
        `}
      >
        <h2
          css={css`
            ${hideVisually()}
          `}
        >
          {t({ id: "labels.audioWorks" })}
        </h2>

        <div>
          <AudioWorkPart
            title="Le son-refuge"
            slug="Le-son-refuge-dumas"
            tracks={[
              [
                {
                  src: dumas,
                  type: "audio/mp4",
                },
              ],
            ]}
            duration="20 min 48 sec"
            artist="Dumas"
            year="2018"
          >
            <p>
              Deux séries d’entretiens se sont déroulées dans deux villes à deux
              années d’intervalle. Une quinzaine de personnes sont venues
              rencontrer Chantal pour parler avec elle de leur perception du
              son. À travers le récit d’une histoire personnelle, chacune et
              chacun a raconté comment le son peut agir comme un refuge dans
              certaines circonstances.
            </p>

            <p>
              Enregistrements réalisés avec la participation de: Rémy Bélanger
              de Beauport, Gabrielle Bouthillier et Guylaine Coderre dans le
              studio d’Avatar, à Québec, en 2018 et DinahBird, Antoine Chao,
              Amaury da Cunha, Léa Minod, Carole Rieussec au centre Les
              Récollets, un atelier-résidence du Conseil des arts et des lettres
              du Québec, dans le Xe arrondissement de Paris, en 2016.
            </p>

            <p>
              Improvisation autour et dans le piano du studio d’Avatar :
              Frédéric Lebrasseur et Chantal Dumas, en 2018.
            </p>
          </AudioWorkPart>

          <AudioWorkPart
            title="Imperfect Breath"
            slug="imperfect-breath-friz"
            tracks={[
              [
                {
                  src: friz,
                  type: "audio/mp4",
                },
              ],
            ]}
            duration="8 min 40 sec"
            artist="Friz"
            year="2019"
          />

          <AudioWorkPart
            title="Joker"
            slug="joker-rieussec"
            tracks={[
              [
                {
                  src: rieussec,
                  type: "audio/mp4",
                },
              ],
            ]}
            duration="8 min 42 sec"
            artist="Rieussec"
            year="2019"
          />

          <AudioWorkPart
            title="expédition"
            slug="expedition-sexton"
            tracks={[
              [
                {
                  src: sexton,
                  type: "audio/mp4",
                },
              ],
            ]}
            duration="10 min 3 sec"
            artist="Sexton"
            year="2019"
          />
        </div>
      </section>

      <ArtistsView artists={artists} />

      <section id={t({ id: "slug.openWindows" })}>
        <SectionTitle>{t({ id: "labels.openWindows" })}</SectionTitle>

        <SectionArtistName>
          Caroline <br />
          Gagné
        </SectionArtistName>

        <OpenWindowBlock>
          <OpenWindowWrapper>
            <p>
              Présentée en deux volumes, l’un imprimé et l’autre numérique, la
              publication Dialogues avec Chantal Dumas est une invitation à
              découvrir le travail de cette artiste sonore associée à Avatar
              depuis 1994 avec sa participation à Ding Dong deluxe, le tout
              premier CD du catalogue de OHM éditions, puis avec la parution de
              l’album Les Chantal Dumas et du triptyque Le parfum des femmes. Au
              fil des multiples dialogues grâce auxquels nous avons élaboré cet
              ouvrage et porté un regard attentif sur la pratique de la
              compositrice, une réflexion autour des spécificités de la création
              radiophonique et sur son inscription dans le large champ de l’art
              sonore s’est peu à peu approfondie.
            </p>
          </OpenWindowWrapper>
        </OpenWindowBlock>

        <OpenWindowBlock>
          <Columns>
            <UnbreakableBlock>
              <p>Transmission et contexte d’écoute</p>

              <p>
                Transmission et contexte d’écoute, voilà des mots qui m’ont
                marquée lors de mes premiers échanges avec Chantal. D’un côté,
                j’étais intéressée par le son et par le potentiel dont il est
                investi comme langage artistique ; de l’autre, je découvrais la
                place importante qu’a eue la radio en tant qu’espace de création
                dans l’histoire de l’art sonore ainsi que dans le parcours de
                l’artiste. Pendant l’une de nos conversations, Chantal m’a
                raconté son souvenir d’une alcôve située dans un appartement
                qu’elle a occupé à Marseille, un espace privilégié pour elle.
                Elle le décrivait comme un lieu spécifique, voire un contexte
                d’écoute où pouvaient se concevoir et se côtoyer, grâce à la
                transmission des ondes, des inconnus et leur existence, des
                ailleurs, des temporalités simultanées et des images façonnées
                par les sons qui voyagent. Ces sons percent l’intangible,
                dessinent des cartographies et esquissent les contours de
                rencontres, portent des fictions ou transmettent la
                connaissance.
              </p>
            </UnbreakableBlock>

            <UnbreakableBlock>
              <p>Opening the Windows</p>

              <p>
                J’ai souvent entendu Chantal utiliser cette métaphore des
                « fenêtres ouvertes » pour décrire ses productions. Je me suis
                donc figuré les procédés de création dont découle le travail de
                la compositrice comme des mouvements qui en engendrent d’autres
                et qui nous proposent différents angles pour comprendre le
                monde, nous invitent à tendre l’oreille et à avouer que certains
                univers improbables peuvent parfois se toucher. Ouvrir une
                fenêtre, c’est permettre un passage. « Parce que tu n’en donnes
                qu’une partie à percevoir… », écrivait Mario Gauthier à Chantal
                dans un échange de courriels.
              </p>

              <p>
                Fenêtres ouvertes est également le titre d’un poème de Victor
                Hugo, qui évoque et stimule, lui aussi, ce sens qu’est notre
                ouïe. J’ai découvert ce texte avec plaisir en empruntant l’un
                des multiples sentiers qu’a ouverts ce projet, texte dont les
                premiers mots sont J’entends.
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
              Puis, il y a eu ce thème du « refuge », autour duquel Chantal
              avait déjà brassé quelques idées et fait des entrevues et des
              enregistrements. À cela s’est ajouté, lors d’une résidence que
              l’artiste a réalisée dans le studio d’Avatar à l’automne 2018, tel
              un vieil ami complice que l’on retrouve, le piano. Tout était en
              place pour la création d’une nouvelle pièce : Le son-refuge.
              D’autres artistes ont été interpellés. On les a invités à prendre
              part au dialogue.
            </p>
          </OpenWindowWrapper>
        </OpenWindowBlock>

        <OpenWindowBlock>
          <Columns>
            <UnbreakableBlock>
              <p>
                Se prêtant au jeu de la collaboration, Anna Friz, Carole
                Rieussec et Erin Sexton ont ensuite acquiescé à notre intention,
                celle que ce projet soit un prétexte nous permettant de nous
                livrer à la création sonore en elle-même. Elles ont donc créé
                trois œuvres originales, qui entrent en résonance avec celle de
                Chantal. Pour ce faire, Anna Friz a composé un morceau à partir
                de deux enregistrements antérieurs qu’elle considère comme
                fondamentaux dans son parcours. Erin Sexton a travaillé, comme
                elle le fait souvent, autour de la question de la transmission
                des signaux en se positionnant elle-même comme émettrice et,
                surtout, comme réceptrice sur un mode performatif. Carole
                Rieussec a généré une œuvre en ayant recours à la parole
                recueillie qui évoque le corps en marche comme refuge devant
                l’exil et de l’imaginaire cherchant un ancrage dans le présent.
              </p>
            </UnbreakableBlock>

            <UnbreakableBlock>
              <p>
                Cette parole, le son de la voix, qu’on retrouve dans l’ensemble
                du parcours de Chantal Dumas, résonne par ailleurs fortement
                avec l’univers de Céline Huyghebaert, si bien que cette dernière
                en a fait l’un des fils conducteurs d’un texte de création qu’on
                pourra lire ici, d’un écrit qui fait écho aux pièces créées pour
                cette publication.
              </p>

              <p>
                En complément, une sélection de dix-sept œuvres choisies, créées
                entre 1993 et 2017, le tout étant accompagné de notes, suggère
                des pistes de lecture, puis d’écoute, ou inversement, dans ce
                volume.
              </p>
            </UnbreakableBlock>
          </Columns>
        </OpenWindowBlock>

        <OpenWindowBlock>
          <OpenWindowWrapper>
            <p>
              Volume 2: <i>Création radiophonique et art sonore</i>
            </p>

            <p>
              Mettre en perspective les œuvres de Chantal Dumas, c’est aussi
              traverser une époque où les supports ont souvent changé, de même
              que leur accessibilité. Dans un premier temps, c’est d’ailleurs ce
              qu’Avatar se proposait d’explorer en invitant l’artiste à
              participer à cette publication. « La question est intéressante en
              ce moment où je suis appelée à travailler le son pour différents
              domaines : Web, radio, théâtre, documentaire. Dans mon cas, est-ce
              que cela fait une différence ? » Aujourd’hui, la diffusion et
              l’écoute passent beaucoup par le Web, et les modalités de
              publication et de réception ont considérablement changé. « Je me
              demande quelle est l’incidence de ces transformations de la
              transmission et de l’écoute sur les écritures radiophoniques.
              Parle-t-on encore de radio ? Le terme production sonore serait-il
              plus adéquat ? », s’interrogeait Chantal.
            </p>
          </OpenWindowWrapper>
        </OpenWindowBlock>

        <OpenWindowBlock>
          <Columns>
            <p>
              Ces questions sur les différentes écritures sonores, nous les
              avons posées à une autrice et à cinq auteurs canadiens et
              européens, tous spécialistes de la discipline. Ils ont relevé le
              défi d’y répondre par des textes tout en examinant les œuvres de
              Chantal, en abordant certaines dimensions de son travail qui se
              démarquent et en élargissant leur analyse pour penser la création
              en termes ouverts. Ces textes sont rassemblés dans le deuxième
              volume de cette publication, volume intitulé Création
              radiophonique et art sonore. Il réunit divers essais. On y trouve,
              d’abord, une synthèse de certaines créations majeures de Chantal,
              synthèse qu’a préparée Étienne Noiseau. Puis, on peut y lire un
              essai de Mario Gauthier, qui a pris pour objet de réflexion la
              radio en s’appuyant sur une lecture du Son-refuge. Dans les pages
              suivantes, un texte d’Hélène Prévost évoque l’envergure de la
              production de l’artiste et le contexte dans lequel a évolué sa
              pratique. Un témoignage de Frédéric Dallaire aborde la notion de
              perception en traitant, en filigrane, de la question de la
              collaboration. Proposée par Serge Cardinal, une analyse de l’œuvre
              Tanz réfléchit sur le son qui donne corps, qui est matière, qui
              crée mouvement et espace. Finalement, on se penche sur la place de
              l’installation, sur le son et sur l’interactivité dans la pratique
              de l’artiste avec un texte que Golo Föllmer a rédigé à la suite
              d’un entretien qu’il a eu récemment avec elle.
            </p>
          </Columns>
        </OpenWindowBlock>

        <OpenWindowBlock>
          <OpenWindowWrapper>
            <p>
              En somme, Dialogues avec Chantal Dumas est un ouvrage touffu où le
              son est approché comme un langage ayant le potentiel de redéfinir
              la réalité, un langage artistique à part entière, pour Chantal
              Dumas.
            </p>
          </OpenWindowWrapper>
        </OpenWindowBlock>
      </section>

      <section id={t({ id: "slug.nothingButWater" })}>
        <SectionTitle>
          Rien que <br />
          de l'eau
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
          width: 100vw;
          margin: ${200 / typography.size.base}rem calc(50% - 50vw);

          * {
            width: 100%;
          }
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
                Ce texte contient des références à des œuvres et à des documents
                énumérés selon leur ordre d’apparition dans le présent écrit :
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
                    <i>Rien que de l’eau</i>, 1992.
                  </p>

                  <p>
                    Dictionnaire du centre national de ressources textuelles et
                    lexicales
                  </p>

                  <p>
                    Carole Rieussec, <i>JOKER</i>, 2019.
                  </p>

                  <p>
                    Mathieu Simonet, <br />
                    <i>Anne-Sarah K.</i>, 2019.
                  </p>

                  <p>
                    Stephen King, <br />
                    <i>Les Langoliers</i>, 1990.
                  </p>

                  <p>
                    Chantal Dumas, <br />
                    <i>Le son-refuge</i>, 2019.
                  </p>

                  <p>
                    Wolfgang Amadeus Mozart,{" "}
                    <i>Sonate pour piano n° 18 en ré majeur</i>, 1789.
                  </p>

                  <p>
                    Georges Perec, <br />
                    <i>L’Infra-ordinaire</i>, 1989.
                  </p>

                  <p>
                    Marielle Macé, <br />
                    <i>
                      Sidérer, considérer. <br />
                      Migrants en France
                    </i>
                    , 2017.
                  </p>
                </UnbreakableBlock>

                <UnbreakableBlock>
                  <p>
                    Emmanuel Perrin, <br />
                    <i>
                      Le « Bloop », un mystérieux son venu de l’océan qui a
                      longtemps intrigué les chercheurs
                    </i>
                    , 2015.
                  </p>
                  <p>
                    Erin Sexton, <i>expédition</i>, 2019.
                  </p>
                  <p>
                    Philippe Baudouin, <br />
                    <i>Les voix fantomatiques de Philippe Baudouin</i>, 2018.
                  </p>
                  <p>Wikipedia.</p>
                  <p>
                    Ryōko Sekiguchi, <br />
                    <i>La Voix sombre</i>, 2015.
                  </p>
                  <p>
                    Anna Friz, <br />
                    <i>Imperfect Breath</i>, 2019.
                  </p>
                  <p>
                    Giorgio Agamben, <br />
                    <i>Nudités</i>, 2012.
                  </p>
                  <p>
                    Musée d’art contemporain de Montréal,{" "}
                    <i>
                      Leonard Cohen. <br />
                      Une brèche en toute chose
                    </i>
                    , 2017–2018.
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
          margin-top: 100px;
          padding-bottom: 100px;

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
          <p>Dialogues avec Chantal&nbsp;Dumas</p>

          <p>
            Volume 1: <br />
            Le son-refuge
          </p>

          <p>Cette publication a été réalisée avec le concours de :</p>
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
            Direction de publication :
            <ul>
              <li>Caroline Gagné</li>
            </ul>
          </li>

          <li>
            Auteurs :
            <ul>
              <li>Caroline Gagné</li>
              <li>Céline Huyghebaert</li>
            </ul>
          </li>

          <li>
            Traduction anglaise des textes originaux français :
            <ul>
              <li>Oana Avasilichioaei</li>
            </ul>
          </li>

          <li>
            Révision des textes en français :
            <ul>
              <li>Valérie Litalien</li>
            </ul>
          </li>

          <li>
            Correction d’épreuves :
            <ul>
              <li>Judy Queen</li>
              <li>Valérie Litalien</li>
            </ul>
          </li>

          <li>
            Artistes :
            <ul>
              <li>Chantal Dumas</li>
              <li>Anna Friz</li>
              <li>Carole Rieussec</li>
              <li>Erin Sexton</li>
            </ul>
          </li>

          <li>
            Optimisation numérique des pièces :
            <ul>
              <li>Thierry Gauthier</li>
            </ul>
          </li>

          <li>
            Conception graphique :
            <ul>
              <li>
                <a href="http://criteriumdesign.com/">Criterium</a>
              </li>
            </ul>
          </li>

          <li>
            Programmation et intégration des contenus :
            <ul>
              <li>
                <a href="http://criteriumdesign.com/">Criterium</a>
              </li>
              <li>
                <a href="https://www.marcantoineruel.com/">Marc-Antoine Ruel</a>
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
            Édition et distribution : <br />
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
            Dépôt légal :
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
            © Avatar, les artistes,
            <br />
            les auteurs, 2019
          </p>

          <p>
            Tous droits réservés – <br />
            imprimé au Canada
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
  query accueilPageQuery {
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
            frontmatter {
              locale
            }
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
