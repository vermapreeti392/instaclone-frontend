import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    
                    <Link to="/"> <img src={require('../../images/header-name.png')} alt="logo" /></Link>

                </div>

                <div className="camera-icon">
                    <Link to="addpost"><i className="fa-solid fa-camera camera"></i></Link>
                    
                </div>

            </div>
        </>
    )
}

export default Header;