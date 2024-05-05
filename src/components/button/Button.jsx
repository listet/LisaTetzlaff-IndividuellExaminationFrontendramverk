import './button.css'

function Button({ buttonText }) {
    return (
        <div>
            <button className='cart-button'>{buttonText}</button>
        </div>
    )
}

export default Button
