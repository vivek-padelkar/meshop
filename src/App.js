import Homepage from './pages/homepage/Homepage.component'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shoppage/Shop.component'
import Header from './components/Header/Header.component'
import SignInSignUpPage from './pages/signIn-signUp-page/signIn-signUp-page.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
class App extends Component {
  unSubscribeAuth = null

  componentDidMount() {
    //its a observer that runs every sign in and sign out
    const { setCurrentUser } = this.props
    this.unSubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const UserRef = await createUserProfileDocument(userAuth)
        UserRef.onSnapshot((snapshot) => {
          setCurrentUser(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            console.log('setting state' + JSON.stringify(this.state))
          )
        })
      }

      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unSubscribeAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(null, mapDispatchToProps)(App)
