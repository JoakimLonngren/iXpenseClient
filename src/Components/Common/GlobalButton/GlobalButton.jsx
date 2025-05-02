import styles from './GlobalButton.module.scss'

function GlobalButton({ 
    children, 
    onClick, 
    type = "button",
    disabled = false,
    variant = ""
    }) {
        const variantClass = styles[variant] || '';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${styles.button} ${variantClass}`}
        >
            {children}
        </button>
    )
}
export default GlobalButton