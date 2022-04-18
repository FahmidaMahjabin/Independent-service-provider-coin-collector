import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const user = useAuthState();
    const location = useLocation()
    console.log("user from require Auth:", user);
    if (user){
        return children
    }
    return (
        <Navigate to="/login" state={{ from: location }} replace />
        
    );
};

export default RequireAuth;