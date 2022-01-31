import styled from 'styled-components'
import CustomeButton from '../custome-button/CustomeButton.component.jsx'

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
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
export const CartItem = styled.div`
  height: 24px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`
export const StyledButton = styled(CustomeButton)`
  /* margin-top: auto;
  margin-right: auto;
  margin-left: auto; */
  margin: auto;
`
