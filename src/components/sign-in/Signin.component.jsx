import { SignInContainer } from './Signin.style'
import { Component } from 'react'
import FormInput from '../form-input/FormInput.component'
import CustomeButton from '../custome-button/CustomeButton.component'
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions'
import { connect } from 'react-redux'

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
    const { emailSignInStart } = this.props
    const { email, password } = this.state
    emailSignInStart(email, password)
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { googleSignInStart } = this.props
    const { email, password } = this.state

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
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
