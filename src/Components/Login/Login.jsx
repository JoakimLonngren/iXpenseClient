import styles from './Login.module.scss';
import { useState } from 'react'
import { useUser } from '../../Contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { useInformationMessage } from '../../Contexts/InformationMessageContext'
import { loginUser } from '../../Api/ApiClient/Others/ApiUser'
import { jwtDecode } from 'jwt-decode'
import GlobalButton from '../Common/GlobalButton/GlobalButton';
import Footer from '../Footer/Footer';

function Login() {
    const { login } = useUser()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const { showMessage } = useInformationMessage();

    const [formInput, setFormInput] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async () => {
        if (!formInput.username || !formInput.password){
            showMessage("Please fill in both fields correctly.", "error")
            return
        }

        setIsLoading(true)
        try {
            const data = await loginUser(formInput.username, formInput.password)
            const { token } = data

            if(token) {
                showMessage(data.message)
                const decodedToken = jwtDecode(token)
                const userId = decodedToken.sub

                login(formInput.username, token, userId)
                navigate("/profilePage")
            } else {
                showMessage(data.message || "Login failed.")
            }
        } catch (error) {
            console.error("Login failed.", error)
            showMessage("An error occued during login.", "error")
        } finally {
            setIsLoading(false)
        }
    }

    return (
            <div className={styles.loginBackground}>
                <div className={styles.loginContainer}>
                    <h1 className={styles.title}>iXpense</h1>
                    <form 
                        onSubmit={(e) => {
                        e.preventDefault()
                        handleLogin()
                        }}
                        className={styles.loginInputContainer}
                    >
                        <span className={styles.info}>Sign in</span>

                        <input
                            type="text"
                            name="username"
                            placeholder="USERNAME"
                            value={formInput.username}
                            onChange={handleChange}
                            className={styles.loginInput}
                            autoComplete="username"
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="PASSWORD"
                            value={formInput.password}
                            onChange={handleChange}
                            className={styles.loginInput}
                            autoComplete="current-password"    
                        />
                            <GlobalButton
                                className={styles.confirm}
                                onClick={handleLogin}
                                text="Sign in"
                                disabled={isLoading}
                            >
                                Sign in
                            </GlobalButton>
                            <Footer inLogin={true}/>
                    </form>
                </div>
            </div>
    )
}
export default Login
