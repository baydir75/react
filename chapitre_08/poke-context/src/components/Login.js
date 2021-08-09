import React from 'react'

import { useForm } from "react-hook-form"

const Login = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => console.log(data)

    return (<div>
        <p>Login</p>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username", { required: true, maxLength: 15 })} />
            {errors.username && <span>Le nom d'utilisateur est trop long : 15 caractères maximum</span>}
            <input {...register("password", { required: true, minLength: 6 })} />
            {errors.password && <span>Le mot de passe est trop court : 6 caractères minimum</span>}
            <input type="submit" />
        </form>
    </div>)
}

export default Login