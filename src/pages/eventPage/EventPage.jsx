import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MainSection from '../../components/mainSection/MainSection'
import useEventStore from '../../store/event-store';
import Counter from '../../components/counter/Counter';
import './eventPage.css'
// import axios from 'axios';
// import Button from '../../components/button/Button';
// import { Link } from 'react-router-dom';

function EventPage() {

    const { name } = useParams();
    const events = useEventStore((state) => state.events);
    const { event } = useEventStore((state) => ({
        event: state.event,
    }));
    // const activeEvent = events.find((event) => event.name === (name)); // Find the active event

    useEffect(() => {
        console.log("EventPage rendered with name:", name);
    }, [name]);

    return (
        <>
            <MainSection
                mainTitle={"Event"} >
                <article>
                    {event ? (
                        <article className='eventPage-container' >
                            <p className='eventPage-info'>You are about to score some tickets to</p>
                            <h2 className='eventPage-title'>{event.name}</h2>
                            <p className='eventPage-date'>{event.when.date} {event.when.from} - {event.when.to}</p>
                            <p className='eventPage-place'>@ {event.where}</p>
                            <Counter event={event} />
                        </article>
                    ) : (
                        <p>Event not found</p>
                    )}
                </article>
            </MainSection >
        </>
    )
}

export default EventPage
