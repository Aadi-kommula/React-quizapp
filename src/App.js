import React, { useState } from 'react'
import './App.css'

function App() {
  const question = [
    "What is React?",
    "Which command is used to create a new React application?",
    "What is the correct syntax to create a functional component in React?",
    "What is the purpose of the useState hook in React?",
    "Which file contains the root component in a default React application?",
    "What does JSX stand for?",
    "How do you pass data to a component in React?",
    "Which method is used to update the state in a class component?",
    "What is the virtual DOM in React?",
    "What is the purpose of the useEffect hook in React?"
];
const options = [
    {
        optionvalue: ["A library for building UI", "A database", "A server-side framework", "A CSS framework"]
    },
    {
        optionvalue: ["npm create-react-app", "npm new react-app", "npx create-react-app", "react new app"]
    },
    {
        optionvalue: ["function Component() {}", "Component() => {}", "React.component()", "function() => {}"]
    },
    {
        optionvalue: ["To fetch data", "To manage side effects", "To manage state in functional components", "To manage routes"]
    },
    {
        optionvalue: ["App.js", "index.js", "root.js", "main.js"]
    },
    {
        optionvalue: ["JavaScript Syntax", "JavaScript XML", "Java Syntax Extension", "JavaScript Extensions"]
    },
    {
        optionvalue: ["Using props", "Using states", "Using hooks", "Using events"]
    },
    {
        optionvalue: ["setState()", "updateState()", "changeState()", "modifyState()"]
    },
    {
        optionvalue: ["A copy of the real DOM", "An optimized version of the DOM", "A new HTML file", "A React component"]
    },
    {
        optionvalue: ["To handle state", "To manage side effects", "To render UI", "To update the DOM"]
    }
];

const actualans = [
    {
        ans: [
            "A library for building UI",
            "npx create-react-app",
            "function Component() {}",
            "To manage state in functional components",
            "index.js",
            "JavaScript XML",
            "Using props",
            "setState()",
            "A copy of the real DOM",
            "To manage side effects"
        ]
    }
];


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
                    <h2>Question No: {counter + 1} / {question.length}</h2>
                    <h2>{question[counter]}</h2>
                    <div id="option">
                        {options[counter].optionvalue.map((x, index) => (
                            <li  key={index} id={index} onClick={() => Change(index)}>
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