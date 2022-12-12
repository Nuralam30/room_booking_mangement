import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import './Book.css';
import { rooms } from './allData';
import Room from './Room/Room';

const Book = () => {
    return (
        <div className='book-room'>
            <Navbar></Navbar>
            
            <div className="rooms">
                {
                    rooms.map(ro => <Room room={ro}></Room>)
                }
            </div>
        </div>
    );
};

export default Book;