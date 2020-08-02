import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"
import "../style.css"

import { fromProductSlugToUrl } from "../utils/products"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allStrapiProducts.nodes.map(product => {
      return (
        <Link to={`/products/${product.slug}`} key={product.id}>
          <div key={product.id} className="home">
            <div>
              <Image
                fluid={product.thumbnail.childImageSharp.fluid}
                className="home-img"
              />
              <p>
                {product.name} | ${product.price}
              </p>
            </div>
          </div>
        </Link>
      )
    })}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allStrapiProducts {
      nodes {
        id
        content
        name
        price
        slug
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
