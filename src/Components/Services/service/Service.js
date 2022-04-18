import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ oneItem }) => {
    const { name, picture, about, price } = oneItem;
    const navigate = useNavigate();
    const doCheckout = () =>{
        const checkoutId = oneItem.id;
        navigate(`service/${checkoutId}`)
        
    }
    return (
        <div className='col-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
            <Card >
                <Card.Img style = {{height:"330px" , objectFit: 'cover'}} className = "w-100" variant="top" src={picture} />
                <Card.Body style = {{position: "relative", height: "200px"}}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                        Price: {price}
                    </Card.Text>
                    <Button style = {{position:"absolute", bottom: "5px"}} onClick={doCheckout} variant="primary">CheckOut</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Service;