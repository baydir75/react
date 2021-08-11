import React, { useState, useEffect } from 'react'
import { useContext } from "react";
import { isLogged, UserContext } from '../context/userContext';



const Home = (props) => {
    const logState = useContext(UserContext)

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1);

    const randomNumber = () => {
        return Math.floor(Math.random() * 100) + 1
    }

    const [allPokemon, setAllPokemon] = useState([])

    const handleClick = () => {
        setId(randomNumber())
    }

    useEffect(() => {

        if (!allPokemon.includes(id)) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then((res) => res.json())
                .then((res) => { 
                    setPokemon(res)
                    setAllPokemon([...allPokemon, { weight: res.weight }])
                 })
           
            console.log(allPokemon)
        } else {
            console.log(`id déjà dans le tableau : ${id}`)
        }
    }, [id])

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
                <button onClick={handleClick}>Random</button>
            </div>
        </div>
    } else {
        return <div>
            <p>Connectez Vous</p>
        </div>
    }
}

export default Home