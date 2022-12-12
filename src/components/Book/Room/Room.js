import React from 'react';
import './Room.css';

const Room = (props) => {
    const { room, image, capacity, feature } = props.room;

    const roomImage = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div className='room'>
            <div className="room-image" style={roomImage}></div>
            <h3>{room}</h3>
            <p>Capacity {capacity} people</p>
            <p>{feature}</p>
            <button>Book Now</button>
        </div>
    );
};

export default Room;