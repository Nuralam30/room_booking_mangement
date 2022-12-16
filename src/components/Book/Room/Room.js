import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Room.css';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import HotelIcon from '@mui/icons-material/Hotel';

const Room = (props) => {
    const { room, showBookBtn } = props;
    const { roomName, image, bed, capacity, price, feature } = room;
    const [ loggedInUser ] = useContext(UserContext);

    const roomImage = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const navigate = useNavigate();
    const handleBookRoom = () =>{
        loggedInUser.isSignedIn = true;

        if(!loggedInUser.isSignedIn){
            navigate('/login');
        }
        else{
            navigate('/room-details/'+roomName);
        }
    }

    return (
        <div className='room'>
            <div className="room-image" style={roomImage}></div>

            <div className="room-info">
                <span><HotelIcon></HotelIcon>{bed}</span>
                <span><EscalatorWarningIcon></EscalatorWarningIcon> {capacity} </span>
                <span>$ {price}</span>
            </div>
            
            <h3>{roomName}</h3>
            <p>{feature}</p>
            {
                showBookBtn ? <button onClick={handleBookRoom}>Book Now</button> : ''
            }
        </div>
    );
};

export default Room;