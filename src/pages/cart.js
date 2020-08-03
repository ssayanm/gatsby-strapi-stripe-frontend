import React from "react"
import { getCart } from "../utils/cart"
import Layout from "../components/layout"
import Image from "gatsby-image"

const cart = () => {
  const cart = getCart()
  return (
    <Layout>
      <div>
        <h1>Cart Page</h1>
        {cart.map(product => (
          <div>
            <Image
              fluid={product.thumbnail.childImageSharp.fluid}
              className="home-img"
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.qty}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default cart
