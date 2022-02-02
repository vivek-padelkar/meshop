import {
  HeaderContainer,
  StyledLink,
  LogoContainer,
  OptionContainer,
  LogoName,
  LogoImageContainer,
  UserName,
} from './Header.style'
import { ReactComponent as Logo } from '../../assets/flogo.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cartIcon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
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
        {currentUser && currentUser.currentUser ? (
          <UserName> {`Heya, ${currentUser.currentUser.displayName}`}</UserName>
        ) : null}

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

//createStructuredSelector will pass high level state automatically
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
