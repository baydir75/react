import React, { useState, useEffect } from 'react'
import Card from './Card'


const Popular = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc2a5a8148ab337def955521eb4a5f3a`)
            .then((res) => res.json())
            .then((res) => { setMovie(res.results) })
    }, [])

    if (!movie) {
        return null
    }
    console.log(movie)
    return (
        <div>
            <h1>Popular</h1>
            {movie.map(item => {
                return (
                    <div>
                        <Card {...item}/>
                    </div>
                )
            })}
        </div>

    )
}

export default Popular