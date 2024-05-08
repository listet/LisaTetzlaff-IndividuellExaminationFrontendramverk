import Button from '../../components/button/Button';
import MainSection from '../../components/mainSection/MainSection'
import useEventStore from '../../store/event-store'
import { Link } from 'react-router-dom';
import './orderPage.css'

function OrderPage() {

    const orders = useEventStore(state => state.orders);
    const setOrders = useEventStore(state => state.setOrders);
    console.log(orders)

    const handleDecreaseOrderBalance = (index) => {
        if (orders[index].qty === 1) {
            // If the quantity is 1, remove the order
            const newOrders = orders.filter((_, i) => i !== index);
            setOrders(newOrders);
        } else if (orders[index].qty > 1) {
            const newOrders = [...orders];
            newOrders[index].qty -= 1;
            setOrders(newOrders);
        }
    };

    const handleIncreaseOrderBalance = (index) => {
        const newOrders = [...orders];
        newOrders[index].qty += 1;
        setOrders(newOrders);
    };

    const totalPrice = orders.reduce((total, order) => {
        return total + (order.qty * order.price);
    }, 0);

    return (
        <>
            <MainSection
                mainTitle={"Order"}>
                {orders.length > 0 ? (
                    <ul className='order-container'>
                        {orders.map((order, index) => (
                            <li className='order' key={index}>
                                <p className='order-name'>{order.name}</p>
                                <p className='order-when'>{order.when.date} kl {order.when.from} - {order.when.to}</p>
                                <section className='counter-container'>
                                    <button
                                        className="counter-btn"
                                        onClick={() => handleDecreaseOrderBalance(index)}
                                    >-</button>
                                    <p className="order-balance">{order.qty}</p>
                                    <button
                                        className="counter-btn"
                                        onClick={() => handleIncreaseOrderBalance(index)}
                                    >+</button>
                                </section>
                            </li>
                        ))}
                    </ul>

                ) : (
                    <p className='order-textvalue'>No orders</p>
                )}
                <p className='order-textTotalPrice'>Totalt värde på order</p>
                <h2 className='order-totalPrice'>{totalPrice}</h2>
                <Link aria-label='Navigate to orders' to="/TicketsPage">
                    <Button buttonText="Skicka order" />
                </Link>

            </MainSection >
        </>
    )
}

export default OrderPage


// onClick={handleAddToCart}
// const handleAddToCart = () => {

//     const existingOrderIndex = orders.findIndex(order => order.id === event.id);

//     if (existingOrderIndex !== -1) {

//         const orderCopy = [...orders];
//         orderCopy[existingOrderIndex].qty = event.qty;
//         // Om eventet redan finns, uppdatera endast quantity

//         setOrders(orderCopy);
//     } else {
//         // Om eventet inte finns, lägg till det nya eventet
//         setOrders([...orders, { ...event }]);
//     }

// };

// const totalPrice = event.qty * event.price;
