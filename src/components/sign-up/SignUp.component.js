import { Component } from 'react'
import { SignUpContainer, Title, CutomForm } from './SignUp.style'
import FormInput from '../form-input/FormInput.component'
import CustomeButton from '../custome-button/CustomeButton.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      emal: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert(`Password don't match`)
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })
      this.setState({
        displayNmae: '',
        emal: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.log('error while sign up ' + error.message)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <SignUpContainer>
        <Title>I do not have a account</Title>
        <span>Sign up with your email and password</span>

        <CutomForm onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayNmae"
            label="Display Name"
            value={displayName}
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />

          <CustomeButton type="submit">Sign up</CustomeButton>
        </CutomForm>
      </SignUpContainer>
    )
  }
}

export default SignUp
