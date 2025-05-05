import styles from './CreateReceiptStoreAndDate.module.scss'
import React from 'react'
import { useForm } from '../../../Contexts/FormContext'
import { useInformationMessage } from '../../../Contexts/InformationMessageContext'
import GlobalButton from '../../Common/GlobalButton/GlobalButton'
import { useNavigate } from 'react-router-dom'

const CreateReceiptStoreAndDate = () => {
    const { receipt, updateReceipt, setStep } = useForm()
    const { showMessage } = useInformationMessage()
    const navigate = useNavigate()

    const handleNext = () => {
        if(!receipt.from.trim() || !receipt.date){
            showMessage(data.message)
            return
        }
        setStep(1)
    }
    
    const handleBack = () => {
        navigate('/profilePage')
    } 

    return (
        <div className={styles.container}> 
            <div></div>
                <div className={styles.background}>
                    <h3>Add store & date</h3>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            placeholder="Store name"
                            value={receipt.from}
                            onChange={(e) => updateReceipt({ from: e.target.value})}
                            className={styles.input}
                        />

                        <input
                            type="date"
                            value={receipt.date}
                            onChange={(e) => updateReceipt({ date: e.target.value})}
                            className={styles.input}
                        />
                        
                        <div className={styles.buttons}>
                            <GlobalButton onClick={handleBack} variant='cancel'>Back</GlobalButton>
                            <GlobalButton onClick={handleNext} variant='confirm' disabled={receipt.from.length === 0 || receipt.date.length === 0}>Next</GlobalButton>
                        </div>

                    </div>
                </div>
            <div></div>
            
            
        </div>

    )
}
export default CreateReceiptStoreAndDate
