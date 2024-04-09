import React, { useEffect, useState } from 'react';

import './../../src/styles.scss'

import PlayerCard from './PlayerCard';

import Button from './Button';



function Competition(props) {




    const [playerInfo1, setPlayerInfo1] = useState({});
    const [playerInfo2, setPlayerInfo2] = useState({});

    const [reposInfo1, setReposInfo1] = useState({});
    const [reposInfo2, setReposInfo2] = useState({});

    const [totalScore1, setTotalScore1] = useState();
    const [totalScore2, setTotalScore2] = useState();

    const [disabledPlayer1, setDisabledPlayer1] = useState('');
    const [disabledPlayer2, setDisabledPlayer2] = useState('');

    const [battleResult, setBattleResult] = useState({});

    const [startBattle, setStartBattle] = useState(false);

    const [showButtonBattle, setShowButtonBattle] = useState(false);
    const [showRersetButton, setShowResetButton] = useState(false);

    useEffect(() => {
        if (Object.keys(playerInfo1).length && Object.keys(playerInfo2).length) {
            setShowButtonBattle(true);
        } else {
            setShowButtonBattle(false);
        }
    }, [playerInfo1, playerInfo2]);




    useEffect(() => {


        startBattle && setBattleResult({
            first: totalScore1 >= totalScore2,
            second: totalScore2 >= totalScore1,
        })



    }, [totalScore1, totalScore2, showButtonBattle]);
    useEffect(() => {
        Object.keys(battleResult).length && setShowResetButton(true)


    }, [battleResult])

    const handleStartBattle = () => {

        setStartBattle(true);
        setShowButtonBattle(false);


    };
    const handleResetBattle = () => {

        setBattleResult({});
        setPlayerInfo1({});
        setPlayerInfo2({});
        setReposInfo1({});
        setReposInfo2({});
        setTotalScore1('');
        setTotalScore2('');
        setStartBattle(false)
        setShowResetButton(false);



    }







    return (
        <>
            <div className='wrapper'>
                <PlayerCard
                    title={'first'}
                    setPlayerInfo={setPlayerInfo1}
                    playerInfo={playerInfo1}
                    setReposInfo={setReposInfo1}
                    startBattle={startBattle}
                    reposInfo={reposInfo1}
                    totalScore={totalScore1}
                    setTotalScore={setTotalScore1}
                    battleResult={battleResult.first}
                    setDisabledPlayer={setDisabledPlayer1}
                    disabledPlayer={disabledPlayer2}




                />
                <PlayerCard
                    title={'second'}
                    setPlayerInfo={setPlayerInfo2}
                    playerInfo={playerInfo2}
                    setReposInfo={setReposInfo2}
                    startBattle={startBattle}
                    reposInfo={reposInfo2}
                    setTotalScore={setTotalScore2}
                    totalScore={totalScore2}
                    battleResult={battleResult.second}
                    setDisabledPlayer={setDisabledPlayer2}
                    disabledPlayer={disabledPlayer1}



                />




            </div>
            <Button
                fun={handleStartBattle}
                title={'Battle'}
                showButton={showButtonBattle}
            />

            <Button
                fun={handleResetBattle}
                title={"reset"}
                showButton={showRersetButton}
            />

        </>
    );
}

export default Competition;