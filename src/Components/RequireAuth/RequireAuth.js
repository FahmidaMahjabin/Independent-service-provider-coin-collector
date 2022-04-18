import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    console.log("user from require Auth:", user);
    if (user) {
        return children
    }
    if (loading) {
        return (
            <div className='text-center'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>

        )
    }
    return (
        <Navigate to="/logIn" state={{ from: location }} replace />

    );
};

export default RequireAuth;