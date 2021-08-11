import React, { useState, useEffect } from 'react'
import { useContext } from "react";
import { isLogged, UserContext } from '../context/userContext';



const Home = (props) => {
    const logState = useContext(UserContext)

    const [pokemon, setPokemon] = useState(null)

    const randomNumber = () => {
        return Math.floor(Math.random() * 100) + 1
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`)
            .then((res) => res.json())
            .then((res) => { setPokemon(res) })
    }, [])

    if (!pokemon) {
        return null
    }
    if (logState.LogStatus.isLogged === true) {
        return <div>
            <p>Home</p>
            <div>
                <p>Name: {pokemon.name}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Type: {pokemon.types[0].type.name}</p>
            </div>
        </div>
    } else {
        return <div>
            <p>Connectez Vous</p>
        </div>
    }
}

export default Home