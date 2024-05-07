import MainSection from '../../components/mainSection/MainSection'
import useEventStore from '../../store/event-store'
import './orderPage.css'
import { useState } from 'react';

function OrderPage() {

    const orders = useEventStore(state => state.orders);
    const setOrders = useEventStore(state => state.setOrders);

    console.log(orders)
    // const totalPrice = 

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

    return (
        <>
            <MainSection
                mainTitle={"Order"}>
                {orders.length > 0 ? (
                    <ul className='order-container'>
                        {orders.map((order, index) => (
                            <li key={index}>
                                <p>{order.name}</p>
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
                    <p>No orders</p>
                )}
                <p>Totalt värde på order</p>
                {/* <h2>{totalPrice}</h2> */}
            </MainSection >
        </>
    )
}

export default OrderPage
