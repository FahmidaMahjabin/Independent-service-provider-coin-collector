import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import bulkCoin from "../../../images/bulkCoin.png";
import crownCoin from "../../../images/crownCoin.png";
import anticCoin from "../../../images/anticCoin.png";
const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }




    return (
        <div style = {{height:"400px"}}>
            <Carousel activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item >
                    <img style={{objectFit:"cover", height: "400px"}}
                        className="d-block w-100"
                        src={bulkCoin}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img style={{objectFit:"cover", height: "400px"}}
                        className="d-block w-100"
                        src={crownCoin}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img style={{objectFit:"cover", height: "400px"}}
                        className="d-block w-100"
                        src={anticCoin}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}






export default Banner;