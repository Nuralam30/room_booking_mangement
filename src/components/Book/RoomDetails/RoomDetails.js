import React, { useContext, useState } from 'react';
import './RoomDetails.css';
import { useParams } from 'react-router-dom';
import { allRooms } from '../allRooms';
import Room from '../Room/Room';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button } from '@mui/material';
import { UserContext } from '../../../App';
import Bookings from '../../Bookings/Bookings';



const RoomDetails = () => {

    const { roomName } = useParams();
    const [ loggedInUser ] = useContext(UserContext);

    const selectedRoom = allRooms.find(rm => rm.roomName === roomName);

    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

    const handleCheckInDate = (date) =>{
        const newDate = {...selectedDate};
        newDate.checkIn = date;
        setSelectedDate(newDate);
        console.log(loggedInUser)
    }

    const handleCheckOutDate = (date) =>{
        const newDate = {...selectedDate};
        newDate.checkOut = date;
        setSelectedDate(newDate);
    }

    const handleBookConfirm = () =>{
        const newBooking = { ...loggedInUser, ...selectedDate };
        fetch('http://localhost:4000/addBooking', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div className='room-details'>
            <Room room={selectedRoom} showBookBtn={false}></Room>

            <div className="date-time">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3} className="date-choose">
                        <DesktopDatePicker
                        className="pick-date"
                        label="Check In Date"
                        value={selectedDate.checkIn}
                        minDate={dayjs('2022-01-01')}
                        onChange={handleCheckInDate}
                        renderInput={(params) => <TextField {...params} />}
                        />
                        <DesktopDatePicker
                        className="pick-date"
                        label="Check Out Date"
                        value={selectedDate.checkOut}
                        minDate={dayjs('2022-01-01')}
                        onChange={handleCheckOutDate}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            </div>
            <Button variant="contained" onClick={handleBookConfirm} className="confirm-book">Confirm</Button>

            <Bookings></Bookings>
        </div>
    );
};

export default RoomDetails;