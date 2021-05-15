import React from 'react';
import { NavLink } from 'react-router-dom';

import { Link } from 'react-router-dom';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">

                <div classname="logo"></div>

            <nav>
                <ul className="list">
                    <li className="list-item">
                        <a className="link"><NavLink exact to="/" >home</NavLink></a>
                        <a className="link"><NavLink to="/favs" >favoritas</NavLink></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}