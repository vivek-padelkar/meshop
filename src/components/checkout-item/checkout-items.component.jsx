import {
  CheckoutItemsContainer,
  ImageContainer,
  ItemImage,
  Name,
  Qty,
  Price,
  RemoveButtonContainer,
  Arrow,
  Value,
} from './checkout-items.style'
import { connect } from 'react-redux'
import { clearItemFromCart } from '../../redux/cart/cart.actions'
import { addItem, removeItem } from '../../redux/cart/cart.actions'

const CheckoutItems = ({
  cartItem,
  clearItemFromCart,
  addItem,
  removeItem,
}) => {
  const { name, imageUrl, price, qty } = cartItem
  return (
    <CheckoutItemsContainer>
      <ImageContainer>
        <ItemImage src={imageUrl} alt={`Product image of ${name}`}></ItemImage>
      </ImageContainer>
      <Name>{name}</Name>
      <Qty>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Value>{qty}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </Qty>
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
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItems)
