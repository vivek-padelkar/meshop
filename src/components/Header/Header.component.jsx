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
import CartIcon from '../cart-icon/cartIcon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </OptionContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser: currentUser,
  hidden: hidden,
})

export default connect(mapStateToProps)(Header)
