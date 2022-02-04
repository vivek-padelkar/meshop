import {
  CartIconContainer,
  ItemCount,
  StyledShoppingIcon,
} from './cartIcon.style'
import { connect } from 'react-redux'
import { ToggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  return (
    <CartIconContainer
      onClick={() => {
        //console.log('ima fired')
        toggleCartHidden()
      }}
    >
      <StyledShoppingIcon />
      <ItemCount>{cartItems > 0 ? cartItems : null}</ItemCount>
    </CartIconContainer>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItemsCount(state),
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(ToggleCartHidden()),
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
