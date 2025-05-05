import React from 'react'
import { useForm } from '../../../Contexts/FormContext'
import CreateReceiptStoreAndDate from '../CreateReceiptStoreAndDate/CreateReceiptStoreAndDate'
import CreateReceiptAddProducts from '../CreateReceiptAddProducts/CreateReceiptAddProducts'
import CreateReceiptSummary from '../CreateReceiptSummary/CreateReceiptSummary'

const ReceiptForm = () => {
    const { step } = useForm()

    switch(step) {
        case 0: return <CreateReceiptStoreAndDate/>
        case 1: return <CreateReceiptAddProducts/>
        case 2: return <CreateReceiptSummary/>
        default: return <CreateReceiptStoreAndDate/>
    }
}
export default ReceiptForm