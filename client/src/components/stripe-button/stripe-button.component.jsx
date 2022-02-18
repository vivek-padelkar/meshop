import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripButton = ({ price }) => {
  const priceForStripe = price
  const publishKey =
    'pk_test_51K9o7dSB4Ijr85I2381Wo8Zf9FBVKavI5mR5E5pqpQTXpv7VXXj7A1X6f2JybtNIsoaFvfKIjjskNmLnDYyBL4XQ00WKJoZi6L'

  const ontoken = async (token) => {
    try {
      console.log(token)

      const reqData = {
        amount: Math.round(priceForStripe + 8.9),
        token,
      }

      const result = await axios.post('payment', reqData)
      alert('Payment done !! thanks for shopping !!')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <StripeCheckout
      label="Pay Now"
      nmae="MeShop Ltd."
      billingAddress
      shippingAddress
      image="images/flogo.svg"
      description={`Your Total is INR ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={ontoken}
      stripeKey={publishKey}
    />
  )
}

export default StripButton
