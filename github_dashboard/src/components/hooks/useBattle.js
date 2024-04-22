
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionsBattle } from '../../store/battle/battleActions/slice';
import { actionsBattlePlayerInfo } from '../../store/battle/battlePlayersInfo/slice';
import { actionsBattleResult } from '../../store/battle/battleResult/slice'
import thunksPlayerInfo from '../../store/battle/battlePlayersInfo/thunks';



export default function useBattle() {
    const dispatch = useDispatch()
    const { ...battleActionsState } = useSelector((state) => state.battleActions)
    const { ...battlePlayersInfoState } = useSelector((state) => state.battlePlayersInfo)
    const { ...battleResultState } = useSelector((state) => state.battleResult);
    const GetPlayerInfo1 = () => {
        dispatch(thunksPlayerInfo.fetchPlayerInfo1(battlePlayersInfoState.playerName1))
    };
    const GetPlayerInfo2 = () => {
        dispatch(thunksPlayerInfo.fetchPlayerInfo2(battlePlayersInfoState.playerName2))
    };
    const startBattle = () => {
        dispatch(thunksPlayerInfo.fetchRepoInfo1(battlePlayersInfoState.playerInfo1['repos_url']));
        dispatch(thunksPlayerInfo.fetchRepoInfo2(battlePlayersInfoState.playerInfo2['repos_url']));
        dispatch(actionsBattle.setStartBattle(true));
        dispatch(actionsBattle.setShowButtonBatle(false));
        dispatch(actionsBattle.setShowButtonReset(true));
    };
    const resetBattle = () => {
        dispatch(actionsBattle.setStartBattle(false));
        dispatch(actionsBattle.setShowButtonReset(false));
        dispatch(actionsBattlePlayerInfo.setPlayerName1(''))
        dispatch(actionsBattlePlayerInfo.setPlayerName2(''))
        dispatch(actionsBattleResult.setReposStars1(0))
        dispatch(actionsBattleResult.setReposStars2(0))
        dispatch(actionsBattle.setStartBattle(false))
        dispatch(actionsBattleResult.setResult1(0))
        dispatch(actionsBattleResult.setResult2(0))
        dispatch(actionsBattlePlayerInfo.cleanNotExist1(''))
        dispatch(actionsBattlePlayerInfo.cleanNotExist2(''))
        dispatch(actionsBattlePlayerInfo.cleanPlayerInfo1({}))
        dispatch(actionsBattlePlayerInfo.cleanPlayerInfo2({}))
        dispatch(actionsBattleResult.setTotalScore1(0))
        dispatch(actionsBattleResult.setTotalScore2(0))
        dispatch(actionsBattlePlayerInfo.cleanReposInfo1({}))
        dispatch(actionsBattlePlayerInfo.cleanReposInfo2({}))
        dispatch(actionsBattle.setShowButtonBatle(false))
        dispatch(actionsBattleResult.setBattleResult({}))

    };
    useEffect(() => {
        if (Object.keys(battlePlayersInfoState.playerInfo1).length && Object.keys(battlePlayersInfoState.playerInfo2).length) dispatch(actionsBattle.setShowButtonBatle(true))
    }, [battlePlayersInfoState.playerInfo1, battlePlayersInfoState.playerInfo2]);
    useEffect(() => {
        battleActionsState.showButtonReset && dispatch(actionsBattle.setShowButtonBatle(false))
    }, [battleActionsState.showButtonReset])
    useEffect(() => {
        const result = {
            first: battleResultState.totalScore1 > battleResultState.totalScore2,
            second: battleResultState.totalScore2 > battleResultState.totalScore1
        }
        battleActionsState.startBattle && dispatch(actionsBattleResult.setBattleResult(result))
    }, [battleResultState.totalScore1, battleResultState.totalScore2, battleActionsState.startBattle])

    return { battleActionsState, battlePlayersInfoState, battleResultState, GetPlayerInfo1, GetPlayerInfo2, startBattle, resetBattle }
}
