import React, { useEffect, useState } from 'react';
import questions from '../questions/questions';

function Game({ setStatistic, statistic }) {



    const question = questions[statistic.step];

    const percentage = Math.round((statistic.step / questions.length) * 100);

    const onClickVariant = (index) => {

        setStatistic(prevState => ({

            step: (prevState.step + 1),



            points: index === questions[prevState.step].correct ? (prevState.points + 1) : prevState.points

        }))

    }






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