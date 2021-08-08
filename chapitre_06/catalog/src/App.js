import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import Home from './Components/Home'
import FilmInfo from './Components/FilmInfo'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/film/:id" component={FilmInfo} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }

}


export default App