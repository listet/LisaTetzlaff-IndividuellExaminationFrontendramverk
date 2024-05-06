import MainSection from '../../components/mainSection/MainSection'
import useEventStore from '../../store/event-store'

function OrderPage() {

    const orders = useEventStore(state => state.orders);

    return (
        <>
            <MainSection
                mainTitle={"Order"}
            />
            {orders.length > 0 ? (
                <ul>
                    {orders.map((order, index) => (
                        <li key={index}>
                            <p>{order.event.name}</p>
                            <p>Quantity: {order.quantity}</p>
                            <p>Price: {order.event.price} sek</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No orders</p>
            )}
        </>
    )
}

export default OrderPage
