import {
  CartIconContainer,
  ItemCount,
  StyledShoppingIcon,
} from './cartIcon.style'
import { connect } from 'react-redux'
import { ToggleCartHidden } from '../../redux/cart/cart.actions'

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <StyledShoppingIcon />
      <ItemCount>5</ItemCount>
    </CartIconContainer>
  )
}

// const mapStateToProps = state =>()

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(ToggleCartHidden()),
})
export default connect(null, mapDispatchToProps)(CartIcon)
