import styles from './GlobalButton.module.scss'

function GlobalButton({ 
    children, 
    onClick, 
    type = "button",
    disabled = false,
    variant = "",
    ...props
    }) {
        const variantClass = styles[variant] || '';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${styles.button} ${variantClass}`}
            {...props}
        >
            {children}
        </button>
    )
}
export default GlobalButton