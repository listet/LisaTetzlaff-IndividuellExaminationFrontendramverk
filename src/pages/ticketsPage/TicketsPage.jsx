import useEventStore from "../../store/event-store";
import './ticketsPage.css'

function TicketsPage() {

    const tickets = useEventStore(state => state.tickets);
    console.log(tickets)

    return (
        <div className="tickets-container">
            {tickets.length > 0 ? (
                <ul>
                    {tickets.map((ticket, index) => (
                        <li className="ticket-container" key={index}>
                            <h2 className="ticket-what">{ticket.name}</h2>
                            <p className="ticket-where">{ticket.where} </p>
                            <p className="ticket-date">{ticket.when.date} kl {ticket.when.from} - {ticket.when.to}</p>
                            {/* <p className="ticket-info">seat:{ticket.seat}section: {ticket.section} </p> */}
                            <p className="ticket-id">{ticket.id} barcode </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tickets</p>
            )}
        </div>
    );
}

export default TicketsPage
