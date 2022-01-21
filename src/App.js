import Homepage from './pages/homepage/Homepage.component'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shoppage/Shop.component'
import Header from './components/Header/Header.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
