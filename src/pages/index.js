import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import AlbumCard from "../components/AlbumCard/AlbumCard"
import ArtistsView from "../views/ArtistsView"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const artists = data.artists.edges.map(({ node }) => ({
    name: node.frontmatter.title,
    description: node.html,
  }))

  return (
    <Layout>
      <SEO title="Home" />

      <ArtistsView artists={artists} />

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
