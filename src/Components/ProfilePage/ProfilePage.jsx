import styles from './ProfilePage.module.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProfilePage() {
    const navigate = useNavigate()



    return(
        <div className={styles.container}>
            <div className={styles.leftContent}>
                <button className={styles.bigbutton} onClick={() => navigate('/createReceipt')}></button>
                s
            </div>
            <div className={styles.remainingContent}>
                    a
            </div>
        </div>
    )
}
export default ProfilePage