import styles from './ReceiptList.module.scss'
import React, { useState, useEffect } from 'react'
import { getReceipts } from '../../../Api/ApiClient/Others/ApiReceipt'
import ReceiptCard from '../ReceiptCard/ReceiptCard'
import ReceiptDetail from '../ReceiptDetail/ReceiptDetail'
import GlobalButton from '../../Common/GlobalButton/GlobalButton'
import { useNavigate } from 'react-router-dom'

const ReceiptList = () => {
    const [receipts, setReceipts] = useState([])
    const [selectedReceipt, setSelectedReceipt] = useState(null)
    const navigate = useNavigate()

    const retrieveReceipts = async () => {
        try {
            const response = await getReceipts()
            console.log('Api reponse:', response)
            setReceipts(Array.isArray(response.data) ? response.data : [])
        } catch (error) {
            console.error('Failed to load receipts', error)
        }
    }

    useEffect(() => {
        retrieveReceipts()
    }, [])

    const handleBack = () => {
        navigate('/profilePage')
    } 

    return(
        <div className={styles.container}>
            <h2> Your receipts </h2>
            {receipts.map((r) => (
                <ReceiptCard key={r.id} receipt={r} onSelect={() => setSelectedReceipt(r)} />
            ))}

            {selectedReceipt && (
                <ReceiptDetail 
                receipt={selectedReceipt} 
                onClose={() => setSelectedReceipt(null)}
                onDeleteSuccess={retrieveReceipts} />
            )}

            <GlobalButton variant='cancel' onClick={handleBack}>Back</GlobalButton>

        </div>
    )
}
export default ReceiptList