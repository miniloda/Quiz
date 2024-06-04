import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text = "", speed = 50, displayText}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (text) {
        setDisplayedText("");
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text[currentIndex]);
            currentIndex++;
            if (currentIndex === text.length-1) {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }
}, [text, speed]);

  return <div className = "details" >{displayText ? "" : displayedText}</div>;
};

export default TypingEffect;