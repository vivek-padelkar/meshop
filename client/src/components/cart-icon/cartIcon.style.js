import styled from 'styled-components'
import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg'

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`

export const ItemCount = styled.span`
  position: absolute;
  font-size: 18px;
  font-weight: bolder;
  top: 7px;

  @media screen and (max-width: 800px) {
    font-size: 15px;
    font-weight: bolder;
    top: 15px;
  }
`
export const StyledShoppingIcon = styled(ShoppingIcon)`
  width: 30px;
  height: 30px;
`
