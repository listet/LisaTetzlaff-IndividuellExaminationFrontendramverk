import { useState, useEffect } from 'react';
import axios from 'axios';
import Event from '../event/Event';
import './fetchEvents.css'

function FetchEvents() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = () => {
            axios.get(`https://santosnr6.github.io/Data/events.json`)
                .then(response => {
                    // Uppdaterar state
                    setEvents(response.data.events);
                    console.log('Fetched events:', response.data.events);
                })
                .catch(error => {
                    console.error('Error fetching events:', error);
                });
        }

        getEvents();
    }, []);

    return (
        <section className='events'>
            {events.map((event, index) => (
                <Event key={index} data={event} />
            ))}
        </section>
    );
}

export default FetchEvents;