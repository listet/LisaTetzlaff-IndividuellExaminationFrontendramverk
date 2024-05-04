import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import MainSection from '../../components/mainSection/MainSection'
import useEventStore from '../../store/event-store';
import Counter from '../../components/counter/Counter';
import './eventPage.css'
import Button from '../../components/button/Button';

function EventPage() {

    const { name } = useParams();

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`https://santosnr6.github.io/Data/events.json?name=${name}`);
                const events = response.data.events;
                const event = events.find(e => e.name === name);
                if (event) {
                    console.log('Fetched event:', event);
                    useEventStore.setState({ price: event.price }); // Set the price in the store
                } else {
                    console.error('Event not found');
                }
            } catch (error) {
                console.error('Error fetching event:', error);
            }
        };
        fetchEvent();
    }, [name]);

    const events = useEventStore((state) => state.events);
    const activeEvent = events.find((event) => event.name === (name)); // Find the active event

    return (
        <>
            <MainSection
                mainTitle={"Event"} >
                <article className='eventPage-container' >
                    {activeEvent ? (
                        <article className='eventPage-event' >
                            <p>You are about to score some tickets to</p>
                            <h2>{activeEvent.name}</h2>
                            <p>{activeEvent.when.date} {activeEvent.when.from} - {activeEvent.when.to}</p>
                            <p>{activeEvent.where}</p>
                            <Counter />
                            <Button />
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
