import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import MainSection from '../../components/mainSection/MainSection'

function EventPage(name) {

    const { id } = useParams();
    const [activeEvent, setActiveEvent] = useState({});

    //Ladda ner API med ID till setActiveMovie
    useEffect(() => {
        axios.get(`GET https://santosnr6.github.io/Data/events.json${name}`)
            .then(response => {
                setActiveEvent(response.data);
            });

    }, [])

    return (
        <>
            <MainSection
                mainTitle={"Event"}
            />
        </>
    )
}

export default EventPage
