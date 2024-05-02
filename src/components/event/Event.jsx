import './event.css'
import { Link } from "react-router-dom"
// Use param here 

function Event({ data }) {

    function formatDate(dateStr) {
        const parts = dateStr.split(" "); // Delar upp "13 December" till ["13", "December"]
        const day = parts[0]; // Dagen, "13"
        const month = parts[1].slice(0, 3); // De första tre bokstäverna i månaden, "Dec"
        return { day, month }; // Sätter ihop dem igen till "13 Dec"
    }

    const { day, month } = formatDate(data.when.date);

    return (
        <section className="event-container">
            <article className='event-date'>
                <p className='day'>{day}</p>
                <p className='month'>{month}</p>
            </article>
            <article className='event-info'>
                <h2 className='event-title'>{data.name}</h2>
                <p className='event-place'>{data.where}</p>
                <p className='event-time'>{data.when.from} - {data.when.to}</p>
            </article>
            <p className='event-price'>{data.price}sek</p>
        </section>
    )
}

export default Event
