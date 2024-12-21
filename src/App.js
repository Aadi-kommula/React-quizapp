import React, { useState } from 'react'
import './App.css'

function App() {
    const question = [
        "What is the capital of India?",
        "Who is the PM of India?",
        "Who is president of India?",
        "What is the capital of Andhra Pradesh?"
    ]

    const options = [
        {
            optionvalue: ["New Delhi", "Hyderabad", "Banglore", "Chennai"]
        },
        {
            optionvalue: ["Revanth Reddy", "Narendra Modi", "Amit Shah", "Rahul Gandhi"]
        },
        {
            optionvalue: ["Sonia Gandhi", "Narendra Modi", "Pawan kalyan", "Draupadi Murmu"]
        },
        {
            optionvalue: ["Warangal", "Hyderabad", "Amrawati", "None of the Above"]
        }
    ]

    const actualans = [
        {
            ans: ["New Delhi", "Narendra Modi", "Draupadi Murmu", "Amrawati"]
        }
    ]

    const [counter, setCounter] = useState(0)
    const [score, setScore] = useState(0)
    const [isCardVisible, setCardVisible] = useState(true) 
    const [isScoreVisible, setSCoreVisible] = useState(false) 

    function CheckAns(v) {
        if (v === actualans[0].ans[counter]) {
            setScore(score + 1)
            console.log(score)
        }
    }

    function Change(index) {
        let v = document.getElementById(index).innerHTML
        console.log(v)
        CheckAns(v)

        if (counter < question.length - 1) {
            setCounter(counter + 1)
        } else {
            setCardVisible(false)
            setSCoreVisible(true)
        }
    }

    return (
        <div className="container">
            <h1>My Quiz Application</h1>
            {isCardVisible  && ( 
                <div className="card" id="card">
                    <h2>Question No: {counter + 1} / 4</h2>
                    <h2>{question[counter]}</h2>
                    <div id="option">
                        {options[counter].optionvalue.map((x, index) => (
                            <li key={index} id={index} onClick={() => Change(index)}>
                                {x}
                            </li>
                        ))}
                    </div>
                    <br />
                </div>
            )}
            {isScoreVisible && (
            <p id='score'> Your Score: {score} out of {question.length}</p>)}
        </div>
    )
}

export default App
