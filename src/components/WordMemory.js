import englishWords from "../Data/words";
import { useState } from "react";
import './word-memory.css';

const WordMemory = () => {
    const [lives, setLives] = useState(3);
    const [score, setScore] = useState(0);
    const [arr, setArr] = useState(new Set());
    const [ind, setInd] = useState(Math.floor(Math.random() * englishWords.length));

    const getRandomIndex = (set) => {
        const setSize = set.size;
        const randomIdx = Math.floor(Math.random() * setSize);
        let i = 0;
        for (let value of set) {
            if (i === randomIdx) return value;
            i++;
        }
    }

    const handleClick = (e) => {
        setInd((prevInd) => {
            const newSet = new Set(arr);
            if (e.target.id === "seen") {
                if (arr.has(prevInd)) {
                    setScore(prevScore => prevScore + 1);
                } else {
                    setLives(prevLives => prevLives - 1);
                }
            } else {
                if (arr.has(prevInd)) {
                    setLives(prevLives => prevLives - 1);
                } else {
                    setScore(prevScore => prevScore + 1);
                }
            }
            newSet.add(prevInd);
            setArr(newSet);

            // 20% chance to get an index from the arr set
            if (Math.random() < 0.2 && arr.size > 0) {
                return getRandomIndex(arr);
            } else {
                return Math.floor(Math.random() * englishWords.length);
            }
        });
    };

    const handlePlayAgain = () => {
        setLives(3);
        setScore(0);
        setArr(new Set());
        setInd(Math.floor(Math.random() * englishWords.length));
    };

    return (
        <div className="panel">
            <div className="score-display">
                <h1>Lives : {lives}</h1>
                <h1>Score : {score}</h1>
            </div>
            {lives === 0 ? (
                <button className="btn word-btn" onClick={handlePlayAgain} id="play">Play Again</button>
            ) : (
                <>
                    <span className="word">{englishWords[ind]}</span>
                    <div>
                        <button className="btn word-btn" onClick={handleClick} id="seen">Seen</button>
                        <button className="btn word-btn" onClick={handleClick} id="new">New</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default WordMemory;
