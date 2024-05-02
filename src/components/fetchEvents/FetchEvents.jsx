import { useState, useEffect } from 'react';
import axios from 'axios';

function FetchEvents() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Function to fetch events when component mounts
        const getEvents = () => {
            axios.get(`https://santosnr6.github.io/Data/events.json`)
                .then(response => {
                    // Update state with the fetched events
                    setEvents(response.data);
                    console.log('Fetched events:', response.data);
                })
                .catch(error => {
                    console.error('Error fetching events:', error);
                });

        };

        getEvents();
    }, []);

    return (
        <>

        </>
    );
}

export default FetchEvents;