import { useEffect, lazy, Suspense } from 'react'
import { GlobalStyle } from './global'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './components/Header/Header.component'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions'
import Spinner from './components/spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/Error-boundary.component'
import About from './components/about-us/About-us.component'

const App = () => {
  //unSubscribeAuth = null
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  const Homepage = lazy(() => import('./pages/homepage/Homepage.component'))
  const ShopPage = lazy(() => import('./pages/shoppage/Shop.component'))
  const Collections = lazy(() =>
    import('./pages/collections/collections.component')
  )
  const SignInSignUpPage = lazy(() =>
    import('./pages/signIn-signUp-page/signIn-signUp-page.component')
  )
  const Checkout = lazy(() => import('./pages/checkout/checkout.component'))

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
            <Route exact path="/about" component={About} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  )
}

export default App
