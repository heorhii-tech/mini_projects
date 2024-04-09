import React, { useEffect, useState } from 'react';

function PlayerInfo({ setPlayerName, playerInfo, setPlayerInfo, reposInfo, setTotalScore, startBattle, battleResult }) {
    const [reposStars, setReposStars] = useState(null);
    const [totalScores, setTotalScores] = useState(0);
    const [result, setResult] = useState(undefined);

    useEffect(() => {
        reposInfo.length &&
            reposInfo.map(item => {
                setReposStars((prev) => prev += item.stargazers_count)
            });


    }, [reposInfo]);
    useEffect(() => {

        setTotalScores(playerInfo.followers + reposStars);


    }, [reposStars]);
    useEffect(() => {

        setTotalScore(totalScores);

    }, [totalScores]);

    useEffect(() => {
        if (battleResult !== undefined) {
            battleResult ? setResult('Winner') : setResult('Loser')
        }


    }, [battleResult]);


    const handleResetInfo = (e) => {
        e.preventDefault();

        setPlayerInfo({});
        setPlayerName('')

    };

    return (

        <form onSubmit={handleResetInfo}>
            {result && <h3>{result}</h3>}
            <img src={playerInfo['avatar_url']} />
            <h4>{playerInfo.login}</h4>
            {startBattle ?
                <>
                    <h4>Followers: {playerInfo.followers}</h4>
                    <h4>Repos stars: {reposStars}</h4>
                    <h3>Total score: {totalScores}</h3>
                </>
                :
                null
            }
            {!startBattle && < button > Reset</button>}
        </form>

    );
}

export default (PlayerInfo);