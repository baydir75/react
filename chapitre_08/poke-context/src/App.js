
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

/* class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/Login"}>Login</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
} */

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/Login"}>Login</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App