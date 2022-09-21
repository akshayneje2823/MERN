import './Header.css';
import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    return (
        <div className='header'>
            <div className="header-container">
                <div className="header-list">
                    <div className="header-list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>

                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>

                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>car rentals</span>
                    </div>

                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>

                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>

                <h1 className='header-tit'>A lifetime of discounts? It's genius.</h1>
                <p className='header-desc'>Get rewarded for your travels-unlock instatnt saving of 10% or more with a free Lambooking account.</p>
                <button className="header-btn">Sign in/Register</button>

                <div className="header-search">
                    <div className="header-search-items">
                        <FontAwesomeIcon icon={faBed} className='header-icon' />
                        <input
                            type="text"
                            className='header-search-input'
                            placeholder='Where are you going?'
                        />
                    </div>
                    <div className="header-search-items">
                        <FontAwesomeIcon icon={faCalendarDays} className='header-icon' />
                        <span className='header-search-text'>date to date</span>
                    </div>
                    <div className="header-search-items">
                        <FontAwesomeIcon icon={faPerson} className='header-icon' />
                        <span className='header-search-text'>2 adults 2 children 1 room</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
