import React from 'react';
import { Link } from 'react-router-dom';

const Landing = (props) => {
    return (
        <div className="landing">
            <h1>Welcome to the Loot Cave!</h1>
            <div className="links">
                <Link to="/instructions" className="landing-link">How To Play</Link>
                <Link to="/game" className="landing-link">Play!</Link>
            </div>
        </div>
    )
}


export default Landing;