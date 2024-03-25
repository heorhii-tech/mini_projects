import React, { useEffect, useState } from 'react';
import questions from '../questions/questions';

function Game({ step, setStep, liftingPoints }) {


    const [points, setPoints] = useState([]);
    const question = questions[step];

    const percentage = Math.round((step / questions.length) * 100);

    const onClickVariant = (answerIndex) => {

        setStep(step + 1)

        answerIndex === question.correct && setPoints((prev) => [...prev, answerIndex]);
        liftingPoints(points)


    };
    useEffect(() => {
        liftingPoints(points)

    }, [points])





    return (


        <>


            <div className="progress">
                <div style={{ width: percentage + '%' }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((item, index) => {
                    return <li key={index} onClick={() => onClickVariant(index)} >{item}</li>
                })}
            </ul>
        </>

    );
}

export default Game;