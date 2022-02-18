import { Component, useEffect } from 'react'
import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage.component'
import SignInSignUpPage from './pages/signIn-signUp-page/signIn-signUp-page.component'
import ShopPage from './pages/shoppage/Shop.component'
import Checkout from './pages/checkout/checkout.component'

import Header from './components/Header/Header.component'

import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreviw } from './redux/shop/shop.selector'
import Collections from './pages/collections/collections.component'
import { checkUserSession } from './redux/user/user.actions'

const App = () => {
  //unSubscribeAuth = null
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  // componentWillUnmount() {
  //   this.unSubscribeAuth()
  // }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/shop/:collectionId" component={Collections} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  //will pass state in bellw functions automatically eg.selectCurrentUser(state)
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreviw,
})

const mapDispatchToProp = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})
export default App
