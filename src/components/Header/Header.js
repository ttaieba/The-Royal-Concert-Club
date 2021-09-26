import React from 'react'
import './Header.css';
import pic from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            {/* menu bar section  */}
            <nav>
                <img src={pic} alt="" />
                <a href="/home"> Home</a>
                <a href="/shedule">shedule</a>
                <a href="/aboutus">About us </a>
                <a href="contactus"> Contact Us</a>

            </nav>
            {/* title details here  */}
            <h1>The Royal Music Concert</h1>
            <h4>Life is one grand, sweet song, so start the music.

            </h4>
            <h1>Total budeget : $ 1500000</h1>
        </div>
    );
};

export default Header;