import './button.css'

function Button({ buttonText, onClick }) {

    //En enhetlig knapp-design
    return (
        <div>
            <button className='cart-button' onClick={onClick}>{buttonText}</button>
        </div>
    )
}

export default Button
