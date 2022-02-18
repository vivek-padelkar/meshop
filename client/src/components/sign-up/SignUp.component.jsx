import { connect } from 'react-redux'
import { useState } from 'react'
import { SignUpContainer, Title, CutomForm } from './SignUp.style'
import FormInput from '../form-input/FormInput.component'
import CustomeButton from '../custome-button/CustomeButton.component'
import { signUpstart } from '../../redux/user/user.actions'

const SignUp = ({ signUpstart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    emal: '',
    password: '',
    confirmPassword: '',
  })

  const { displayName, email, password, confirmPassword } = userCredentials

  const handleSubmit = async (e) => {
    alert(`Password don't match`)
    e.preventDefault()
    if (password !== confirmPassword) {
      return
    }

    signUpstart({ displayName, email, password })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <SignUpContainer>
      <Title>I do not have a account</Title>
      <span>Sign up with your email and password</span>

      <CutomForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          onChange={handleChange}
          required
        />

        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <CustomeButton type="submit">Sign up</CustomeButton>
      </CutomForm>
    </SignUpContainer>
  )
}

const mapDispatchToProp = (dispatch) => ({
  signUpstart: (userCredential) => dispatch(signUpstart(userCredential)),
})
export default connect(null, mapDispatchToProp)(SignUp)
