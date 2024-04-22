import React, { useEffect } from 'react';
import PlayerCard from './PlayerCard';
import { useDispatch } from 'react-redux';
import { actionsBattle } from '../../store/battle/battleActions/slice';
import { actionsBattlePlayerInfo } from '../../store/battle/battlePlayersInfo/slice';
import { actionsBattleResult } from '../../store/battle/battleResult/slice'
import ActionButton from './ActionButton';
import useBattle from '../hooks/useBattle';


function Battle(props) {
    const dispatch = useDispatch()
    const {
        battleActionsState,
        battlePlayersInfoState,
        battleResultState,
        GetPlayerInfo1,
        GetPlayerInfo2,
        startBattle,
        resetBattle
    } = useBattle()





    return (
        <div className='main_wrapper'>
            <div className='cards_wrapper'>
                <PlayerCard
                    title={'Player 1'}
                    setPlayerName={actionsBattlePlayerInfo.setPlayerName1}
                    fetchPlayerInfo={GetPlayerInfo1}
                    playerInfo={battlePlayersInfoState.playerInfo1}
                    cleanPlayerInfo={actionsBattlePlayerInfo.cleanPlayerInfo1}
                    notExist={battlePlayersInfoState.notExist1}
                    cleanNotExist={actionsBattlePlayerInfo.cleanNotExist1}
                    startBattle={battleActionsState.startBattle}
                    reposInfo={battlePlayersInfoState.reposInfo1}
                    setReposStars={actionsBattleResult.setReposStars1}
                    reposStars={battleResultState.reposStars1}
                    totalScore={battleResultState.totalScore1}
                    setTotalScore={actionsBattleResult.setTotalScore1}
                    battleResult={battleResultState.battleResult.first}
                    setResult={actionsBattleResult.setResult1}
                    result={battleResultState.result1}
                />
                <PlayerCard
                    title={'Player 2'}
                    setPlayerName={actionsBattlePlayerInfo.setPlayerName2}
                    playerInfo={battlePlayersInfoState.playerInfo2}
                    fetchPlayerInfo={GetPlayerInfo2}
                    cleanPlayerInfo={actionsBattlePlayerInfo.cleanPlayerInfo2}
                    notExist={battlePlayersInfoState.notExist2}
                    cleanNotExist={actionsBattlePlayerInfo.cleanNotExist2}
                    startBattle={battleActionsState.startBattle}
                    reposInfo={battlePlayersInfoState.reposInfo2}
                    setReposStars={actionsBattleResult.setReposStars2}
                    reposStars={battleResultState.reposStars2}
                    totalScore={battleResultState.totalScore2}
                    setTotalScore={actionsBattleResult.setTotalScore2}
                    battleResult={battleResultState.battleResult.second}
                    setResult={actionsBattleResult.setResult2}
                    result={battleResultState.result2}
                />

            </div>
            <ActionButton
                showButton={battleActionsState.showButtonBattle}
                title={'Battle!'}
                fun={startBattle}
            />
            <ActionButton
                showButton={battleActionsState.showButtonReset}
                title={'Reset'}
                fun={resetBattle}
            />
        </div>
    );
}

export default Battle;