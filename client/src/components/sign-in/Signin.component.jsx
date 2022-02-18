import { SignInContainer } from './Signin.style'
import { useState } from 'react'
import FormInput from '../form-input/FormInput.component'
import CustomeButton from '../custome-button/CustomeButton.component'
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions'
import { connect } from 'react-redux'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  })

  const { email, password } = userCredentials

  const handelSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = userCredentials
    emailSignInStart(email, password)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handelSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          required
          value={email}
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          required
          value={password}
          handleChange={handleChange}
        />

        <CustomeButton type="submit">Sign in</CustomeButton>
        <CustomeButton
          type="button"
          isGoogleSignIn={true}
          onClick={googleSignInStart}
        >
          Sign in with Google
        </CustomeButton>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
