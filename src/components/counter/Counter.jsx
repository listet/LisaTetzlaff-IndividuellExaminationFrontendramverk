import { useState, useEffect } from 'react'
import './counter.css'
import useEventStore from '../../store/event-store';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

function Counter({ event }) {

    const { price, name } = event;  // Nu kan du extrahera price och name direkt från event objektet
    const [eventBalance, setEventBalance] = useState(0);
    const increaseQty = useEventStore(state => state.increaseQty);
    const decreaseQty = useEventStore(state => state.decreaseQty);
    const addOrder = useEventStore(state => state.addOrder);

    useEffect(() => {
        // Set initial quantity to 0 when component mounts
        setEventBalance(0);
    }, [name]);

    const handleDecreaseEventBalance = () => {
        if (eventBalance > 0) {
            decreaseQty(name);
            setEventBalance(prev => prev - 1);
        }
    };

    const handleIncreaseEventBalance = () => {
        increaseQty(name);
        setEventBalance(prev => prev + 1);
    };
    const handleAddToCart = () => {
        addOrder(name, eventBalance);
    };

    const totalPrice = eventBalance * price;

    return (
        <>
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
            <Link aria-label='Navigate to orders' to="/OrderPage">
                <Button onClick={handleAddToCart} buttonText="Lägg i varukorgen" />
            </Link>
        </>
    )
}

export default Counter
