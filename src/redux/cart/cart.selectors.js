import { createSelector } from 'reselect'

//inputselector = dosent use createSelector
//outputselector = dose need input selector and createSelector

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + item.qty, 0)
)
