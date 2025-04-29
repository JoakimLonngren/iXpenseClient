import styles from './GlobalButton.module.scss'

function GlobalButton({ children, onClick, type = "button", disabled = false, className = ""}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${styles.button} ${className}`}
        >
            {children}
        </button>
    )
}
export default GlobalButton