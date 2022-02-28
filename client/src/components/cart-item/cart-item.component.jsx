import React from 'react'
import {
  CartItemContainer,
  ItemImage,
  ItemDetailContainer,
  ItemName,
  ItemPrice,
} from './cart-item.style.js'

const CartItem = ({ item: { imageUrl, price, name, qty } }) => {
  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={`image of ${name}`} />
      <ItemDetailContainer>
        <ItemName>{name}</ItemName>
        <ItemPrice>
          {qty} x &#8377;{price}
        </ItemPrice>
      </ItemDetailContainer>
    </CartItemContainer>
  )
}

export default React.memo(CartItem)
