import Homepage from './pages/homepage/Homepage.component'
import './App.css'
import { Route, Switch } from 'react-router-dom'

const Hats = () => {
  return <h1>Hats</h1>
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={Hats} />
      </Switch>
    </div>
  )
}

export default App
