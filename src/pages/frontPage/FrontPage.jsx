import './frontPage.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import useEventStore from '../../store/event-store';

function FrontPage() {

    const setActiveEvent = useEventStore((state) => state.setActiveEvent);
    const clearActiveEvent = () => {
        setActiveEvent(null);
    };

    return (
        <Link aria-label='Navigate to events' className='frontPage' to="/EventsPage" onClick={clearActiveEvent}>
            <img className='logo' src={logo} alt="logo" />
            <h1 className='frontPage-header'>Where It’s @</h1>
            <h2 className='frontPage-text'>Ticketing made easy</h2>
        </Link>
    )
}

export default FrontPage
