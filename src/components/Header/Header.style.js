import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 5px; */
`
export const LogoName = styled.span``
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`
export const LogoImageContainer = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`
export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 20px;
  font-weight: bold;
`
