import React from 'react';
import flagshipCoin from "../../images/flagShipCoin.jpg";
import crownCoin from "../../images/crownCoin.png";
import anticCoin from "../../images/anticCoin.png";
import anyCountry from "../../images/anyCountry.jpg";
import arbiCoin from "../../images/arbiCoin.jpg";
import Service from './service/Service';
const data =
    [
        {
            "id": "625c1ad597ada7b34eaa5d73",
            "picture": flagshipCoin,
            "name": "Orr Floyd",
            "about": "Pariatur amet magna aute ex commodo dolore excepteur eiusmod ad ea pariatur cillum sunt adipisicing. Fugiat ullamco cupidatat consectetur minim exercitation voluptate nostrud ut nulla cillum deserunt. Incididunt magna voluptate dolore fugiat non eiusmod minim tempor exercitation quis aliquip. Elit excepteur anim aliquip ullamco voluptate aliqua minim exercitation amet sit ex Lorem culpa deserunt. Lorem anim voluptate sit irure minim voluptate velit duis amet. Enim pariatur dolor ex mollit dolor consectetur dolore exercitation occaecat.\r\n"
        },

        {
            "id": "625c1ad514eaf2fb1e65ce1c",
            "picture": crownCoin,
            "name": "Kirk Delacruz",
            "about": "Laborum officia et laborum esse eiusmod labore officia ipsum laboris laboris mollit sunt nisi. Non ex ut sint reprehenderit exercitation irure non excepteur est ea reprehenderit velit. Aliquip laborum pariatur amet exercitation in duis exercitation duis quis adipisicing culpa deserunt ex.\r\n"
        },
        {
            "id": "625c1ad5be8f94b850b57f32",
            "picture": anticCoin,
            "name": "Sweet Palmer",
            "about": "Ut tempor anim irure dolor quis qui commodo aliqua non consectetur veniam labore aute. Esse cillum ut nulla magna culpa aliqua pariatur occaecat. Mollit non qui adipisicing eiusmod in culpa commodo adipisicing.\r\n"
        },
        {
            "id": "625c1ad5703f7eef93339577",
            "picture": arbiCoin,
            "name": "Sadie Cortez",
            "about": "Est dolor minim excepteur voluptate aute aute ullamco non ex est deserunt. Est quis ullamco elit deserunt amet deserunt Lorem consequat mollit aliqua ipsum. Deserunt est ut eu fugiat.\r\n"
        },
        {
            "id": "625c1ad5795af864eea0c502",
            "picture": anyCountry,
            "name": "Wilkins Wiggins",
            "about": "Proident adipisicing dolore culpa reprehenderit exercitation velit deserunt et ad reprehenderit est aute aliquip est. Laborum anim et adipisicing nostrud minim ullamco veniam sunt. Fugiat incididunt ullamco officia ea anim aliquip ea dolor sunt amet adipisicing labore est. Sit elit ipsum consequat culpa consectetur reprehenderit nulla irure ullamco ipsum voluptate. Laborum Lorem eiusmod proident fugiat nostrud adipisicing non tempor aute veniam.\r\n"
        },
        {
            "id": "625c1ad5a39164ee8c0d72eb",
            "picture": anyCountry,
            "name": "Landry Hull",
            "about": "Excepteur nostrud incididunt id ipsum consequat irure veniam mollit dolor. Ad veniam aliqua id sit do qui ut veniam laboris veniam qui laborum ut. Non laborum dolor eiusmod aliquip in tempor.\r\n"
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