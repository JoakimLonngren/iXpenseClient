import styles from './ReceiptCard.module.scss'
import React from 'react'

const ReceiptCard = ({ receipt, onSelect }) => {
    return (
        <div className={styles.card} onClick={onSelect}>
            <p>Store: {receipt.from}</p>
            <p>Date: {new Date(receipt.date).toLocaleDateString('sv-SE')}</p>
            <p>Total amount: {receipt.totalAmount}kr</p>
        </div>
    )
}

export default ReceiptCard