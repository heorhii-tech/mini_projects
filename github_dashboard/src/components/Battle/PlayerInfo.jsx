import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function PlayerInfo({
  result,
  setResult,
  battleResult,
  setTotalScore,
  totalScore,
  reposInfo,
  setReposStars,
  reposStars,
  startBattle,
  playerInfo,
  setPlayerName,
  cleanPlayerInfo,
  cleanNotExist,
}) {
  const dispatch = useDispatch();
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(setPlayerName(""));
    dispatch(cleanPlayerInfo({}));
    dispatch(cleanNotExist(""));
  };
  useEffect(() => {
    let count = reposStars + playerInfo.followers;
    dispatch(setTotalScore(count));
  }, [reposStars]);
  useEffect(() => {
    let count = 0;
    reposInfo.length &&
      reposInfo.map((item) => {
        count += item["stargazers_count"];
      });
    dispatch(setReposStars(count));
  }, [reposInfo]);
  useEffect(() => {
    if (battleResult !== undefined) {
      battleResult
        ? dispatch(setResult("Winner"))
        : dispatch(setResult("Loser"));
    }
  }, [battleResult]);

  return (
    <>
      {Object.keys(result).length ? (
        <h3 className={result === "Winner" ? "text-green-800" : "text-red-800"}>
          {result}
        </h3>
      ) : null}
      <form onSubmit={handleReset} className="playerInfo_form">
        <img src={playerInfo["avatar_url"]} />
        <h4>{playerInfo.login}</h4>
        {startBattle && (
          <>
            <h4>Followers: {playerInfo.followers}</h4>
            <h4>Repositories stars: {reposStars}</h4>
            <h4>Total scores: {totalScore}</h4>
          </>
        )}
        {!startBattle && <button> Reset</button>}
      </form>
    </>
  );
}

export default PlayerInfo;
