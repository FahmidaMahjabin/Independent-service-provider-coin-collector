import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ oneItem }) => {
    const { name, picture, about } = oneItem;
    return (
        <div className='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
            <Card >
                <Card.Img className = "w-100" variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Button variant="primary">CheckOut</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Service;