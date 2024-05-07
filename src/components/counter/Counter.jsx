import { useState, useEffect } from 'react'
import './counter.css'
import useEventStore from '../../store/event-store';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

function Counter({ event }) {

    // const { price, name } = event;  // Nu kan du extrahera price och name direkt från event objektet
    const [eventBalance, setEventBalance] = useState(0);

    const { increaseQty, decreaseQty, setOrders, orders, setEvent } = useEventStore((state) => ({
        increaseQty: state.increaseQty,
        decreaseQty: state.decreaseQty,
        orders: state.orders,
        setOrders: state.setOrders,
        setEvent: state.setEvent,
    }));

    // const increaseQty = useEventStore(state => state.increaseQty);
    // const decreaseQty = useEventStore(state => state.decreaseQty);
    // const addOrder = useEventStore(state => state.addOrder);

    useEffect(() => {
        // Set initial quantity to 0 when component mounts
        setEventBalance(0);
    }, [event.name]);

    const handleDecreaseEventBalance = () => {
        if (event.qty > 1) {
            const newQuantity = event.qty - 1;
            setEvent({ ...event, qty: newQuantity });
        }

        // if (eventBalance > 0) {
        //     decreaseQty(event.name);
        //     setEventBalance(prev => prev - 1);
        // }
    };

    const handleIncreaseEventBalance = () => {
        const newQuantity = event.qty + 1;
        setEvent({ ...event, qty: newQuantity });
        // increaseQty(event.name);
        // setEventBalance(prev => prev + 1);
    };
    const handleAddToCart = () => {
        // const existingOrder = orders.find(order => order.name === event.name);
        const existingOrderIndex = orders.findIndex(order => order.id === event.id);

        if (existingOrderIndex !== -1) {

            const orderCopy = [...orders];
            orderCopy[existingOrderIndex].qty = event.qty;
            // Om eventet redan finns, uppdatera endast quantity
            // const updatedOrders = orders.map(order =>
            //     order.name === event.name ? { ...order, qty: order.qty + qty } : order
            // );
            setOrders(orderCopy);
        } else {
            // Om eventet inte finns, lägg till det nya eventet
            setOrders([...orders, { ...event }]);
        }

    };

    const totalPrice = event.qty * event.price;

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
                    <p className="event-balance">{event.qty}</p>
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
