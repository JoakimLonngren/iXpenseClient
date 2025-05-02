import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'
import GlobalButton from '../Common/GlobalButton/GlobalButton'

const Logout = () => {
    const { logout } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <GlobalButton
            variant='logout'
            onClick={handleLogout}
        >
            Logout
        </GlobalButton>
    )
}
export default Logout