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
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cartIcon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { signOutStart } from '../../redux/user/user.actions'

const Header = ({ currentUser, hidden, signOutStart }) => {
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
        {currentUser ? (
          <UserName> {`Heya, ${currentUser.displayName}`}</UserName>
        ) : null}

        <StyledLink to="/shop">SHOP</StyledLink>
        <StyledLink to="/">CONTACT</StyledLink>
        {currentUser ? (
          <StyledLink
            to="/signin"
            onClick={() => {
              signOutStart()
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

const mapDispatchToProp = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps, mapDispatchToProp)(Header)
