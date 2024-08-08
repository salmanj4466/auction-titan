import React from "react";
import PlayerSearch from "../Components/ranking/PlayerSearch";
import WorldTopRanking from "../Components/Common/WorldTopRanking";
import TopFourPlayer from "../Components/ranking/TopFourPlayer";

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
