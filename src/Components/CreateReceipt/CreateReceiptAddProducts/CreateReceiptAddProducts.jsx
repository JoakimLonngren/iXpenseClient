import styles from './CreateReceiptAddProducts.module.scss'
import React, { useState, useEffect } from 'react'
import { useForm } from '../../../Contexts/FormContext'
import GlobalButton from '../../Common/GlobalButton/GlobalButton'
import { getCategories } from '../../../Api/ApiClient/Others/ApiCategory'
import { useInformationMessage } from '../../../Contexts/InformationMessageContext'

const CreateReceiptAddProducts = () => {
    const { receipt, addProduct, removeProduct, setStep} = useForm()
    const { showMessage } = useInformationMessage()

    const [product, setProduct] = useState({
        title: '',
        price: '',
        quantity: '',
        categoryId: '',
    })

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const retrieveCategories = async () => {
            try {
                const data = await getCategories()
                setCategories(data)
            } catch (error) {
                showMessage(data.message)// change this
            }
        }
        retrieveCategories()
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setProduct((prev) => ({ ...prev, [name]: value}))
    }

    const handleAdd = (e) => {
        e.preventDefault()

        const { title, price, quantity, categoryId } = product
        if(!title || !price || !quantity || !categoryId) {
            showMessage('All fields must be filled')
            return
        }

        addProduct({
            title,
            price: parseFloat(price),
            quantity: parseInt(quantity),
            categoryId: parseInt(categoryId),
        })
    
        setProduct({
            title: '',
            price: '',
            quantity: '',
            categoryId: parseInt(categoryId),
        })
    }

    const handleCategorySelect = (value) => {
        setProduct((prev) => ({
            ...prev, 
            categoryId: parseInt(value),
        }))
    }

    return (
        <div className={styles.container}>

            <div className={styles.background}>
                <h3>Add Products</h3>
                <form onSubmit={handleAdd} className={styles.form}>
                    <input
                        name='title'
                        type='text'
                        placeholder='Name of product'
                        value={product.title}
                        onChange={handleInputChange}
                        className={styles.input}
                    />
                    <input
                        name='price'
                        type='number'
                        placeholder='Price'
                        value={product.price}
                        onChange={handleInputChange}
                        className={styles.input}
                    />
                    <input
                        name='quantity'
                        type='number'
                        placeholder='Quantity'
                        value={product.quantity}
                        onChange={handleInputChange}
                        className={styles.input}
                    />
                    <select
                        value={product.categoryId}
                        onChange={(e) => handleCategorySelect(e.target.value)}
                        className={styles.input}
                    >
                        <option value=''> Select Category </option>
                        {categories.map((c) => (
                            <option key={c.id} value={c.id}>{c.title}</option>
                        ))}
                    </select>

                    <GlobalButton type='submit' variant='add'>Add product</GlobalButton>

                    <span>Product list</span>
                    <ul className={styles.productList}>
                    
                        {receipt.items.map((p, i) => (
                            <li key={i} className={styles.productItem}>
                                {p.title} - {p.quantity} x {p.price} SEK 
                                <button onClick={() => removeProduct(i)} className={styles.removeButton}>X</button>
                            </li>
                        ))}
                    </ul>
                </form>
                
                
                

                <div className={styles.buttons}>
                    <GlobalButton onClick={() => setStep(0)} variant='cancel'>Back</GlobalButton>
                    <GlobalButton onClick={() => setStep(2)} variant='confirm' disabled={receipt.items.length === 0}>Next</GlobalButton>
                </div>
            </div>
        </div>
    )
}
export default CreateReceiptAddProducts