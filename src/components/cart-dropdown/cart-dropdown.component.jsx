import {
  CartDropDownContainer,
  CartItemContainer,
  StyledButton,
  EmptyCartContainer,
  EmptyCartImage,
  EmptyCartTitle,
  EmptyCartSubtitle,
} from './cart-dropdown.style.js'
import CartItem from '../cart-item/cart-item.component.jsx'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors.js'

const CartDropDown = ({ cartItems }) => {
  return (
    <CartDropDownContainer>
      {cartItems.length > 0 ? (
        <>
          <CartItemContainer>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </CartItemContainer>
          <StyledButton>GO TO CHECKasasOUT</StyledButton>
        </>
      ) : (
        <EmptyCartContainer>
          <EmptyCartImage src="images/empty_cart.png" />
          <EmptyCartTitle>Your cart is empty</EmptyCartTitle>
          <EmptyCartSubtitle>
            Add something to make me happy!!
          </EmptyCartSubtitle>
        </EmptyCartContainer>
      )}
    </CartDropDownContainer>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})
export default connect(mapStateToProps)(CartDropDown)
