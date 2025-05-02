import { useNavigate } from 'react-router-dom'
import { useInformationMessage } from '../../Contexts/InformationMessageContext'
import styles from './Register.module.scss'
import React, { useState } from 'react'
import { registerUser } from '../../Api/ApiClient/Others/ApiUser'
import GlobalButton from '../Common/GlobalButton/GlobalButton'
import Footer from '../Footer/Footer'
import LoadingIcon from '../Common/UI/LoadingIcon/LoadingIcon'

function Register () {
    const [formInput, setFormInput] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const { showMessage } = useInformationMessage()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput(prev => ({ ...prev, [name]: value}))
    }

    //Validation of inputs the user does in order to register a account correctly.
    const validateInput = () => {
        const { username, email, password } = formInput
        if(!username || !email || !password) {
            showMessage('Please fill in all fields correctly.', 'error')
            return false
        }
        if(!/\S+@\S+\.\S+/.test(email)) {
            showMessage('Please enter a valid email address.','error')
            return false
        }
        if(password.length < 6){
            showMessage('Password must be atleast 6 characters.', 'error')
            return false
        }
        if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            showMessage('Password must include atleast one special character.', 'error')
            return false
        }
        return true
    }

    const handleRegister = async () => {
        if(!validateInput()) return

        setIsLoading(true)
        try {
            const data = await registerUser(formInput.username, formInput.email, formInput.password)
            showMessage(data.message)
            navigate('/login')
        } catch (error) {
            console.error('Registration failed.', error)
            showMessage(error.message || 'An error occured during registration.', 'error')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={styles.registerBackground}>
            <div className={styles.registerContainer}>
                <h1 className={styles.title}>iXpense</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleRegister()
                    }}
                    className={styles.registerInputContainer}
                >
                    <span className={styles.info}>Register account</span>
                    <input
                        type='text'
                        name='username'
                        placeholder='USERNAME'
                        value={formInput.username}
                        onChange={handleChange}
                        className={styles.registerInput}
                        autoComplete='username'
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='EMAIL'
                        value={formInput.email}
                        onChange={handleChange}
                        className={styles.registerInput}
                        autoComplete='email'
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='PASSWORD'
                        value={formInput.password}
                        onChange={handleChange}
                        className={styles.registerInput}
                    />

                    <GlobalButton
                        variant='confirm'
                        onClick={handleRegister}
                        disabled={isLoading}
                    >
                        {isLoading && <LoadingIcon/> ? 'Registering...' : 'Register'}
                    </GlobalButton>

                    <Footer/>
                </form>

            </div>
        </div>
    )
}

export default Register

