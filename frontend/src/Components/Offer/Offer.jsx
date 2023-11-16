import React from "react";
import './Offer.css';
import exclusive_img from '../Assets/exclusive.png'

const Offer = () => {
    return (
        <div className="offer">
            <div className="offer-left">
                <h1>EXCLUSIVE</h1>
                <h1>OFFERS FOR YOU</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS Y</p>
                <button>Check Now</button>
            </div>
            <div className="offer-right">
                <img src={exclusive_img} alt="" />
            </div>
        </div>
    )
}

export default Offer;