import MainSection from '../../components/mainSection/MainSection'
import useEventStore from '../../store/event-store'
import './orderPage.css'

function OrderPage() {

    const orders = useEventStore(state => state.orders);
    console.log(orders)
    // const totalPrice = 

    return (
        <>
            <MainSection
                mainTitle={"Order"}>
                {orders.length > 0 ? (
                    <ul className='order-container'>
                        {orders.map((order, index) => (
                            <li key={index}>
                                <p>{order.event}</p>
                                <p>{order.event}</p>
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
