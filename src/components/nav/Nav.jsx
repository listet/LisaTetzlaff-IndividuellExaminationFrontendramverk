import './nav.css'
import { Link, useLocation } from 'react-router-dom'

function Nav() {

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'nav-item-active' : '';
    };


    return (
        <nav className='nav-container'>
            <Link aria-label='Navigate to home' className={`nav-item ${isActive('/FrontPage')}`} to="/FrontPage">
                <p>Home</p>
            </Link>
            <Link aria-label='Navigate to events' className={`nav-item ${isActive('/EventsPage')}`} to="/EventsPage">
                <p>Events</p>
            </Link>
            <Link aria-label='Navigate to orders' className={`nav-item ${isActive('/OrderPage')}`} to="/OrderPage">
                <p>Orders</p>
            </Link>
            <Link aria-label='Navigate to tickets' className={`nav-item ${isActive('/TicketsPage')}`} to="/TicketsPage">
                <p>Tickets</p>
            </Link>
        </nav >

    )
}

export default Nav
