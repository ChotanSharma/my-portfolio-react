import React from 'react';
import "./menus.css";

function Menus ({menusOpen, setMenusOpen})  {
    return (
        <div className={"menus " + (menusOpen && "active")}>
            <ul>
                <li onClick={() => setMenusOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenusOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={() => setMenusOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenusOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
    
}

export default Menus;
