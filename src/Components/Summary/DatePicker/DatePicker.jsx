import styles from './DatePicker.module.scss'
import React from 'react'

const DatePicker = ({ startDate, endDate, onChangeStart, onChangeEnd}) => {
    return(
        <div className={styles.container}>
            <label>
                Start date:
                <input
                    type='date'
                    value={startDate}
                    onChange={(e) => onChangeStart(e.target.value)}
                />
            </label>
            <label>
                End date:
                <input
                    type='date'
                    value={endDate}
                    onChange={(e) => onChangeEnd(e.target.value)}
                />
            </label>
        </div>
    )
}
export default DatePicker