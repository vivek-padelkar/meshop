import { SigninSignUpPageContainer } from './signIn-signUp-page.style'
import SignIn from '../../components/sign-in/Signin.component'
import SignUp from '../../components/sign-up/SignUp.component'
const SignInSignUpPage = () => {
  return (
    <SigninSignUpPageContainer>
      <SignIn />
      <SignUp />
    </SigninSignUpPageContainer>
  )
}

export default SignInSignUpPage
