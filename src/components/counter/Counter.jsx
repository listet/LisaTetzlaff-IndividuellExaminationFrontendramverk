import { useState, useEffect } from 'react'
import './counter.css'
import useEventStore from '../../store/event-store';

function Counter({ eventId, price }) {

    const [eventBalance, setEventBalance] = useState(0);
    const increaseQty = useEventStore(state => state.increaseQty);
    const decreaseQty = useEventStore(state => state.decreaseQty);

    useEffect(() => {
        setEventBalance(0); // Återställ kvantiteten när eventId ändras
    }, [eventId]);

    const handleDecreaseEventBalance = () => {
        if (eventBalance > 0) {
            decreaseQty(eventId);
            setEventBalance(prev => prev - 1);
        }
    };

    const handleIncreaseEventBalance = () => {
        increaseQty(eventId);
        setEventBalance(prev => prev + 1);
    };

    const totalPrice = eventBalance * price;

    return (
        <section className='priceAndCounter-container'>
            <section className='price-container'>
                <p className="price">{totalPrice} sek</p>
            </section>
            <section className='counter-container'>
                <button
                    className="counter-btn"
                    onClick={handleDecreaseEventBalance}
                >-</button>
                <p className="event-balance">{eventBalance}</p>
                <button
                    className="counter-btn"
                    onClick={handleIncreaseEventBalance}
                >+</button>
            </section>
        </section>
    )
}

export default Counter
