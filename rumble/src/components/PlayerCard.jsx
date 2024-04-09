
import React, { useEffect, useState } from 'react';
import PlayerName from './PlayerName';
import PlayerInfo from './PlayerInfo';
import service from './../services';


function PlayerCard({ title, playerInfo, setPlayerInfo, setReposInfo, reposInfo, startBattle, setTotalScore, battleResult, setDisabledPlayer, disabledPlayer }) {

    const [playerName, setPlayerName] = useState('');
    const [err, setErr] = useState('');

    const handleGetInfo = async (e) => {
        e.preventDefault();
        try {
            setErr('');
            const res = await service.get(playerName);
            res.message ? setErr('User not exist') : setPlayerInfo(res)

        } catch (err) {
            console.log(err);
        }

    };
    useEffect(() => {
        Object.keys(playerInfo).length && (async () => {
            const res = await service.getRepos(playerInfo.repos_url);
            setReposInfo(res);
        })();


    }, [startBattle]);
    useEffect(() => {
        setDisabledPlayer(playerName);

    }, [playerName]);
    useEffect(() => {
        setPlayerName('')
    }, [battleResult]);




    return (
        <div className='player_card'>
            {!Object.keys(playerInfo).length ?
                <PlayerName
                    title={title}
                    setPlayerName={setPlayerName}
                    handleGetInfo={handleGetInfo}
                    err={err}
                    playerName={playerName}
                    disabledPlayer={disabledPlayer}

                />
                :
                <PlayerInfo
                    playerInfo={playerInfo}
                    setPlayerInfo={setPlayerInfo}
                    reposInfo={reposInfo}
                    setTotalScore={setTotalScore}
                    startBattle={startBattle}
                    battleResult={battleResult}
                    setPlayerName={setPlayerName}
                />
            };


        </div>
    );
}

export default PlayerCard;