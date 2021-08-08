import React from 'react'
import { Link } from "react-router-dom"
import Films from '../data/films.json'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Homepage</h1>
                <ul>
                    {Films.map(film => {
                        return (
                            <li><Link to={`film/${film.id}`} >{film.title}</Link></li>
                        )
                    })}
                </ul>
            </div>
        )
    }

}

export default Home