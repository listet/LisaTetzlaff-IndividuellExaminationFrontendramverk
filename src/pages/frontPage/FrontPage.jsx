import './frontPage.css'
import logo from '../../assets/logo.png';

function FrontPage() {
    return (
        <div className='frontPage'>
            <img className='logo' src={logo} alt="logo" />
            <h1 className='frontPage-header'>Where It’s @</h1>
            <h2 className='frontPage-text'>Ticketing made easy</h2>
        </div>
    )
}

export default FrontPage
