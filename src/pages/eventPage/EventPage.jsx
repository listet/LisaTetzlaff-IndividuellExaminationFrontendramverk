import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import MainSection from '../../components/mainSection/MainSection'
import useEventStore from '../../store/event-store';

function EventPage() {

    const { id } = useParams();

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`https://santosnr6.github.io/Data/events.json`);
                const events = response.data;
                const event = events.find(event => event.id === parseInt(id));
                if (event) {
                    useEventStore.getState().addEvent(event); // Use addEvent function to add the event
                    console.log('Fetched event:', event);
                } else {
                    console.error('Event not found');
                }
            } catch (error) {
                console.error('Error fetching event:', error);
            }
        };

        fetchEvent();
    }, [id]);

    const events = useEventStore((state) => state.events);
    const activeEvent = events.find((event) => event.id === parseInt(id)); // Find the active event

    return (
        <>
            <MainSection
                mainTitle={"Event"} >
                <article className='event-container' >
                    {activeEvent ? (
                        <div className='event' >
                            <h2>{activeEvent.name}</h2>
                        </div>
                    ) : (
                        <p>Event not found</p>
                    )}
                </article>
            </MainSection >
        </>
    )
}

export default EventPage
