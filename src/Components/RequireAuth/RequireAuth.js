import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../init';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation()
    console.log("user from require Auth:", user);
    if (user){
        return children
    }
    return (
        <Navigate to="/logIn" state={{ from: location }} replace />
        
    );
};

export default RequireAuth;