import {
  CheckoutItemsContainer,
  ImageContainer,
  ItemImage,
  Name,
  Qty,
  Price,
  RemoveButtonContainer,
} from './checkout-items.style'
import { connect } from 'react-redux'
import { clearItemFromCart } from '../../redux/cart/cart.actions'

const CheckoutItems = ({ cartItem, clearItemFromCart }) => {
  const { name, imageUrl, price, qty } = cartItem
  return (
    <CheckoutItemsContainer>
      <ImageContainer>
        <ItemImage src={imageUrl} alt="a"></ItemImage>
      </ImageContainer>
      <Name>{name}</Name>
      <Qty>{qty}</Qty>
      <Price>{price}</Price>
      <RemoveButtonContainer
        onClick={() => {
          clearItemFromCart(cartItem)
        }}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemsContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItems)
