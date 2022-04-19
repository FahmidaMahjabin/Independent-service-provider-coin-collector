import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Idea from './Idea/Idea';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Idea></Idea>
            <Services></Services>

        </div>
    );
};

export default Home;