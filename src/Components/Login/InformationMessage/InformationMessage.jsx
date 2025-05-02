import React from 'react'
import styles from './InformationMessage.module.scss'

const InformationMessage = ({message, type, onClose}) => {
    if(!message) return null

    const className = `${styles.informationMessage} ${styles[type] || ''}`

    return (
        <div className={className}>
            <span>{message}</span>
            <button onClick={onClose} className={styles.closeButton}>
                &times;
            </button>
        </div>
    )
}

export default InformationMessage