import React from "react";
import PlayerSearch from "../Components/Ranking/PlayerSearch";
import WorldTopRanking from "../Components/Common/WorldTopRanking";
import TopFourPlayer from "../Components/Ranking/TopFourPlayer";

const Ranking = () => {
  return (
    <>
      <PlayerSearch />
      <WorldTopRanking />
      <TopFourPlayer />
    </>
  );
};

export default Ranking;
