import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  HeaderTitle,
  Total,
  ShopData,
  TestCardDetail,
} from './checkout.style'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  selectCartTotal,
  selectCartItems,
} from '../../redux/cart/cart.selectors'
import CheckoutItems from '../../components/checkout-item/checkout-items.component'
import StripButton from '../../components/stripe-button/stripe-button.component'

const Checkout = ({ cartItems, total }) => {
  return (
    <CheckoutContainer>
      <ShopData>
        <CheckoutHeader>
          <HeaderBlock>
            <HeaderTitle>Product</HeaderTitle>
          </HeaderBlock>
          <HeaderBlock>
            <HeaderTitle>Description</HeaderTitle>
          </HeaderBlock>
          <HeaderBlock>
            <HeaderTitle>Quantity</HeaderTitle>
          </HeaderBlock>
          <HeaderBlock>
            <HeaderTitle>Price</HeaderTitle>
          </HeaderBlock>
          <HeaderBlock>
            <HeaderTitle>Remove</HeaderTitle>
          </HeaderBlock>
        </CheckoutHeader>

        {cartItems.map((item) => (
          <CheckoutItems key={item.id} cartItem={item} />
        ))}
      </ShopData>
      <Total>
        <span>TOTAL: {total}</span>
      </Total>
      <StripButton price={total} />
    </CheckoutContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})
export default connect(mapStateToProps)(Checkout)
