import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  HeaderTitle,
  Total,
  ShopData,
  EmptyCartContainer,
  EmptyCartImage,
  EmptyCartButton,
} from './checkout.style'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  selectCartTotal,
  selectCartItems,
} from '../../redux/cart/cart.selectors'
import CheckoutItems from '../../components/checkout-item/checkout-items.component'
import StripButton from '../../components/stripe-button/stripe-button.component'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const Checkout = ({ cartItems, total }) => {
  const history = useHistory()
  return (
    <CheckoutContainer>
      {cartItems.length > 0 ? (
        <>
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
        </>
      ) : (
        <>
          <EmptyCartContainer>
            <EmptyCartImage src="images/empty_cart_container1.jpg" />
          </EmptyCartContainer>
          <EmptyCartButton
            onClick={() => {
              history.push('/')
            }}
          >
            Let's Shop
          </EmptyCartButton>
        </>
      )}
    </CheckoutContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})
export default connect(mapStateToProps)(Checkout)
