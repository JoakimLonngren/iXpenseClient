import styles from './ProfilePage.module.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalButton from '../Common/GlobalButton/GlobalButton'

function ProfilePage() {
    const navigate = useNavigate()

    return(
        <div className={styles.container}>
            <div className={styles.leftContent}>
                <button className={styles.bigButton} onClick={() => navigate('/createReceipt')}>Register receipt</button>
                <button className={styles.bigButton} onClick={() => navigate('/receiptList')}>Your receipts</button>
                <button className={styles.bigButton} onClick={() => navigate('/summaryPage')}>Period summary</button>   
                <button className={styles.bigButton}>Options</button>
                <button className={styles.bigButton}>Logout</button>
            </div>
            <div className={styles.remainingContent}>
                    <div className={styles.useIXpense}>
                        <div className={styles.whyUseUs}>
                            <h1>Why use iXpense?</h1>
                            <h4>Register your receipts and keep track of your spending and build a long lasting personal economy</h4>
                            <div className={styles.buttonContainer}>
                                <GlobalButton onClick={() => navigate('/createReceipt')} variant='confirm'>Try it out!</GlobalButton>
                            </div>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <h1>Get a overview of your spending and plan ahead</h1>
                    </div>
                    <div className={styles.sample}>
                        <div className={styles.sampleContent}>
                            <h5>
                                In todays world based on subscriptions, higher rates, interests
                                or products expiring at a rapid pace - keep your expenses and receipts safe at
                                the same location where they can be easily obtained and overviewed. 
                            </h5>
                            <GlobalButton onClick={() => navigate('/receiptList')} variant='confirm'>
                                See your added receipts
                            </GlobalButton>

                        </div>
                        <div className={styles.sampleContentPic}></div>
                    </div>

                    <div className={styles.sample}>
                        <div className={styles.summarizePic}></div>
                        <div className={styles.sampleContent}>
                            <h5>
                                Narrow it down to spendings on a single day or 
                                during a longer period. What ever you choose get more precise with iXpense
                            </h5>
                            <GlobalButton onClick={() => navigate('/summaryPage')} variant='confirm'>Checkout your summaries here</GlobalButton>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default ProfilePage