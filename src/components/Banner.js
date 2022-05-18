import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner() {
    return (
        <div className='jh-banner'>
            <img src={logo} alt='jungle-house' className='jh-logo' />
            <h1>Jungle House</h1>
        </div>
    )
}

export default Banner