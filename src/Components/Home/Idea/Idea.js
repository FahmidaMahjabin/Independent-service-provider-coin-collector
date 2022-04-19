import React from 'react';
import currencyConcept from "../../../images/currency-concept-illustration.png";
const Idea = () => {
    return (
        <div className='d-flex bg-light mx-auto my-5 align-items-center justify-content-around'>
            <div>
                <h2 className='text-success mb-2 '>What you will Get</h2>
                <ul style={{listStyleType:"none"}} className = "text-success fw-bold">
                    <li>Can buy Coin or note of any country</li>
                    <li>Can exchange currency</li>
                    <li>Can collect historic currency</li>
                </ul>
            </div>
            <div>
                <img className='img-fluid' src = {currencyConcept} alt = "money"></img>
            </div>
            
        </div>
    );
};

export default Idea;