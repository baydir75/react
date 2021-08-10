import React, { useState, useEffect } from 'react'
import Card from './Card'

const PopularBattle = () => {

    const [movies, setMovies] = useState([])

    const [currentBattle, setCurrentBattle] = useState(0)

    const updateIndexMovieBattle = (movieId) => {
        console.log("updateIndexMovieBattle", typeof movieId);

        const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || []

        console.log("idsFavorites", idsFavorites);

        // if (!idsFavorites.find(elem => elem === movieId)) {
        if (!idsFavorites.includes(movieId)) {
            idsFavorites.push(movieId)

            localStorage.setItem("favorites", JSON.stringify(idsFavorites))
        }


        setCurrentBattle(currentBattle + 2)
    }

    const renderTwoMovies = () => {
        return (
            <>
                <div style={{ cursor: "pointer" }}
                    onClick={() => updateIndexMovieBattle(movies[currentBattle].id)}>
                    <Card
                        title={movies[currentBattle].title}
                        backdrop_path={movies[currentBattle].backdrop_path}
                        release_date={movies[currentBattle].release_date}
                        overview={movies[currentBattle].overview}
                    />
                </div>
                <div style={{ cursor: "pointer" }}
                    onClick={() => updateIndexMovieBattle(this.state.movies[currentBattle + 1].id)}>
                    <Card
                        title={movies[currentBattle + 1].title}
                        backdrop_path={movies[currentBattle + 1].backdrop_path}
                        release_date={movies[currentBattle + 1].release_date}
                        overview={movies[currentBattle + 1].overview}
                    />
                </div>
            </>
        )
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc2a5a8148ab337def955521eb4a5f3a`)
            .then((res) => res.json())
            .then((res) => { setMovies(res.results) })
    }, [])

    if (!movies) {
        return null
    }

    return (
        <div>
            <h1>Popular Battle</h1>

            {currentBattle > 19 ? "Vous avez parcouru tous les films" : <div>
                {movies.length !== 0 ? renderTwoMovies() : "Please wait until the movies are loaded"}
            </div>}

        </div>
    )
}

export default PopularBattle