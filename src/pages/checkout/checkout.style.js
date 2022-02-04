import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  font-weight: bold;
`
export const CheckoutHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  border-bottom: 1px solid darkgray;
`
export const HeaderBlock = styled.div`
  text-transform: uppercase;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`
export const HeaderTitle = styled.span``
export const Total = styled.div`
  margin-top: 20px;
  font-size: 24px;
  margin-bottom: 20px;
`
export const productImageContainer = styled.div`
  width: 22%;
  background-color: red;
`
export const ShopData = styled.div`
  display: flex;
  flex-direction: column;
`
export const TestCardDetail = styled.div`
  margin-top: 20px;
  color: red;
  align-items: center;
`
