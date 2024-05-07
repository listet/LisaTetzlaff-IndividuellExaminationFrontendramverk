import { useState, useEffect } from 'react'
import './counter.css'
import useEventStore from '../../store/event-store';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

function Counter({ event }) {

    // const { price, name } = event;  // Nu kan du extrahera price och name direkt från event objektet
    const [eventBalance, setEventBalance] = useState(0);

    const { increaseQty, decreaseQty, setOrders, orders } = useEventStore((state) => ({
        increaseQty: state.increaseQty,
        decreaseQty: state.decreaseQty,
        orders: state.orders,
        setOrders: state.setOrders,
    }));

    // const increaseQty = useEventStore(state => state.increaseQty);
    // const decreaseQty = useEventStore(state => state.decreaseQty);
    // const addOrder = useEventStore(state => state.addOrder);

    useEffect(() => {
        // Set initial quantity to 0 when component mounts
        setEventBalance(0);
    }, [event.name]);

    const handleDecreaseEventBalance = () => {
        if (eventBalance > 0) {
            decreaseQty(event.name);
            setEventBalance(prev => prev - 1);
        }
    };

    const handleIncreaseEventBalance = () => {
        increaseQty(event.name);
        setEventBalance(prev => prev + 1);
    };
    const handleAddToCart = () => {

        const existingOrder = orders.find(order => order.name === event.name);
        if (existingOrder) {
            console.log(orders)
            // Om eventet redan finns, uppdatera endast quantity
            const updatedOrders = orders.map(order =>
                order.name === event.name ? { ...order, qty: order.qty + qty } : order
            );
            setOrders(updatedOrders);
        } else {
            // Om eventet inte finns, lägg till det nya eventet
            setOrders([...orders, { event, qty }]);
        }

    };
    console.log(orders)
    const totalPrice = eventBalance * event.price;

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
