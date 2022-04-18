import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {checkoutId} = useParams();
    
    console.log(checkoutId)
    return (
        <div>
            <h1>Checkout</h1>
        </div>
    );
};

export default Checkout;