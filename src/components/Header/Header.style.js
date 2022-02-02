import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 20px; */
  position: relative;
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
  height: 50px;
  width: 50px;
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
export const UserName = styled.p`
  margin: 0;
  text-transform: uppercase;
`
