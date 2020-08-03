export const setCart = cart => {
  localStorage.setItem("cart", JSON.stringify(cart))
}

export const getCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart"))
    if (cart) {
      return cart
    }
  } catch (err) {
    return err
  }
  return []
}

export const addToCart = (product, qty = 1) => {
  const cart = getCart()

  //if the product is already there
  const indexOfProduct = cart.findIndex(
    alreadyInCart => alreadyInCart.strapiId === product.strapiId
  )

  if (indexOfProduct !== -1) {
    //update the quantity
    cart[indexOfProduct].qty += parseInt(qty)

    if (cart[indexOfProduct].qty === 0) {
      //remove product from cart
      cart.splice(indexOfProduct, 1)
    }
  } else {
    //set qty 1
    product.qty = parseInt(qty)

    //push the product
    cart.push(product)
  }

  setCart(cart)
}
