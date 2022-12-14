import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './App';
import { history } from '_helpers';


const PrivateRoute = ({ children }) => {
    const [ loggedInUser ] = useContext(UserContext);
    
    if (!loggedInUser.isSignedIn) {
        return <Navigate to="/login" state={{ from: history.location }} />
    }
    return children;
};

export default PrivateRoute;