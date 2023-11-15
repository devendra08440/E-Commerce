import React, { useState } from "react";
import './Navbar.css';
import logo_icon from '../Assets/app-logo.png';
import cart_icon from '../Assets/cart-logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo_icon} alt=""></img>
                <p>SHOPPER</p>
            </div>

            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration: 'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link to='/Men' style={{textDecoration: 'none'}}>Men</Link>{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link to='/Women' style={{textDecoration: 'none'}}>Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='/Kid' style={{textDecoration: 'none'}}>Kid</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            
            <div className="nav-login-cart">
                <Link to='/Login'><button>Login</button></Link>
                <Link to='/Cart'><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar;