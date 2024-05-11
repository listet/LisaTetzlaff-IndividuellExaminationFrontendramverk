import './event.css'
import useEventStore from '../../store/event-store';
import { useNavigate } from 'react-router-dom';

function Event({ data }) {
    // Tar emot data från EventsPage. 

    //Tar fram datan för att kunna setEvent till store inför EventPage.
    const { setEvent } = useEventStore((state) => ({
        setEvent: state.setEvent,
    }));

    //Hook från react-router-dom för att navigera till eventPage med datan på eventet
    const navigate = useNavigate();

    //Funktion för att separera datum och månad, få endast tre bokstäver samt upperCase
    function formatDate(dateStr) {
        if (dateStr) {
            const parts = dateStr.split(" ");
            if (parts.length >= 2) {
                const day = parts[0];
                const month = parts[1].slice(0, 3).toUpperCase();
                return { day, month };
            }
        }
        // If dateStr inte är definierad så skickar den tillbaka tomma strängar
        return { day: "", month: "" };
    }
    const { day, month } = formatDate(data.when.date);

    //Vid tryck på valt event skickas data till setEvent samt navigation sker till EventPage.
    const goToEventPage = () => {
        setEvent(data);
        navigate(`/EventPage/${data.name}`)
    }

    return (
        <section className="event-container" onClick={() => goToEventPage()}>
            <article className='event-date'>
                <p>{day}</p>
                <p>{month}</p>
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
