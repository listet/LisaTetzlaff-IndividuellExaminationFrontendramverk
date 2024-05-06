import './nav.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className='nav-container'>
            <Link aria-label='Navigate to home' className='nav-item' to="/FrontPage">
                <p>Home</p>
            </Link>
            <Link aria-label='Navigate to events' className='nav-item' to="/EventsPage">
                <p>Events</p>
            </Link>
            <Link aria-label='Navigate to orders' className='nav-item' to="/OrderPage">
                <p>Orders</p>
            </Link>
        </nav>

    )
}

export default Nav
