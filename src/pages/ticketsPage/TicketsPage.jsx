import useEventStore from "../../store/event-store";

import './ticketsPage.css'

function TicketsPage() {

    const tickets = useEventStore(state => state.tickets);
    console.log(tickets)

    function formatDate(dateStr) {
        if (dateStr) {
            const parts = dateStr.split(" ");
            if (parts.length >= 2) { // Check if parts array has at least two elements
                const month = parts[1].slice(0, 3); // Slice the month if it exists
                const day = parts[0];
                return `${day} ${month}`;
            }
            // If dateStr is not defined or doesn't have expected format, return empty strings
            return "";
        }
    }

    return (
        <div className="tickets-container">
            {tickets.length > 0 ? (
                <ul>
                    {tickets.map((ticket, index) => (
                        <li className="ticket-container" key={index}>
                            <h2 className="ticket-what">
                                <p className="ticket-info--span">WHAT</p>
                                <p>{ticket.name}</p>
                            </h2>
                            <article className="ticket-where">
                                <p className="ticket-info--span">WHERE</p>
                                <p className="ticket-info--bold">{ticket.where}</p>
                            </article>
                            <article className="ticket-date">
                                <div className="ticket-info--padding">
                                    <p className="ticket-info--span">WHEN</p>
                                    <p className="ticket-info--bold">{formatDate(ticket.when.date)}</p>
                                </div>
                                <div className="ticket-info--border">
                                    <p className="ticket-info--span">FROM</p>
                                    <p className="ticket-info--bold">{ticket.when.from}</p>
                                </div>
                                <div className="ticket-info--padding">
                                    <p className="ticket-info--span">TO</p>
                                    <p className="ticket-info--bold">{ticket.when.to}</p>
                                </div>
                            </article>
                            <div className="ticket-info">
                                <p className="ticket-info--span">INFO</p>
                                <p className="ticket-info-seactionAndSeat">section: {ticket.section} - seat: {ticket.seat}</p>
                            </div>
                            <p className="ticket-barcode">barcode</p>
                            <p className="ticket-id">#{ticket.id} </p>
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
