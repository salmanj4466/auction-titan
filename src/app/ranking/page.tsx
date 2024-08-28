import React from "react";

import WorldTopRanking from "../Components/Common/WorldTopRanking";
import PlayerSearch from "../Components/ranking/PlayerSearch";
import TopFourPlayer from "../Components/ranking/TopFourPlayer";

const Ranking = () => {
  return (
    <>
      <div className="mobile-bg">
        <PlayerSearch />
        <WorldTopRanking />
        <TopFourPlayer />
      </div>
    </>
  );
};

export default Ranking;
