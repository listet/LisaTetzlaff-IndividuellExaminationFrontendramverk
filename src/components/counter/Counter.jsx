import { useState } from 'react'
import './counter.css'
import useEventStore from '../../store/event-store';

function Counter() {

    const [eventBalance, setEventBalance] = useState(0);
    const price = useEventStore(state => state.price);
    console.log('Counter render, price:', price);

    const decreaseEventBalance = () => {
        if (eventBalance > 0) {
            // decreaseCartBalance();
            setEventBalance(b => b - 1);
        }
    }

    const increaseEventBalance = () => {
        // increaseCartBalance();
        setEventBalance(b => b + 1);
    }

    const totalPrice = eventBalance * price;

    return (
        <section className='priceAndCounter-container'>
            <section className='price-container'>
                <p className="price">{totalPrice} sek</p>
            </section>
            <section className='counter-container'>
                <button
                    className="counter-btn"
                    onClick={decreaseEventBalance}
                >-</button>
                <p className="event-balance">{eventBalance}</p>
                <button
                    className="counter-btn"
                    onClick={increaseEventBalance}
                >+</button>
            </section>
        </section>
    )
}

export default Counter
