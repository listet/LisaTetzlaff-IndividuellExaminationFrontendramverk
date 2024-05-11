import './button.css'

function Button({ buttonText, onClick }) {

    //En enhetlig knapp-design
    return (
        <article>
            <button className='cart-button' onClick={onClick}>{buttonText}</button>
        </article>
    )
}

export default Button
