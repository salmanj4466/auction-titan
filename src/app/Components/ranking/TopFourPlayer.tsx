'use client'

import { Col, Row } from "antd";
import React from "react";
import { useMediaQuery } from 'react-responsive'

const TopFourPlayer = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  const data = [
    {
      positions: "#1",
      img: "/ranking/topRank.png",
      name: "Nombre",
      tag: "Ubicación",
      desc: "Nivel",
      points: "XXXX Puntos",
      style: {
        style: {
          background:
            "linear-gradient(180deg, rgba(248, 211, 126, 1) 0%, rgba(255, 178, 2, 1) 100%)",
        },
        textColor: {
          backgroundColor: "#FFB202",
        },
      },
    },
    {
      positions: "#2",
      img: "/ranking/rank2.png",
      name: "Nombre",
      tag: "Ubicación",
      desc: "Nivel",
      points: "XXXX Puntos",
      style: {
        style: {
          background:
            "linear-gradient(180deg, rgba(0, 41, 194, 1) 4%, rgba(87, 112, 208, 1) 100%)",
          height: "540px",
        },
        textColor: {
          backgroundColor: "#0029C2",
          top: "46px",
        },
      },
    },
    {
      positions: "#3",
      img: "/ranking/rank3.png",
      name: "Nombre",
      tag: "Ubicación",
      desc: "Nivel",
      points: "XXXX Puntos",
      style: {
        style: {
          background:
            "linear-gradient(180deg, rgba(229,163,244,1) 4%, rgba(223,84,255,1) 100%)",
          height: "460px",
        },
        textColor: {
          backgroundColor: "#DF54FF",
          top: "130px",
        },
      },
    },
    {
      positions: "#4",
      img: "/ranking/rank4.png",
      name: "Juan perez RAMIREZ",
      tag: "CDMX",
      desc: "Maestro",
      points: "3500 Puntos",
      style: {
        style: {
          background:
            "linear-gradient(360deg, rgba(123,60,215,1) 4%, rgba(78,22,159,1) 100%)",
          height: "380px",
        },
        textColor: {
          backgroundColor: "#4E169F",
          top: "208px",
        },
      },
    },
  ];

  //   table-data
  const tableData = [
    {
      id: 1,
      name: "Erik Garrido",
      location: "Puebla",
      points: "3,500",
      level: "Leyenda",
    },
    {
      id: 2,
      name: "Luis Andres",
      location: "Puebla",
      points: "3,488",
      level: "Pro player",
    },
    {
      id: 3,
      name: "Xavier Espejo",
      location: "CDMX",
      points: "3,304",
      level: "Maestro",
    },
    {
      id: 4,
      name: "Monserrat Muñiz",
      location: "Cuernavaca",
      points: "2,519",
      level: "Profesional",
    },
    {
      id: 5,
      name: "Alexandra Lopez",
      location: "CDMX",
      points: "1,049",
      level: "Jugador",
    },
    {
      id: 6,
      name: "Alvaro Quiros",
      location: "Puebla",
      points: "122",
      level: "Jugador",
    },
    {
      id: 7,
      name: "Cecilio Alba",
      location: "Puebla",
      points: "105",
      level: "Competidor",
    },
    {
      id: 8,
      name: "Fermin Alba",
      location: "Puebla",
      points: "87",
      level: "Amateur",
    },
    {
      id: 9,
      name: "Yolanda Cardenas",
      location: "CDMX",
      points: "70",
      level: "Principiante",
    },
    {
      id: 10,
      name: "Mara Toribio",
      location: "Puebla",
      points: "52",
      level: "Aficionado",
    },
    {
      id: 11,
      name: "Cintia Blazquez",
      location: "Puebla",
      points: "35",
      level: "Aprendiz",
    },
    {
      id: 12,
      name: "Gabriel Ribas",
      location: "CDMX",
      points: "22",
      level: "Aprendiz",
    },
    {
      id: 13,
      name: "Eduard Lloret",
      location: "Puebla",
      points: "17",
      level: "Explorador",
    },
    {
      id: 14,
      name: "Roger Otero",
      location: "CDMX",
      points: "8",
      level: "Explorador",
    },
  ];

  return (
    <>
      <div className="top-players">
        <div className="container">
          {/* <div className="head">
            <h2> Top 4 Último torneo </h2>
            <p>Conoce a nuestros ganadores del torneo del 24 de agosto.</p>
          </div>
          <Row gutter={[32, 16]} className="all-positions">
            {data.map((elm) => (
              <Col span={6}>
                <div className="content">
                  <img src={elm.img} alt="" />
                  <div className="player-details" style={elm.style?.style}>
                    <h1 style={elm.style.textColor}>{elm.positions}</h1>
                    <h3>{elm.name}</h3>
                    <div className="name-points">
                      <span>{elm.tag}</span>
                      <h6>{elm.desc}</h6>
                      <p>{elm.points}</p>
                    </div>
                    <div className="img">
                      <img src="/ranking/badge.png" alt="" />
                      <div className="stars">
                        <img src="/ranking/star.png" alt="" />
                        <img src="/ranking/star.png" alt="" />
                        <img src="/ranking/star.png" alt="" />
                        <img src="/ranking/star.png" alt="" />
                        <img src="/ranking/star.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row> */}

          {/* general-ranking  */}

          <div className="general-ranking">
            <h1>RANKING GENERAL</h1>


            {isMobile ? (
              <>
                <div className="mobile-leaderboard">
                  <table>
                    <tbody>
                      {tableData.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>
                            <div className="top">
                              <p>Erik Garrido</p>
                              <span>Puebla</span>
                            </div>
                            <div className="bottom">
                              <p>Nivel:Leyenda</p>
                              <p>3,500 puntos</p>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <>
                <div className="leaderboard">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Jugador</th>
                        <th>Ubicación</th>
                        <th>Puntos</th>
                        <th>Nivel</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.location}</td>
                          <td>{item.points}</td>
                          <td>{item.level}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFourPlayer;
