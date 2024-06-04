import React, { useState, useEffect } from "react";
import "./Quiz.css";
import Questions from "./Components/Questions";
import Choices from "./Components/Choices";
import TypingEffect from "./Components/TypingEffect";

export default function QuizApp() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [id, setId] = useState('');
    const [correctId, setCorrectId] = useState('');
    const [disableButton, setButton] = useState(false);
    const [details, setDetails] = useState('');
    const [displayText, setDisplayText] = useState(false);
    const [hideButton,sethideButton] = useState(true);
    
    useEffect(() => {
        
        setCorrectAnswer(quiz.questions[questionIndex].answer);
        setCorrectId("c" + quiz.questions[questionIndex].index);
        setButton(false);

    }, [questionIndex]);

    const handleNext = () => {
        const element = document.getElementById(id);
        const correctElement = document.getElementById(correctId);
        if (element) {
            element.classList.remove("correct-button");
            element.classList.remove("wrong-button");
        }
        if (correctElement) {
            correctElement.classList.remove("correct-button");
        }
        setDetails('');
        setDisplayText(true)
        setQuestionIndex((prevIndex) => Math.min(prevIndex + 1, quiz.questions.length - 1));
    }

    const handleAnswerCheck = (chosenAnswer, id) => {
        setId(id);
        setButton(true);
        const element = document.getElementById(id);
        const correctElement = document.getElementById(correctId);
        if (chosenAnswer === correctAnswer) {
            if (element) element.classList.add("correct-button");
        } else {
            if (element) element.classList.add("wrong-button");
            if (correctElement) correctElement.classList.add("correct-button");
        }
        setDetails(quiz.questions[questionIndex].details);
        setDisplayText(false)
        if (questionIndex === quiz.questions.length - 1){
            const element = document.getElementById("next-button")
            element.textContent = "Finish Quiz"
        }
    }

    return (
        <div>
            <h1>Question No. {questionIndex + 1}</h1>
        
        <div className="Quiz">
            
            <Questions question={quiz.questions[questionIndex]} />
            <Choices question={quiz.questions[questionIndex]} onAnswerClick={handleAnswerCheck} isDisabled={disableButton} />
            <TypingEffect text={details} speed={20} displayText = {displayText}/>
            <button onClick={handleNext} id = "next-button">
                Next
            </button>
        </div>
        </div>
    );
}

const quiz = {
    questions: [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
            index: 0,
            correctChoice: "Paris",
            details: "Paris is the capital city of France, situated on the River Seine. It's renowned for its art, fashion, gastronomy, and culture. The city is home to numerous iconic landmarks, including the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum, which houses thousands of works of art, including the Mona Lisa. Paris is also known for its café culture and historical districts like Montmartre, as well as being a global center for art and philosophy."
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
            index: 1,
            correctChoice: "Mars",
            details: "Mars, often referred to as the Red Planet, is the fourth planet from the Sun. It is named after the Roman god of war due to its reddish appearance, which is visible even to the naked eye. This red coloration is due to iron oxide, or rust, on its surface. Mars has the largest volcano in the solar system, Olympus Mons, and the deepest canyon, Valles Marineris. It has polar ice caps similar to Earth and has been a primary target for exploration in the search for signs of past or present life."
        },
        {
            question: "What is the largest ocean on Earth?",
            choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean",
            index: 3,
            correctChoice: "Pacific Ocean",
            details: "The Pacific Ocean is the largest and deepest ocean on Earth, covering more than 63 million square miles and containing more than half of the free water on Earth. It extends from the Arctic Ocean in the north to the Southern Ocean in the south, bounded by Asia and Australia in the west and the Americas in the east. The Pacific Ocean is home to the Mariana Trench, the deepest oceanic trench, which reaches a depth of about 36,000 feet. Its vast expanse includes numerous islands and diverse marine ecosystems."
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
            answer: "Harper Lee",
            index: 0,
            correctChoice: "Harper Lee",
            details: "'To Kill a Mockingbird' is a novel written by Harper Lee, published in 1960. The novel is widely regarded as a masterpiece of American literature. It deals with serious issues such as racial injustice and moral growth. The story is set in the 1930s in the fictional town of Maycomb, Alabama, and is narrated by a young girl named Scout Finch. The book addresses the serious issues of rape and racial inequality but is also noted for its warmth and humor. 'To Kill a Mockingbird' won the Pulitzer Prize for Fiction in 1961 and has been translated into over 40 languages."
        },
        {
            question: "What is the chemical symbol for gold?",
            choices: ["Au", "Ag", "Fe", "Hg"],
            answer: "Au",
            index: 0,
            correctChoice: "Au",
            details: "The chemical symbol for gold is Au, derived from the Latin word 'aurum,' which means 'shining dawn.' Gold is a highly sought-after precious metal, known for its bright yellow color and resistance to corrosion. It has been used for coinage, jewelry, and other arts throughout recorded history. In modern times, gold is also used in electronics and dentistry due to its excellent conductivity and malleability. Its rarity and aesthetic qualities make it a symbol of wealth and prosperity."
        }
    ]
};