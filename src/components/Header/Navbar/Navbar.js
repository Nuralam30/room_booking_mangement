import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navlist">
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/book'>Book Room</Link>
                <Link className="nav-link" to='/login'>Login</Link>
            </nav>
        </div>
    );
};

export default Navbar;