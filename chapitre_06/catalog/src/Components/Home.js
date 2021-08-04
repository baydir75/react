import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import Films from '../data/films.json'
import FilmInfo from './FilmInfo'

class Home extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <BrowserRouter>
            <div>
                <h1>Homepage</h1>
                <ul>
                {Films.map(film => {
                    return (
                        <li><Link to="/film/:id">{film.title}</Link></li>
                    )
                })}
                </ul>
               <Switch>
                   <Route path="/film/:id" component={FilmInfo} />

               </Switch>
            </div>
            </BrowserRouter>
        )
    }
    
}

export default Home