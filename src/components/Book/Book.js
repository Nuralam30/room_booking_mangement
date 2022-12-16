import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import './Book.css';
import { allRooms } from './allRooms';
import Room from './Room/Room';

const Book = () => {
    return (
        <div className='book-room'>
            <Navbar></Navbar>
            
            <div className="rooms">
                {
                    allRooms.map(ro => <Room key={ro.id} room={ro} showBookBtn={true}></Room>)
                }
            </div>
        </div>
    );
};

export default Book;