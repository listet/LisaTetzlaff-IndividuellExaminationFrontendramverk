import { Route, Routes } from 'react-router-dom'
import './App.css'
import FrontPage from './pages/frontPage/FrontPage'
import EventsPage from './pages/eventsPage/EventsPage'
import OrdersPage from './pages/orderPage/OrderPage'
import EventPage from './pages/eventPage/EventPage'
import Nav from './components/nav/Nav'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/FrontPage" element={<FrontPage />} />
        <Route path="/EventsPage" element={<EventsPage />} />
        <Route path="/OrdersPage" element={<OrdersPage />} />
        <Route path="/EventPage" element={<EventPage />} />
      </Routes>
      <Nav />
    </>
  )
}

export default App
