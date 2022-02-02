import { cartActionType } from './cart.types'
import { addToItemToCart, removeItemFromart } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addToItemToCart(state.cartItems, action.payload),
      }
    case cartActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromart(state.cartItems, action.payload),
      }
    case cartActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      }

    default:
      return state
  }
}

export default cartReducer
