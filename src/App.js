import Homepage from './pages/homepage/Homepage.component'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shoppage/Shop.component'

const Hats = () => {
  return <h1>Hats</h1>
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={Hats} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
