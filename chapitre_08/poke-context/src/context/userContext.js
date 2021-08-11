import React from 'react'

export const isLogged = {
    false: {
        isLogged: false
    },
    true: {
        isLogged: true
    }
}

export const UserContext = React.createContext(isLogged.false)