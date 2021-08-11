import React from 'react'
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { isLogged, UserContext } from '../context/userContext';

const Login = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const logState = useContext(UserContext)

    const onSubmit = () => {
        logState.setAuth()
    }

    console.log(logState.LogStatus.isLogged)
    return (<div>
        <p>Login</p>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username", { required: true, maxLength: 15 })} />
            {errors.username && <span>Le nom d'utilisateur est trop long : 15 caractères maximum</span>}
            <input type="password"{...register("password", { required: true, minLength: 6 })} />
            {errors.password && <span>Le mot de passe est trop court : 6 caractères minimum</span>}
            {logState.LogStatus.isLogged === false ? <button className="button" type="submit">Se connecter</button> : <button className="button" onClick={onSubmit}>Se déconnecter</button>}
            
        </form>
    </div>)
}

export default Login