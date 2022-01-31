import {
  CartDropDownContainer,
  CartItem,
  StyledButton,
} from './cart-dropdown.style.js'

const CartDropDown = () => {
  return (
    <CartDropDownContainer>
      <CartItem />
      <StyledButton>GO TO CHECKOUT</StyledButton>
    </CartDropDownContainer>
  )
}

export default CartDropDown
