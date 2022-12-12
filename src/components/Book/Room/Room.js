import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Room.css';

const Room = (props) => {
    const { room, image, capacity, feature } = props.room;
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);

    const roomImage = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const navigate = useNavigate();
    const handleBookRoom = () =>{
        if(!loggedInUser.isSignedIn){
            navigate('/login');
        }
        else{
            console.log('book room')
        }
    }

    return (
        <div className='room'>
            <div className="room-image" style={roomImage}></div>
            <h3>{room}</h3>
            <p>Capacity {capacity} people</p>
            <p>{feature}</p>
            <button onClick={handleBookRoom}>Book Now</button>
        </div>
    );
};

export default Room;