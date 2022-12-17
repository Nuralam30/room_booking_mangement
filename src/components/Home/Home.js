import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homeImg from '../images/burj-al-arab.jpg';

const Home = () => {
    const bannerStyle ={
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${homeImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    }


    return (
        <div className='home'>
            <div className="banner-content" style={bannerStyle}>
                <h1>Burj Al Arab</h1>
                <h3>A world famous hotel for Tourists</h3>
            </div>

            <p className='home-text'>Want to book a room ?<Link to='/book'> Book</Link></p>
        </div>
        
    );
};

export default Home;