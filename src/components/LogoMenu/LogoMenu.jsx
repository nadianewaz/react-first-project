import React from 'react';
import "./LogoMenu.css";

const LogoMenu = () => {
    return (
        <>
         <div className="logo-menu mw">
            <div className="logo">
                <a href="#">
                    <img src="./img/logo.png" alt="" />
                </a>
            </div>

            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Premium Products</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            
         </div>




            
        </>
    );
};

export default LogoMenu;

