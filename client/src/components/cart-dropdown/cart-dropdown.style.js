import styled from 'styled-components'
import CustomeButton from '../custome-button/CustomeButton.component.jsx'

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 0;
  z-index: 5;
`
export const CartItemContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 20px;
`
export const StyledButton = styled(CustomeButton)`
  /* margin-top: auto;
  margin-right: auto;
  margin-left: auto; */
  margin: auto;
  margin-bottom: 5px;
`
export const EmptyCartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const EmptyCartImage = styled.img`
  width: 70%;
  height: 40%;
`
export const EmptyCartTitle = styled.h2``
export const EmptyCartSubtitle = styled.p`
  font-weight: bold;
`
