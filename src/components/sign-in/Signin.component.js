import { SignInContainer } from './Signin.style'
import { Component } from 'react'
import FormInput from '../form-input/FormInput.component'
import CustomeButton from '../custome-button/CustomeButton.component'
import { siginInWithGoogle } from '../../firebase/firebase.utils'
import { auth } from '../../firebase/firebase.utils'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handelSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      console.log('success')
      this.setState({
        email: '',
        password: '',
      })
    } catch (error) {
      console.log('error while login using email and password' + error.message)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handelSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            required
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            required
            value={this.state.password}
            handleChange={this.handleChange}
          />

          <CustomeButton type="submit">Sign in</CustomeButton>
          <CustomeButton isGoogleSignIn={true} onClick={siginInWithGoogle}>
            Sign in with Google
          </CustomeButton>
        </form>
      </SignInContainer>
    )
  }
}

export default SignIn
