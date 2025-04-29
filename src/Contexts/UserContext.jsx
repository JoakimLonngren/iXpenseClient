import React, { createContext, useState, useEffect, useContext} from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState(() => localStorage.getItem('username') || '')
    const [token, setToken] = useState(() => localStorage.getItem('token') || '')
    const [userId, setUserId] = useState(() => localStorage.getItem('userId') || '')

    useEffect(() => {
        if(username) localStorage.setItem('username', username)
            else localStorage.removeItem('username')

        if(token) localStorage.setItem('token', token)
            else localStorage.removeItem('token')

        if(userId) localStorage.setItem('userId', userId)
            else localStorage.removeItem('userId')
    }, [username, token, userId])

    const login = (username, token, userId) => {
        setUsername(username)
        setToken(token)
        setUserId(userId)
    }

    const logout = () => {
        setUsername('')
        setToken(null)
        setUserId(null)
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
    }

    return (
        <UserContext.Provider value={{ username, token, userId, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)