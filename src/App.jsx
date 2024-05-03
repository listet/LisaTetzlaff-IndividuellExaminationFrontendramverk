import { Route, Routes } from 'react-router-dom'
import './App.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import FrontPage from './pages/frontPage/FrontPage'
import EventsPage from './pages/eventsPage/EventsPage'
import OrdersPage from './pages/orderPage/OrderPage'
import EventPage from './pages/eventPage/EventPage'
import Nav from './components/nav/Nav'
import useEventStore from './store/event-store';

function App() {

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`https://santosnr6.github.io/Data/events.json`)
        useEventStore.setState({ events: response.data.events });
        console.log('Fetched events:', response.data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/FrontPage" element={<FrontPage />} />
        <Route path="/EventsPage" element={<EventsPage />} />
        <Route path="/OrdersPage" element={<OrdersPage />} />
        <Route path="/EventPage/:id" element={<EventPage />} />
      </Routes>
      <Nav />
    </>
  )
}

export default App
