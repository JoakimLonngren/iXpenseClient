import styles from './Footer.module.scss'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Footer = ({ inLogin = false}) => {
    const navigate = useNavigate()

    const handleLinkClick = () => {
        if(inLogin){
            navigate('/register')
        } else {
            navigate('/')
        }
    }

    return (
        <div className={styles.container}>
            {inLogin ? (
                <p>
                    Don't have an account?{' '}
                    <span className={styles.link} onClick={handleLinkClick}>
                        Register Account
                    </span>
                </p>
            ) : (
                <p>
                    Already registered?{' '}
                    <span className={styles.link} onClick={handleLinkClick}>
                        Login to iXpense
                    </span>
                </p>
            )}
        </div>
    )
}
export default Footer