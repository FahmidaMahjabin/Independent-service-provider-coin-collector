import React from 'react';
import notFound from "../../images/fotFound.png";
const NotFound = () => {
    return (
        <div className='text-center'>
            <img src = {notFound} alt = "not Found"></img>
        </div>
    );
};

export default NotFound;