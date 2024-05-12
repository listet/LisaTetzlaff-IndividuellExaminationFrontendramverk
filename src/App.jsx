import { Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
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


  //Använder hook-en useLocation för genomgående animering
  const location = useLocation();

  return (
    <>
      <CSSTransition
        key={location.key}
        timeout={200}
        classNames="fade"
      >
        <Routes location={location}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/FrontPage" element={<FrontPage />} />
          <Route path="/EventsPage" element={<EventsPage />} />
          <Route path="/OrderPage" element={<OrderPage />} />
          <Route path="/TicketsPage" element={<TicketsPage />} />
          <Route path="/EventPage/:name" element={<EventPage />} />
        </Routes>
      </CSSTransition>
      <Nav />
    </>
  )
}

export default App
