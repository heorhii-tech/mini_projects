import PlayerInfo from "./PlayerInfo";
import PlayerName from "./PlayerName";

function PlayerCard({
  result,
  setResult,
  battleResult,
  setTotalScore,
  totalScore,
  setReposStars,
  reposStars,
  reposInfo,
  startBattle,
  cleanNotExist,
  title,
  fetchPlayerInfo,
  playerInfo,
  setPlayerName,
  cleanPlayerInfo,
  notExist,
}) {
  return (
    <div>
      {!Object.keys(playerInfo).length ? (
        <PlayerName
          title={title}
          setPlayerName={setPlayerName}
          notExist={notExist}
          fetchPlayerInfo={fetchPlayerInfo}
        />
      ) : (
        <PlayerInfo
          playerInfo={playerInfo}
          setPlayerName={setPlayerName}
          cleanPlayerInfo={cleanPlayerInfo}
          cleanNotExist={cleanNotExist}
          startBattle={startBattle}
          reposInfo={reposInfo}
          setReposStars={setReposStars}
          reposStars={reposStars}
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          battleResult={battleResult}
          result={result}
          setResult={setResult}
        />
      )}
    </div>
  );
}

export default PlayerCard;
