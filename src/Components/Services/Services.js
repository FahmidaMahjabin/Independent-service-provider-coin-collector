import React from 'react';
import flagshipCoin from "../../images/flagShipCoin.jpg";
import crownCoin from "../../images/crownCoin.png";
import anticCoin from "../../images/anticCoin.png";
import anyCountry from "../../images/anyCountry.jpg";
import arbiCoin from "../../images/arbiCoin.jpg";
import banglaCoin from "../../images/bangla coin.jpg";
import Service from './service/Service';
const data =
    [
        {
            "id": "625c1ad597ada7b34eaa5d73",
            "picture": flagshipCoin,
            "name": "flagshipCoin",
            "about": "This is flagship coin of diffferent countries. You can select any country flagship coin to buy.",
            "price":"$100~400"
        },

        {
            "id": "625c1ad514eaf2fb1e65ce1c",
            "picture": crownCoin,
            "name": "crownCoin",
            "about": "I have collections of crownCoil. Please visit the gallery and select your desired crownCoin",
            "price":"$70~150"
        },
        {
            "id": "625c1ad5be8f94b850b57f32",
            "picture": anticCoin,
            "name": "antic Coin",
            "about": "From Brithish, Islamic period all kinds of antic coins you can buy here",
            "price":"$130"
        },
        {
            "id": "625c1ad5703f7eef93339577",
            "picture": arbiCoin,
            "name": "Arbic Coin",
            "about": "You'll get Silver coin of islamic period.Price will vary with the quality.",
            "price": "$120~200"
        },
        {
            "id": "625c1ad5795af864eea0c502",
            "picture": anyCountry,
            "name": "Different Currency",
            "about": "You'll get any country coin. Price will vary with it's currency value",
            "price": "$10~100",
        },
        {
            "id": "625c1ad5a39164ee8c0d72eb",
            "picture": banglaCoin,
            "name": "Landry Hull",
            "about": "You can get Antic coin of our subcontinent.",
            "price":"$150"
        }
    ]

const Services = () => {
    return (
        <div>
            <h1 className='text-center display-3 text-success'>services</h1>
            <div class="container">
                <div className=' row g-5'>
                    {data.map(oneItem => <Service oneItem={oneItem} key={oneItem.id}></Service>)}
                </div>
            </div>


        </div>

    );
};

export default Services;