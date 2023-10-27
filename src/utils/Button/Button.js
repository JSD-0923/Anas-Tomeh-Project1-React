
import './Button.css'
const Button = (props) => {
    const {label, style, onClick, ariaLabel} = props

    return (
        <button style={style} aria-label={ariaLabel || ''} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;