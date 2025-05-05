import styles from './CreateReceiptSummary.module.scss'
import React, { useState } from 'react'
import { useForm } from '../../../Contexts/FormContext'
import { addReceipt } from '../../../Api/ApiClient/Others/ApiReceipt'
import GlobalButton from '../../Common/GlobalButton/GlobalButton'
import LoadingIcon from '../../Common/UI/LoadingIcon/LoadingIcon'
import { useInformationMessage } from '../../../Contexts/InformationMessageContext'

const CreateReceiptSummary = () => {
    const { receipt, setStep, resetForm } = useForm()
    const [isLoading, setIsLoading] = useState(false)
    const { showMessage } = useInformationMessage()

    const handleSubmit = async () => {
        try {
            setIsLoading(true)
            console.log('Items:', receipt.items)
            console.log('Submitting receipt:', receipt)
            console.log("Item being submitted:", JSON.stringify(receipt.items, null, 2));
            console.log("🧪 receipt.from =", receipt.from);
            const data = await addReceipt(receipt)
            showMessage(data.message)
            resetForm()
        } catch (error) {
            showMessage(error.message || 'Failed to save receipt.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={styles.container}>
            {isLoading && <LoadingIcon/>}
            <div className={styles.background}>
                <h3>Receipt summary</h3>
                <div className={styles.resultContainer}>
                    <p><strong>Store:</strong>{receipt.from}</p>
                    <p><strong>Date:</strong>{receipt.date}</p>

                    <span><strong>Product list</strong></span>
                    <ul className={styles.productList}>
                        {receipt.items.map((p, i) => (
                            <li key={i}>
                                {p.title} - {p.quantity} x {p.price} SEK
                            </li>
                        ))}
                    </ul>
                    <p><strong>Total:</strong>{receipt.totalAmount}kr</p>

                    <div className={styles.buttons}>
                        <GlobalButton onClick={() => setStep(1)} variant='cancel'>Back</GlobalButton>
                        <GlobalButton onClick={handleSubmit} variant='confirm' disabled={isLoading}>{isLoading ? 'Saving...' : 'Save Receipt'}</GlobalButton>
                    </div>
                </div>              
            </div>           
        </div>
    )
}
export default CreateReceiptSummary