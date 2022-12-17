import React, { useState } from 'react';
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



const RoomDetails = () => {

    const { roomName } = useParams()
    const selectedRoom = allRooms.find(rm => rm.roomName === roomName);

    const [checkIn, setCheckIn] = useState(dayjs(new Date()));
    const [checkOut, setCheckOut] = useState(dayjs(new Date()));

    const handleBookConfirm = () =>{
        console.log(checkIn, checkOut)
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
                        value={checkIn}
                        minDate={dayjs('2022-01-01')}
                        onChange={(newValue) => {
                            setCheckIn(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        />
                        <DesktopDatePicker
                        className="pick-date"
                        label="Check Out Date"
                        value={checkOut}
                        minDate={dayjs('2022-01-01')}
                        onChange={(newValue) => {
                            setCheckOut(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            </div>
            <Button variant="contained" onClick={handleBookConfirm} className="confirm-book">Confirm</Button>
        </div>
    );
};

export default RoomDetails;