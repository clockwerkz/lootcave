import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import largestCollection from '../utilities/findLargest';


const GameBoard = ({ gameArray = [], resetGame }) => {
    const [ selected, setSelected ] = useState({});
    const [ gameOver, setGameOver ] = useState("");
    const [playerTotal, setPlayerTotal ] = useState(0);
    const [ correctTotal, setCorrectTotal ] = useState(0);

    const handleClick = (index) => {
        if (!selected[index]) {
            const newSelected = {...selected};
            newSelected[index] = 'selected';
            newSelected[index - 1 ] = 'disabled';
            newSelected[index + 1] = 'disabled';
            setSelected(newSelected);
        }
    }

    const revealAnswers = (answers) => {
        setSelected({});
        let ptr = 0;
        let answerSelected = {};
        for (let idx=0; idx<gameArray.length; idx++) {
            if (gameArray[idx] === answers[ptr]) {
                answerSelected[idx] = 'selected';
                ptr++;
            } else {
                answerSelected[idx] = 'disabled';
            }
        }
        setSelected(answerSelected);
    }

    const handleGameOver = (selection) => {
        const answerKey = largestCollection(gameArray);
        setCorrectTotal(answerKey.reduce((acc, el)=> acc+=el,0));
        if (selection === "Check") {
            let total = 0;
            for (const key in selected) {
                if (selected[key] === "selected") {
                    console.log(key);
                    total += gameArray[parseInt(key)];
                }
            }
            setPlayerTotal(total);
        } else {
            revealAnswers(answerKey);
        }        
        setGameOver(selection);
    }
    if (gameOver==="") {
        return (
            <div>
                <h2>Game Board</h2>
                <div className="game-board">
                    {gameArray.map((cave, index)=>(
                        <p key={index} className={selected[index] ? "cave "+selected[index] : "cave"} onClick={()=>handleClick(index)}>
                            {cave}
                        </p>
                    ))}
                </div>
                <div className="game-btns">
                    <button onClick={()=>setSelected({})}>Reset</button>
                    <button onClick={()=>handleGameOver("Check")}>Check Yer Loot!</button>
                    <button onClick={()=>handleGameOver("Reveal")}>I give up! What's the answer??</button>
                </div>
            </div>
        )
    } else if (gameOver ==="Check"){
        return (
            <div>
                {playerTotal === correctTotal ? (
                    <div>
                        <h2>You Win!</h2>
                        <h2>You managed to steal {playerTotal} coins of GOLD!</h2>
                    </div>
                ):(
                    <div>
                        <h2>Oh no, looks like you short changed yourself {correctTotal - playerTotal} in gold!</h2>
                        <h2>Your gold count: {playerTotal}</h2>
                        <h2>Best score possible: {correctTotal}</h2>
                    </div>
                )}
                <div className="game-board">
                    {gameArray.map((cave, index)=>(
                        <p key={index} className={selected[index] ? "cave "+selected[index] : "cave"} onClick={()=>handleClick(index)}>
                            {cave}
                        </p>
                    ))}
                </div>
                <button onClick={resetGame}>Start Over!</button>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Better Luck next time!</h2>
                <h2>Total possible score: {correctTotal}</h2>
                <div className="game-board">
                    {gameArray.map((cave, index)=>(
                        <p key={index} className={selected[index] ? "cave "+selected[index] : "cave"} onClick={()=>handleClick(index)}>
                            {cave}
                        </p>
                    ))}
                </div>
                <button onClick={resetGame}>Start Over!</button>
            </div>
        )
    }
}

export default GameBoard;