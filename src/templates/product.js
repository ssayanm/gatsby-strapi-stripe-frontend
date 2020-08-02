import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const ProductTemplate = ({ data }) => {
  return (
    <Layout>
      <h2>{data.strapiProducts.name}</h2>
      <p>{data.strapiProducts.content}</p>
      <Image
        fluid={data.strapiProducts.thumbnail.childImageSharp.fluid}
        className="home-img"
      />
    </Layout>
  )
}

export default ProductTemplate

export const query = graphql`
  query ProductTemplateQuery($slug: String) {
    strapiProducts(slug: { eq: $slug }) {
      id
      name
      price
      content
      thumbnail {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
