import React, {createContext, useContext, useState} from 'react'

const FormContext = createContext()

export const useForm = () => useContext(FormContext)

export const FormProvider = ({ children }) => {
    const [step, setStep] = useState(0)

    const [receipt, setReceipt] = useState({
        from:'',
        date:'',
        totalAmount:0,
        items: [],
    })

    const addProduct = (product) => {
        const newItems = [...receipt.items, product]
        setReceipt((prev) => ({
            ...prev,
            items: newItems,
            totalAmount: calculateTotal(newItems),
        }))
    }

    const removeProduct = (index) => {
        const updatedItems = [...receipt.items]
        updatedItems.splice(index, 1)
        setReceipt((prev) => ({
            ...prev,
            items: updatedItems,
            totalAmount: calculateTotal(updatedItems)
        }))
    }

    const updateReceipt = (data) => {
        setReceipt((prev) => ({ ...prev, ...data}))
    }

    const calculateTotal = (items) => {
        return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }

    const resetForm = () => {
        setReceipt({
            from: '',
            date: '',
            items: [],
            totalAmount: 0,
        })
        setStep(0)
    }

    return (
        <FormContext.Provider
            value={{
                step, 
                setStep,
                receipt,
                addProduct,
                removeProduct,
                updateReceipt,
                resetForm,
            }}
        >
            {children}
        </FormContext.Provider>
    )
}
