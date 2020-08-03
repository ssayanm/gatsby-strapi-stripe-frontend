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

export const addToCart = product => {
  const cart = getCart()

  //if the product is already there
  const indexOfProduct = cart.findIndex(
    alreadyInCart => alreadyInCart.strapiId === product.strapiId
  )

  if (indexOfProduct !== -1) {
    //update the quantity
    cart[indexOfProduct].qty += 1
  } else {
    //set qty 1
    product.qty = 1

    //push the product
    cart.push(product)
  }

  setCart(cart)
}
