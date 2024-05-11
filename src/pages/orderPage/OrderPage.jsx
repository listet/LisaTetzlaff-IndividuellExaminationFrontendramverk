import Button from '../../components/button/Button';
import MainSection from '../../components/mainSection/MainSection'
import useEventStore from '../../store/event-store'
import { Link } from 'react-router-dom';
import TicketsSectionSeats from '../../components/ticketsSectionSeats/TicketsSectionSeats';
import './orderPage.css'

function OrderPage() {

    const orders = useEventStore(state => state.orders);
    const setOrders = useEventStore(state => state.setOrders);
    const setTickets = useEventStore(state => state.setTickets);

    // Funktion som minskar quantity
    const handleDecreaseOrderBalance = (index) => {
        if (orders[index].qty === 1) {
            // Om quantity är 1, ta bort från orders
            const newOrders = orders.filter((_, i) => i !== index);
            setOrders(newOrders);
            // Minska quantity med 1
        } else if (orders[index].qty > 1) {
            const newOrders = [...orders];
            newOrders[index].qty -= 1;
            setOrders(newOrders);
        }
    };

    // Funktion som ökar quantity med 1
    const handleIncreaseOrderBalance = (index) => {
        const newOrders = [...orders];
        newOrders[index].qty += 1;
        setOrders(newOrders);
    };

    // Räknar ut pris för alla ordrar
    const totalPrice = orders.reduce((total, order) => {
        return total + (order.qty * order.price);
    }, 0);

    // Funktion som lägger in orders till setTickets i store och tar bort orders.
    // Kallar även på component - ticketsSeactionSeats för att få randomiserade sectioner, platser och ett Id
    const handleSetTickets = () => {
        const newTickets = TicketsSectionSeats(orders);
        setTickets(newTickets);
        setOrders([]);
    }

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
                    <p className='order-text'>No orders</p>
                )}
                <p className='order-text'>Totalt värde på order</p>
                <h2 className='order-totalPrice'>{totalPrice}</h2>
                <Link aria-label='Navigate to orders' to="/TicketsPage">
                    <Button onClick={handleSetTickets} buttonText="Skicka order" />
                </Link>

            </MainSection >
        </>
    )
}

export default OrderPage

