import React from 'react'
import Films from '../data/films.json'

class FilmInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        console.log(Films[0])
        const filmTest = Films.filter(film => film.id === parseInt(this.props.match.params.id))
        console.log(filmTest)
        return (
            <div>
                <h1>{filmTest[0].title}</h1>
                <img src={filmTest[0].image} alt="poster"></img>
                <p>{filmTest[0].director}</p>
                <ul>
                    {filmTest[0].stars.map(stars => {
                        return (
                            <li>{stars}</li>
                        )
                    })}
                </ul>
                <p>{filmTest[0].description}</p>
            </div>
        )
    }
}

export default FilmInfo