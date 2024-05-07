import './frontPage.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function FrontPage() {

    return (
        <Link aria-label='Navigate to events' className='frontPage' to="/EventsPage">
            <img className='logo' src={logo} alt="logo" />
            <h1 className='frontPage-header'>Where It’s @</h1>
            <h2 className='frontPage-text'>Ticketing made easy</h2>
        </Link>
    )
}

export default FrontPage
