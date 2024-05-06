import './event.css'
import { Link } from "react-router-dom"
import useEventStore from '../../store/event-store';

function Event({ data }) {

    function formatDate(dateStr) {
        if (dateStr) {
            const parts = dateStr.split(" ");
            if (parts.length >= 2) { // Check if parts array has at least two elements
                const day = parts[0];
                const month = parts[1].slice(0, 3); // Slice the month if it exists
                return { day, month };
            }
        }
        // If dateStr is not defined or doesn't have expected format, return empty strings
        return { day: "", month: "" };
    }

    const { day, month } = formatDate(data.when?.date);

    const setActiveEvent = useEventStore((state) => state.setActiveEvent);

    const handleClick = () => {
        setActiveEvent(data);
    };

    return (
        <Link to={`/EventPage/${data.name}`} className="event-link" onClick={handleClick}>
            <section className="event-container">
                <article className='event-date'>
                    <p className='day'>{day}</p>
                    <p className='month'>{month}</p>
                </article>
                <article className='event-info'>
                    <h2 className='event-title'>{data.name}</h2>
                    <p className='event-place'>{data.where}</p>
                    <p className='event-time'>{data.when?.from} - {data.when?.to}</p>
                </article>
                <p className='event-price'>{data.price}sek</p>
            </section>
        </Link>
    )
}

export default Event
