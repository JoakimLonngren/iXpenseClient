import styles from './SummaryPage.module.scss'
import React, { useState } from 'react'
import { GetMostPurchasedItem, GetMostPurchasedCategory } from '../../../Api/ApiClient/Others/ApiReceipt'
import CategoryDiagram from '../CategoryDiagram/CategoryDiagram'
import DatePicker from '../DatePicker/DatePicker'
import { useInformationMessage } from '../../../Contexts/InformationMessageContext'
import LoadingIcon from '../../Common/UI/LoadingIcon/LoadingIcon'
import GlobalButton from '../../Common/GlobalButton/GlobalButton'

const SummaryPage = () => {
    const [topItem, setTopItem] = useState(null)
    const [categories, setCategories] = useState([])
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { showMessage } = useInformationMessage();


    const retrieveSummary = async () => {
        
        if(!startDate || !endDate){
            showMessage('Please select a start and a end date.')
            return;
        }

        try {
            setIsLoading(true)

            const [itemData, categoryData] = await Promise.all([
                GetMostPurchasedItem(startDate, endDate),
                GetMostPurchasedCategory(startDate, endDate),
            ])

            if(itemData.success && itemData.data) {
                setTopItem(itemData.data)
            } else {
                setTopItem(null)
                showMessage(itemData.message || 'No items found.')
            }

            if(categoryData.success && Array.isArray(categoryData.data)){
                setCategories(categoryData.data)
            } else {
                setCategories([])
                showMessage(categoryData.message || 'No categories found.')
            }
        } catch (error) {
            showMessage(error.message || 'An error occured during the fetching of .', 'error')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={styles.container}>
            {isLoading && <LoadingIcon/>}
            <h3> Summary </h3>
            <DatePicker
                startDate={startDate}
                endDate={endDate}
                onChangeStart={setStartDate}
                onChangeEnd={setEndDate}
            />
            <GlobalButton onClick={retrieveSummary} variant='add'>Get summary</GlobalButton>

            {!isLoading && (
                <>
                    {topItem && (
                        <p className={styles.topItem}>
                            Your most purchased product is {topItem.itemTitle} {topItem.totalQuantity} pieces
                            in category <em> {topItem.categoryTitle} </em> for a total price of {(topItem.totalPrice ?? 0).toFixed(2)}kr
                        </p>
                    )}

                    {categories.length > 0 && (
                        <div className={styles.chartSection}>
                            <h3>Category spending</h3>
                            <CategoryDiagram data={categories}/>
                            <ul className={styles.categoryList}>
                                {categories.map((c) => (
                                    <li key={c.categoryTitle}>
                                        {c.categoryTitle} : {(c.totalSpent ?? 0).toFixed(2)}kr
                                    </li>
                                ))}
                            </ul>

                        </div>
                    )}
                </>    
            )}
        </div>
    )
}
export default SummaryPage