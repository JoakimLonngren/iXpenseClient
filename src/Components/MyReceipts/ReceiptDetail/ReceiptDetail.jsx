import styles from './ReceiptDetail.module.scss'
import React from 'react'
import GlobalButton from '../../Common/GlobalButton/GlobalButton'
import { deleteReceipt } from '../../../Api/ApiClient/Others/ApiReceipt'
import { useInformationMessage } from '../../../Contexts/InformationMessageContext'

const ReceiptDetail = ({ receipt, onClose, onDeleteSuccess }) => {
    const { showMessage } = useInformationMessage()

    const handleDelete = async () => {
        if(!window.confirm('Are you sure you want to delete this receipt?')) return

        try {
            const data = await deleteReceipt(receipt.id)
            showMessage(data.message)
            onClose()
            onDeleteSuccess()
        } catch (error) {
            showMessage(error.message || 'Failed to delete receipt.')
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.receiptDetailContainer}>
                <h4>{receipt.from}</h4>
                <h4>{new Date(receipt.date).toLocaleDateString('sv-SE')}</h4>
                <ul className={styles.products}>
                    {receipt.items.map((item, i) => (
                        <li key={i} className={styles.itemRow}>
                            <span>{item.title} - {item.quantity} x</span>
                            <span>{item.price} kr</span>
                        </li>
                    ))}
                </ul>
                <h5>Total price: {receipt.totalAmount}</h5>
                <div className={styles.buttonWrapper}>
                    <GlobalButton variant='cancel' onClick={onClose}>Close</GlobalButton>
                    <GlobalButton variant='delete' onClick={handleDelete}>Delete</GlobalButton>
                </div>
            </div>
        </div>
    )
}

export default ReceiptDetail