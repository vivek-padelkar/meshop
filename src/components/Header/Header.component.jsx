import {
  HeaderContainer,
  StyledLink,
  LogoContainer,
  OptionContainer,
  LogoName,
  LogoImageContainer,
} from './Header.style'
import { ReactComponent as Logo } from '../../assets/flogo.svg'

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <LogoContainer>
          <LogoImageContainer>
            <Logo />
          </LogoImageContainer>
          <LogoName>MeShop</LogoName>
        </LogoContainer>
      </StyledLink>

      <OptionContainer>
        <StyledLink to="/shop">SHOP</StyledLink>
        <StyledLink to="/">CONTACT</StyledLink>
      </OptionContainer>
    </HeaderContainer>
  )
}

export default Header
