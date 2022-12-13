import singleRoom from '../images/single-room.jpg';
import coupleRoom from '../images/couple.jpg';
import familyRoom from '../images/family.jpg';
import beachRoom from '../images/beach-room.jpg';


export const rooms = [
    {
        id: 1,
        roomName: 'Luxarious couple room',
        image: coupleRoom,
        bed: '1',
        capacity: '2',
        price: 120,
        feature: 'This room is mainly for couples who wants to book a luxurious room'
    },
    {
        id: 2,
        roomName: 'Single room for people relaxation',
        image: singleRoom,
        bed: '1',
        capacity: '1',
        price: 150,
        feature: 'This room is booked by people who dont want to share bed or living single.'
    },
    {
        id: 3,
        roomName: 'Beautiful family room',
        image: familyRoom,
        bed: '2',
        capacity: '5',
        price: 220,
        feature: 'This room is mainly for family package. Couples and there kids can easily attach here'
    },
    {
        id: 4,
        roomName: 'Couple room beside beach view',
        image: beachRoom,
        bed: '1',
        capacity: '1',
        price: 180,
        feature: 'This room is mainly for couples who wants to book a luxurious room'
    }
]