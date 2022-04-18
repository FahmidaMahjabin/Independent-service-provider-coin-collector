import React from 'react';
import { Button, Form } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { checkoutId } = useParams();

    console.log(checkoutId)
    return (
        
        <div className='text-center'>
            <div position="top-right" reverseOrder={false}><Toaster/></div>
            <h1 class="text-success">Check Out</h1>
            <div className='w-50 bg-light my-5 p-4 mx-auto'>
                <Form>
                <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Phone No" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button onClick = {() => toast("successfully booked")} variant="primary" type="button">
                        CheckOut
                    </Button>
                </Form>
            </div>
        </div>

    );
};

export default Checkout;