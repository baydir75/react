
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import { UserContext, isLogged } from './context/userContext'
import React, { useState, useEffect } from 'react'


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

  const [LogStatus, setLogStatus] = useState(isLogged.false)
  const setAuth = () => {
    setLogStatus(isLogged.true)
  }

  const value = {
    LogStatus: LogStatus,
    setAuth: setAuth
  }
  
  return (
    <UserContext.Provider value={value}>
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
    </UserContext.Provider>
  )
}

export default App