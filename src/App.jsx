import { Route, Routes } from 'react-router-dom'
import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import FrontPage from './pages/frontPage/FrontPage'
import EventsPage from './pages/eventsPage/EventsPage'
import OrderPage from './pages/orderPage/OrderPage'
import EventPage from './pages/eventPage/EventPage'
import Nav from './components/nav/Nav'
import useEventStore from './store/event-store';

function App() {

  const setEvents = useEventStore(state => state.setEvents); // Hämta setEvents från storen

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`https://santosnr6.github.io/Data/events.json`)
        setEvents(response.data.events); // Använd setEvents för att uppdatera events i storen
        const fetchedEvents = response.data.events;
        console.log('Fetched events:', response.data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [setEvents]);


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

  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/FrontPage" element={<FrontPage />} />
        <Route path="/EventsPage" element={<EventsPage />} />
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/EventPage/:name" element={<EventPage />} />
      </Routes>
      <Nav />
    </>
  )
}

export default App
