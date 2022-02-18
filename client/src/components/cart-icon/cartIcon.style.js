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
  /* margin-top: 2px; */
`

export const ItemCount = styled.span`
  position: absolute;
  font-size: 11px;
  font-weight: bolder;
  top: 10px;
`
export const StyledShoppingIcon = styled(ShoppingIcon)`
  width: 30px;
  height: 30px;
`
