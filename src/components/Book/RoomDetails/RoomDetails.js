import React from 'react';
import { useParams } from 'react-router-dom';
import { allRooms } from '../allRooms';
import Room from '../Room/Room';

const RoomDetails = () => {

    const { roomName } = useParams()
    const selectedRoom = allRooms.find(rm => rm.roomName === roomName)

    return (
        <div className='room-details'>
            <Room room={selectedRoom} showBookBtn={false}></Room>
        </div>
    );
};

export default RoomDetails;