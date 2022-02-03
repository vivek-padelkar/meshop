import { Component } from 'react'
import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage.component'
import SignInSignUpPage from './pages/signIn-signUp-page/signIn-signUp-page.component'
import ShopPage from './pages/shoppage/Shop.component'
import Checkout from './pages/checkout/checkout.component'

import Header from './components/Header/Header.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'
import collections from './pages/collections/collections.component'

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
          <Route exact path="/shop/:collection" component={collections} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />

          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
