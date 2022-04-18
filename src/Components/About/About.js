import React from 'react';
import proPic from "../../images/propic.png";
const About = () => {
    return (
        <div>
            <h1 className='text-success text-center mb-5'>About</h1>
            <div className='container'>
                <div className='row g-5 align-items-center'>
                    <div className='col-md-6'>
                        <img src={proPic} alt="propic"></img>
                    </div>
                    
                    <div className='col-md-6'>
                        <h3>Md. Iftakharul Islam</h3>
                        <p>
                            I love to collect coin at a very early age. It's my passion. At early age I used to ask my relatives to gift me coin. From there I am now a professional collector.I have currencies of all countries. I usually love to collect the coins which have a history behind them. I also love collect crown coins. You can see the whole world with the eyes of coin of that country. 
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;