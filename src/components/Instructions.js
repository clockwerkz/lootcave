import React from 'react';
import { Link } from 'react-router-dom';

const Instructions = (props) => {
    return (
        <div className="instructions">
            <div>
                <h1>How to Play</h1>
                <p>You're Cody Jones, legendary Plunderer and Raider of Pirate Treasure. You've recently discovered the secret Lair of the evil Pirate Rohan. The Dastardly pirate has hidden his gold stash a series of caves underneath the island.</p>
                <p>Your Mission: Take as much of the gold as you can! <span>Clicking</span> on a cave will loot it, and add the gold to your total collected</p>
                <h2>But BEWARE!</h2>
                <p>The pirates have booby trapped the caves! Selecting and looting a cave <span>will flood the adjacent caves with water</span>. So choose wisely, for you cannot loot a flooded cave!</p>
                <h2>Four Different Modes of Play!</h2>
                <p>Each mode offers a set number of caves, with a capped gold amount per each cave.</p>
                <p><span>Easy:</span> 10 Caves, with gold ranging from 1 - 10 dubloons</p>
                <p><span>Medium:</span> 20 Caves, with gold ranging from 1 - 20 dubloons</p>
                <p><span>Hard:</span> 40 Caves, with gold ranging from 1 - 50 dubloons</p>
                <p><span>Custom:</span> You construct the level! Enter up to 100 numbers, with any value from 1-400!</p>
            </div>
            <div>
                <Link to="/game">Start the Game</Link>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    )
}


export default Instructions;