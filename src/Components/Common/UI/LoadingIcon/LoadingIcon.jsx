import styles from './LoadingIcon.module.scss'
import React from 'react'

const LoadingIcon = () => {
    return (
        <div className={styles.container}>
            <div className={styles.spinner}></div>
        </div>
    )
}
export default LoadingIcon

