import React from 'react';
import './Header.css';
import homeImg from '../images/burj-al-arab.jpg';
import Navbar from './Navbar/Navbar';

const Header = () => {
    const bannerStyle ={
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${homeImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    }


    return (
        <div className='header' style={bannerStyle}>
            <Navbar></Navbar>
            <div className="banner-content">
                <h1>Burj Al Arab</h1>
                <h3>A world famous hotel for Tourists</h3>
            </div>
        </div>
    );
};

export default Header;