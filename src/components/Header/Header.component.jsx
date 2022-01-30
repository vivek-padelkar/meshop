import {
  HeaderContainer,
  StyledLink,
  LogoContainer,
  OptionContainer,
  LogoName,
  LogoImageContainer,
} from './Header.style'
import { ReactComponent as Logo } from '../../assets/flogo.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <StyledLink
            to="/signin"
            onClick={() => {
              auth.signOut()
            }}
          >
            SIGN OUT
          </StyledLink>
        ) : (
          <StyledLink to="/signin">SIGN IN</StyledLink>
        )}
      </OptionContainer>
    </HeaderContainer>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header)
