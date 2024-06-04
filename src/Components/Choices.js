import "../CSS/Choices.css"
import React from "react"

export default function Choices({question, onAnswerClick, isDisabled}){
    const handleClick = (chosenAnswer, id)=>{
        onAnswerClick(chosenAnswer, id)
    }
    return(
        <div className="Choices">
            <button className="choice-button" onClick = {()=>handleClick( question.choices[0], "c0")} id="c0" disabled={isDisabled}>
                {question.choices[0]}
            </button>
            <button className="choice-button" onClick = {()=>handleClick(question.choices[1], "c1")} id="c1" disabled={isDisabled}>
                {question.choices[1]}

            </button>
            <button className="choice-button" onClick = {()=>handleClick(question.choices[2], "c2")} id="c2" disabled={isDisabled}>
                {question.choices[2]}
            </button>
            <button className="choice-button" onClick = {()=>handleClick(question.choices[3], "c3")} id="c3" disabled={isDisabled}>
                {question.choices[3]}
            </button>
        </div>
    )

}