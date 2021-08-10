import { Route, Switch, BrowserRouter, Link } from 'react-router-dom'
import Home from './components/Home'
import Weekly from './components/Weekly'
import Popular from './components/Popular'
import Favorites from './components/Favorites'
import WeeklyBattle from './components/Weekly-Battle'
import PopularBattle from './components/Popular-Battle'


const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <p>Hello World</p>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/Weekly">Weekly</Link></p>
        <p><Link to="/Popular">Popular</Link></p>
        <p><Link to="/Favorites">Favorites</Link></p>
        <p><Link to="/WeeklyBattle">Weekly Battle</Link></p>
        <p><Link to="/PopularBattle">Popular Battle</Link></p>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Weekly" component={Weekly} />
        <Route path="/Popular" component={Popular} />
        <Route path="/Favorites" component={Favorites} />
        <Route path="/WeeklyBattle" component={WeeklyBattle} />
        <Route path="/PopularBattle" component={PopularBattle} />
      </Switch>
    </BrowserRouter>
  )
}

export default App