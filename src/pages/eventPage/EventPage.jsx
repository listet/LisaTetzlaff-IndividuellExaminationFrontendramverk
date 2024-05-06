import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MainSection from '../../components/mainSection/MainSection'
import useEventStore from '../../store/event-store';
import Counter from '../../components/counter/Counter';
import './eventPage.css'
// import axios from 'axios';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

function EventPage() {

    const { name } = useParams();
    const addOrder = useEventStore(state => state.addOrder);
    const events = useEventStore((state) => state.events);
    const price = useEventStore(state => state.price)
    const quantity = useEventStore(state => state.quantity); // Function to set quantity in store
    const activeEvent = events.find((event) => event.name === (name)); // Find the active event

    // useEffect(() => {
    //     const fetchEvent = async () => {
    //         try {
    //             const response = await axios.get(`https://santosnr6.github.io/Data/events.json?name=${name}`);
    //             const fetchedEvents = response.data.events;
    //             const event = fetchedEvents.find(e => e.name === name);
    //             if (event) {
    //                 console.log('Fetched event:', event);
    //                 useEventStore.setState(state => ({
    //                     events: [...state.events, event], // Lägg till det nya eventet till den befintliga listan av events
    //                     price: event.price
    //                 }));
    //             } else {
    //                 console.error('Event not found');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching event:', error);
    //         }
    //     };
    //     fetchEvent();
    // }, [name]);

    const handleAddToCart = () => {
        console.log("Adding order:", activeEvent, quantity);
        addOrder(activeEvent, quantity);
    };

    return (
        <>
            <MainSection
                mainTitle={"Event"} >
                <article>
                    {activeEvent ? (
                        <article className='eventPage-container' >
                            <p className='eventPage-info'>You are about to score some tickets to</p>
                            <h2 className='eventPage-title'>{activeEvent.name}</h2>
                            <p className='eventPage-date'>{activeEvent.when.date} {activeEvent.when.from} - {activeEvent.when.to}</p>
                            <p className='eventPage-place'>@ {activeEvent.where}</p>
                            <Counter price={activeEvent.price} />
                            <Link aria-label='Navigate to orders' to="/OrderPage">
                                <Button onClick={handleAddToCart} buttonText="Lägg i varukorgen" />
                            </Link>
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
