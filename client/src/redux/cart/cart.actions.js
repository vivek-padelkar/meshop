import { cartActionType } from './cart.types'

export const ToggleCartHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
  type: cartActionType.ADD_ITEM,
  payload: item,
})

export const clearItemFromCart = (item) => ({
  type: cartActionType.CLEAR_ITEM_FROM_CART,
  payload: item,
})

export const removeItem = (item) => ({
  type: cartActionType.REMOVE_ITEM,
  payload: item,
})

export const clearCart = ()=>({
  type: cartActionType.CLEAR_CART,
})