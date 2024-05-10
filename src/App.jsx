import { Route, Routes } from 'react-router-dom'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';
import FrontPage from './pages/frontPage/FrontPage'
import EventsPage from './pages/eventsPage/EventsPage'
import OrderPage from './pages/orderPage/OrderPage'
import EventPage from './pages/eventPage/EventPage'
import TicketsPage from './pages/ticketsPage/TicketsPage';
import Nav from './components/nav/Nav'
import useEventStore from './store/event-store';

function App() {

  // Hämta setEvents från storen
  const setEvents = useEventStore(state => state.setEvents);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`https://santosnr6.github.io/Data/events.json`)
        // Använd setEvents för att uppdatera events i storen från API
        setEvents(response.data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    //Kallar på funktionen fetchEvents
    fetchEvents();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/FrontPage" element={<FrontPage />} />
        <Route path="/EventsPage" element={<EventsPage />} />
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/TicketsPage" element={<TicketsPage />} />
        <Route path="/EventPage/:name" element={<EventPage />} />
      </Routes>
      <Nav />
    </>
  )
}

export default App
