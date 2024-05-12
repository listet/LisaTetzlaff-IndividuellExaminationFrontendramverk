import useEventStore from "../../store/event-store";
import './ticketsPage.css'

function TicketsPage() {

    const tickets = useEventStore(state => state.tickets);

    //Delar datumet i when för att endast få de tre första boktäverna i månaden
    function formatDate(dateStr) {
        if (dateStr) {
            const parts = dateStr.split(" ");
            if (parts.length >= 2) {
                const month = parts[1].slice(0, 3);
                const day = parts[0];
                return `${day} ${month}`;
            }
            return "";
        }
    }

    return (
        <section className="tickets">
            {tickets.length > 0 ? (
                <ul>
                    {tickets.map((ticket, index) => (
                        <li className="tickets__list" key={index}>
                            <section className="ticket__info--what">
                                <p className="ticket__label">WHAT</p>
                                <h2>{ticket.name}</h2>
                            </section>
                            <section className="ticket__info--where">
                                <p className="ticket__label">WHERE</p>
                                <p className="ticket__detail--bold">{ticket.where}</p>
                            </section>
                            <section className="ticket__info--date">
                                <article className="ticket__detail--padding">
                                    <p className="ticket__label">WHEN</p>
                                    <p className="ticket__detail--bold">{formatDate(ticket.when.date)}</p>
                                </article>
                                <article className="ticket__detail--border">
                                    <p className="ticket__label">FROM</p>
                                    <p className="ticket__detail--bold">{ticket.when.from}</p>
                                </article>
                                <article className="ticket__detail--padding">
                                    <p className="ticket__label">TO</p>
                                    <p className="ticket__detail--bold">{ticket.when.to}</p>
                                </article>
                            </section>
                            <article className="ticket__info">
                                <p className="ticket__label">INFO</p>
                                <p className="ticket__detail--sectionAndSeat">section: {ticket.section} - seat: {ticket.seat}</p>
                            </article>
                            <p className="ticket__barcode">barcode</p>
                            <p className="ticket__id">#{ticket.id} </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="ticket__info--what">No tickets</p>
            )}
        </section>
    );
}

export default TicketsPage
