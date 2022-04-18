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
                        <h3>Different Country Coin</h3>
                        <p>Buy different country coin</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img style={{objectFit:"cover", height: "400px"}}
                        className="d-block w-100"
                        src={crownCoin}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Crown Coin</h3>
                        <p>Buy rear crown Coin</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img style={{objectFit:"cover", height: "400px"}}
                        className="d-block w-100"
                        src={anticCoin}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Coin with Certification</h3>
                        <p>
                            Get certified rear coin.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}






export default Banner;