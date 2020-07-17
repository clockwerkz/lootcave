import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <ul className="navbar">
            <li><Link to="/" className="navbar-link">Loot Cave!</Link> </li>
            <li><Link to="/game" className="navbar-link">Play!</Link> </li>
        </ul>
    )
}


export default Nav;