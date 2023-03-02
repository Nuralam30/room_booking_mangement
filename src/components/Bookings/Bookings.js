import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () =>{

    const [ loggedInUser ] = useContext(UserContext);
    const [ bookings, setBookings ] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:4000/bookings?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setBookings(data))
    } , [fetch])

    return(
        <div>
            <h2>Your Bookings</h2>
            {
                bookings.map(bo => <li>{bo.name} <b>from:</b> {new Date(bo.checkIn).toDateString('dd/MM/yyyy')} <b>to:</b> {new Date(bo.checkOut).toDateString('dd/MM/yyyy')}</li>)
            }
        </div>
    )
}

export default Bookings;