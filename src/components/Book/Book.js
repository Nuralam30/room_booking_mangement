import React from 'react';
import './Book.css';
import { allRooms } from './allRooms';
import Room from './Room/Room';

const Book = () => {
    return (
        <div className='book-room'>
            <div className="rooms">
                {
                    allRooms.map(ro => <Room key={ro.id} room={ro} showBookBtn={true}></Room>)
                }
            </div>
        </div>
    );
};

export default Book;