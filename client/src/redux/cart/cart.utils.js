export const addToItemToCart = (cartItems, newItem) => {
  const isExsist = cartItems.find((item) => item.id === newItem.id)
  if (isExsist) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, qty: item.qty + 1 } : item
    )
  }

  return [...cartItems, { ...newItem, qty: 1 }]
}

export const removeItemFromart = (cartItems, ItemToRemove) => {
  const isExsist = cartItems.find((item) => item.id === ItemToRemove.id)
  if (isExsist.qty === 1) {
    //remove if exsisting item qyy is 1
    return cartItems.filter((item) => item.id !== ItemToRemove.id)
  }

  return cartItems.map((item) =>
    item.id === ItemToRemove.id ? { ...item, qty: item.qty - 1 } : item
  )
}
