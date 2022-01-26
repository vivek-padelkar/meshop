import Homepage from './pages/homepage/Homepage.component'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shoppage/Shop.component'
import Header from './components/Header/Header.component'
import SignInSignUpPage from './pages/signIn-signUp-page/signIn-signUp-page.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    }
  }

  unSubscribeAuth = null

  componentDidMount() {
    //its a observer that runs every sign in and sign out
    this.unSubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const UserRef = await createUserProfileDocument(userAuth)
        UserRef.onSnapshot((snapshot) => {
          console.log(`yo  snapshot ${JSON.stringify(snapshot.data())}`)
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            console.log(this.state)
          )
        })
      }

      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unSubscribeAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    )
  }
}
export default App
