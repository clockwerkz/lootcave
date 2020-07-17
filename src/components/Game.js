import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { easyMode, mediumMode, hardMode } from '../utilities/gameChoices';
import GameBoard from './GameBoard';


const Game = (props) => {

    const [levelSelected, setLevelSelected] = useState("");
    const [options, setOptions] = useState({}); 
    const [gameArray, setGameArray] = useState([]);
    const [customArray, setCustomArray] = useState("");
    const levelChoice = (level) => {
        switch (level) {
            case "Easy":
                setGameArray(easyMode());
                setLevelSelected("Easy");
                break;
            case "Medium":
                setGameArray(mediumMode());
                setLevelSelected("Medium");
                break;
            case "Hard":
                setGameArray(hardMode());
                setLevelSelected("Hard");
                break;
            case "Custom":
                setLevelSelected("Custom");
                break;
            default: 
                break;
        }
        return '';
    }

    const resetGame = () => {
        setLevelSelected('');
        setGameArray([]);
    }

    const handleSubmitButton = () => {
        if (customArray !== '') {
            const arr = customArray.match(/-?\d+/g); 
            const calculateVals = arr.slice(0,100).map(el => {
                let num = parseInt(el);
                return num < 1 ? 1 : num > 100 ? 100 : num;
            });
            setGameArray(calculateVals);
        }
    };

    if (!levelSelected) {
        return (
            <div>
                <h2>Choose your Game Difficulty</h2>
                <div className="game-options">
                    <button onClick={()=>levelChoice("Easy")}>Easy</button>
                    <button onClick={()=>levelChoice("Medium")}>Medium</button>
                    <button onClick={()=>levelChoice("Hard")}>Hard</button>
                    <button onClick={()=>levelChoice("Custom")}>Custom</button>
                </div>
            </div>
        )
    } else if (levelSelected==="Custom" && gameArray.length===0) {
        return (
            <div>
                <h2>Set your custom options</h2>
                <input type="text" onChange={(e)=>{setCustomArray(e.target.value)}} value={customArray} />
                <button onClick={handleSubmitButton}>Start Game</button>
            </div>
        )
    } else if (gameArray.length > 0){
        return (
            <GameBoard gameArray={gameArray} resetGame={resetGame}/>
        )
    }
    
}


export default Game;