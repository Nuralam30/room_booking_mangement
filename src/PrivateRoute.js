import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './App';


const PrivateRoute = ({ children }) => {
    const [ loggedInUser ] = useContext(UserContext);
    
    return loggedInUser.isSignedIn ? children : <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;