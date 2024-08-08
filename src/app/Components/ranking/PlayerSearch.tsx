import { Input } from "antd";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const PlayerSearch = () => {
  return (
    <>
      <div className="ranking">
        <div className="container">
          <h1>Ranking</h1>
          <h2>Búsqueda de jugadores</h2>

          <div className="search-users">
            <div className="search">
              <FaMagnifyingGlass className="magnifier" />
              <Input placeholder="Juan" />
            </div>
            <div className="related-suggested">
              <p className="player-heading-related">Búsquedas recientes</p>
              <div className="player">
                <div className="player-details">
                  <div className="img"></div>
                  <div className="player-name">
                    <p>
                      <span>Juan</span> Garcea
                    </p>
                    <p>@JuanGarcea</p>
                  </div>
                </div>
                <div className="player-details">
                  <div className="img"></div>
                  <div className="player-name">
                    <p>Alejandro Lopez</p>
                    <p>@Alejajandro</p>
                  </div>
                </div>
              </div>

              <p className="player-heading-suggested">Sugerencias</p>
              <div className="player">
                <div className="player-details">
                  <div className="img"></div>
                  <div className="player-name">
                    <p>
                      <span>Juan</span> Garcea
                    </p>
                    <p>@JuanGarcea</p>
                  </div>
                </div>
                <div className="player-details">
                  <div className="img"></div>
                  <div className="player-name">
                    <p>
                      <span>Juan</span> Garcea
                    </p>
                    <p>@JuanGarcea</p>
                  </div>
                </div>
              </div>
              <h3>Ver todos los resultados</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerSearch;
