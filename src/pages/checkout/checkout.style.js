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
export const EmptyCartContainer = styled.div`
  width: 60%;
  height: 50vh;
  opacity: 0.8;
  position: relative;
`
export const EmptyCartButton = styled.button`
  width: 400px;
  height: 50px;
  border: none;
  background-color: black;
  color: white;
  position: absolute;
  bottom: 250px;
  cursor: pointer;
  transition: 0.1s ease-in-out all;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`
export const EmptyCartImage = styled.img`
  width: 100%;
  height: 100%;
`
