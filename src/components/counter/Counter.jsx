import './counter.css'
import useEventStore from '../../store/event-store';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

function Counter({ event }) {


    const { setOrders, orders, setEvent } = useEventStore((state) => ({
        orders: state.orders,
        setOrders: state.setOrders,
        setEvent: state.setEvent,
    }));



    const handleDecreaseEventBalance = () => {
        if (event.qty > 0) {
            const newQuantity = event.qty - 1;
            setEvent({ ...event, qty: newQuantity });
        }
    };

    const handleIncreaseEventBalance = () => {
        const newQuantity = event.qty + 1;
        setEvent({ ...event, qty: newQuantity });
    };

    const handleAddToCart = () => {

        const existingOrderIndex = orders.findIndex(order => order.id === event.id);

        if (existingOrderIndex !== -1) {

            const orderCopy = [...orders];
            orderCopy[existingOrderIndex].qty = event.qty;
            // Om eventet redan finns, uppdatera endast quantity

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
