import MainSection from '../../components/mainSection/MainSection'
import useEventStore from '../../store/event-store'
import './orderPage.css'

function OrderPage() {

    const orders = useEventStore(state => state.orders);
    const validOrders = orders.filter(order => order.quantity > 0);
    const totalPrice = orders.reduce((total, order) => total + (order.event.price * order.quantity), 0);

    return (
        <>
            <MainSection
                mainTitle={"Order"}>
                {validOrders.length > 0 ? (
                    <ul className='order-container'>
                        {validOrders.map((order, index) => (
                            <li key={index}>
                                <p>{order.event.name}</p>
                                <p>Quantity: {order.quantity}</p>
                            </li>
                        ))}
                    </ul>

                ) : (
                    <p>No orders</p>
                )}
                <p>Totalt värde på order</p>
                <h2>{totalPrice}</h2>
            </MainSection >
        </>
    )
}

export default OrderPage
