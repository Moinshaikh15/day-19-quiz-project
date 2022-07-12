import Option from './Option'
import Question from './Question'
import { useState } from 'react'
import Confetti from 'react-dom-confetti';
import { useEffect } from 'react';
import Timer from './Timer';

import { useNavigate } from "react-router-dom";


let interval;
let timeoutId;
let obj = {};
function Quiz() {

    const config = {
        angle: 90,
        spread: 90,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };


    let [selectedOption, setSelectedOption] = useState(null);
    let [active, setActive] = useState(false);
    let [no, setNo] = useState(0)
    let [width, setWidth] = useState(100)
    let [score, setScore] = useState(0)
    let navigate = useNavigate();


    let questionsArr = [
        {
            que: 'Which planet has the most moons? ',
            options: [{ option: 'Saturn', flag: true },
            { option: 'Jupiter', flag: false },
            { option: 'Uranus', flag: false },
            { option: 'Neptune', flag: false }]
        },
        {
            que: 'Which country has won the most FIFA World Cups?',
            options: [{ option: 'Gernamy', flag: false },
            { option: ' Brazil', flag: true },
            { option: 'Italy', flag: false },
            { option: 'Argentina', flag: false }]

        },
        {
            que: 'How many bones do we have in an ear?',
            options: [{ option: '3', flag: true },
            { option: '1', flag: false },
            { option: '2', flag: false },
            { option: '0', flag: false }]

        }
    ]

  

    function update(i, activeState) {
        setSelectedOption(i);
        setActive(activeState);
        clearInterval(interval);

        if (activeState) {
            setScore(score + 1)
        }


        obj[questionsArr[no].que] = questionsArr[no].options[i];
        obj[questionsArr[no].que]['qn'] = no;
        questionsArr[no].options.map((elem) => {
            if (elem.flag)
                obj[questionsArr[no].que]['corrAns'] = elem.option;
        })



        if (no === questionsArr.length - 1) {

            navigate('/Answer', { state: { obj1: obj, totalScore: score } })

        }



        setTimeout(() => {
            setSelectedOption(null)
            setNo(no + 1);
            setActive(false)
        }, 1000);



    }


    useEffect(() => {

        interval = setInterval(() => {
            setWidth((w) => w - 2);

        }, 100);

        timeoutId = setTimeout(() => {
            setNo(no + 1);
        }, 5100);

        return () => {
            clearInterval(interval);
            clearTimeout(timeoutId);
            setWidth(100);
        };


    }, [no])


    return (
        <div className='Que-container'>

            <h1>Quiz</h1>
            <p>Score: {score}</p>
            <Question text={questionsArr[no].que} />

            <div className='buttons'>
                {questionsArr[no].options.map((el, i) => <Option bgColor={selectedOption === i ? (el.flag === true ? '#8ac926' : '#d90429') : null} ans={el.option} handleClick={update} indx={i} activeState={el.flag === true ? true : false} />)}
            </div>
            <Confetti active={active} config={config} />
            <Timer width={width} bgColor={width < 50 ? (width < 25 ? '#d62828' : '#f77f00') : '#8ac926'} />


        </div>

    )
}
export default Quiz