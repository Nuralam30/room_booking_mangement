import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRoute = ({ children , redirectTo}) => {
    const [loggedInUser] = useContext(UserContext);
    const location = useLocation()

    return loggedInUser.email ? children : <Navigate to={redirectTo} state={{ from: location }} replace />;
};

export default PrivateRoute;