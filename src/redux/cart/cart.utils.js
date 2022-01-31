export const addToItemToCart = (cartItems, newItem) => {
  const isExsist = cartItems.find((item) => item.id === newItem.id)
  if (isExsist) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, qty: item.qty + 1 } : item
    )
  }

  return [...cartItems, { ...newItem, qty: 1 }]
}
