import React, { useState, useEffect } from 'react';
import './reaction-time.css';

const ReactionTime = () => {
    const [style, setStyle] = useState({ backgroundColor: "green" });
    const [hasClicked, setHasClicked] = useState(false);
    const [lapse, setLapse] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const [prematureClick, setPrematureClick] = useState(false);

    const start = new Date();
    const randomNumber = Math.floor(Math.random() * (7000 - 2000 + 1)) + 2000;

    useEffect(() => {
        const id = setTimeout(() => {
            setStyle({ backgroundColor: "red" });
        }, randomNumber);
        setTimeoutId(id);
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    const handleClick = () => {
        if (!hasClicked) {
            const end = new Date();
            if (style.backgroundColor !== "red") {
                setPrematureClick(true);
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
            } else {
                setLapse(end - start);
            }
            setHasClicked(true);
        }
    };

    const handlePlayAgain = () => {
        setHasClicked(false);
        setStyle({ backgroundColor: "green" });
        setPrematureClick(false);
        const id = setTimeout(() => {
            setStyle({ backgroundColor: "red" });
        }, randomNumber);
        setTimeoutId(id);
    };

    return (
        <div className='res'>
            {hasClicked ? (
                <>
                    <h1 className='headings'>
                        {prematureClick ? "Clicked too soon!" : `Reaction time: ${lapse} milliseconds`}
                    </h1>
                    <button className="btn" onClick={handlePlayAgain}>Play Again</button>
                </>
            ) : (
                <>
                    <h1 className="headings">Click panel when color changes to Red</h1>
                    <div className='window' style={style} onClick={handleClick}></div>
                </>
            )}
        </div>
    );
};

export default ReactionTime;
