import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <p>Want to book a room ?<Link to='/book'> Book</Link></p>
        </div>
    );
};

export default Home;