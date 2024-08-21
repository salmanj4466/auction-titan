"use client";

import { Col, Row } from "antd";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";

const WorldTopRanking = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 968px)" });
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {isTabletOrMobile ? (
        <>
          <div className="top-ranking-mobile">
            <h2> Top mundial </h2>
            <Carousel responsive={responsive} showDots={true}>
              <div className="mob-profile">
                <div className="serial-no">
                  <h2>#</h2>
                  <h2>1</h2>
                </div>
                <div className="img-box">
                  <img src="/ranking/ranking1.png" alt="" />
                </div>
                <div className="person-detail">
                  <h3>Juan perez Ozuna</h3>
                  <div className="profile-details">
                    <div className="left">
                      <p>Cholula</p>
                      <h5>Leyenda</h5>
                      <h6>3500 puntos</h6>
                    </div>
                    <div className="right">
                      <img
                        src="/ranking/badge.png"
                        alt=""
                        className="badge-img"
                      />
                      <div className="stars">
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mob-profile"
                style={{ backgroundColor: "#df54ff" }}
              >
                <div
                  className="serial-no"
                  style={{ backgroundColor: "#df54ff" }}
                >
                  <h2>#</h2>
                  <h2>2</h2>
                </div>
                <div className="img-box">
                  <img src="/ranking/ranking2.png" alt="" />
                </div>
                <div className="person-detail">
                  <h3>aRANZA pEREZ sOSA</h3>
                  <div className="profile-details">
                    <div className="left">
                      <p>CDMX</p>
                      <h5>Pro Player</h5>
                      <h6>3488 puntos</h6>
                    </div>
                    <div className="right">
                      <img
                        src="/ranking/badge.png"
                        alt=""
                        className="badge-img"
                      />
                      <div className="stars">
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mob-profile"
                style={{ backgroundColor: "#4e169f" }}
              >
                <div
                  className="serial-no"
                  style={{ backgroundColor: "#4e169f" }}
                >
                  <h2>#</h2>
                  <h2>3</h2>
                </div>
                <div className="img-box">
                  <img src="/ranking/ranking3.png" alt="" />
                </div>
                <div className="person-detail">
                  <h3>Nombre</h3>
                  <div className="profile-details">
                    <div className="left">
                      <p>Ubicación</p>
                      <h5>Nivel</h5>
                      <h6>XXXX puntos</h6>
                    </div>
                    <div className="right">
                      <img
                        src="/ranking/badge.png"
                        alt=""
                        className="badge-img"
                      />
                      <div className="stars">
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mob-profile"
                style={{ backgroundColor: "#0029c2" }}
              >
                <div
                  className="serial-no"
                  style={{ backgroundColor: "#0029c2" }}
                >
                  <h2>#</h2>
                  <h2>4</h2>
                </div>
                <div className="img-box">
                  <img src="/ranking/ranking4.png" alt="" />
                </div>
                <div className="person-detail">
                  <h3>Nombre</h3>
                  <div className="profile-details">
                    <div className="left">
                      <p>Ubicación</p>
                      <h5>Nivel</h5>
                      <h6>XXXX puntos</h6>
                    </div>
                    <div className="right">
                      <img
                        src="/ranking/badge.png"
                        alt=""
                        className="badge-img"
                      />
                      <div className="stars">
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                        <img src="/ranking/star.png" alt="" className="star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
            <Link href="" className="btn-outline-normal">
              Visita el ranking
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="top-ranking">
            <div className="container">
              <h2> Top mundial </h2>
              <div className="ranking-details">
                <Row gutter={[40, 16]}>
                  <Col span={8}>
                    <div className="profile">
                      <div className="serial-no">
                        <h2>#</h2>
                        <h2>1</h2>
                      </div>
                      <div className="img-box">
                        <img src="/ranking/ranking1.png" alt="" />
                      </div>
                      <div className="person-detail">
                        <h3>
                          Juan perez <br />
                          Ozuna
                        </h3>
                        <p>Cholula</p>
                        <h5>Leyenda</h5>
                        <h6>3500 puntos</h6>
                        <img
                          src="/ranking/badge.png"
                          alt=""
                          className="badge-img"
                        />
                        <div className="stars">
                          <img
                            src="/ranking/star.png"
                            alt=""
                            className="star"
                          />
                          <img
                            src="/ranking/star.png"
                            alt=""
                            className="star"
                          />
                          <img
                            src="/ranking/star.png"
                            alt=""
                            className="star"
                          />
                          <img
                            src="/ranking/star.png"
                            alt=""
                            className="star"
                          />
                          <img
                            src="/ranking/star.png"
                            alt=""
                            className="star"
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col span={16} className="rankings-card">
                    <div
                      className="player-card"
                      style={{ backgroundColor: "#df54ff" }}
                    >
                      <div className="player-name">
                        <h3>aRANZA pEREZ sOSA</h3>
                      </div>
                      <div className="serial-no">
                        <h2>#</h2>
                        <h2>2</h2>
                      </div>
                      <div className="user-profile">
                        <img src="/ranking/ranking2.png" alt="" />
                      </div>
                      <div className="player-info">
                        <h3> CDMX </h3>
                        <h3> Pro Player </h3>
                        <h3> 3488 puntos </h3>
                      </div>
                      <div className="ratings">
                        <img
                          src="/ranking/badge.png"
                          alt=""
                          className="badge-img"
                        />
                        <div className="stars">
                          <img src="/ranking/star.png" alt="" />
                          <img src="/ranking/star.png" alt="" />
                          <img src="/ranking/star.png" alt="" />
                          <img src="/ranking/star.png" alt="" />
                          <img src="/ranking/star.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="player-card mid"
                      style={{ backgroundColor: "#4e169f" }}
                    >
                      <div className="player-name">
                        <h3>Nombre</h3>
                      </div>
                      <div className="serial-no">
                        <h2>#</h2>
                        <h2>3</h2>
                      </div>
                      <div className="user-profile">
                        <img src="/ranking/ranking3.png" alt="" />
                      </div>
                      <div className="player-info">
                        <h3> Ubicación </h3>
                        <h3> Nivel </h3>
                        <h3> XXXX puntos </h3>
                      </div>
                      <div className="ratings">
                        <img
                          src="/ranking/badge.png"
                          alt=""
                          className="badge-img"
                        />
                        <div className="stars">
                          <img src="/ranking/star.png" alt="" />
                          <img src="/ranking/star.png" alt="" />
                          <img src="/ranking/star.png" alt="" />
                          <img src="/ranking/star.png" alt="" />
                          <img src="/ranking/star.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="player-card"
                      style={{ backgroundColor: "#0029c2" }}
                    >
                      <div className="player-name">
                        <h3>nombre</h3>
                      </div>
                      <div className="serial-no">
                        <h2>#</h2>
                        <h2>4</h2>
                      </div>
                      <div className="user-profile">
                        <img src="/ranking/ranking2.png" alt="" />
                      </div>
                      <div className="player-info">
                        <h3> Ubicación </h3>
                        <h3> Nivel </h3>
                        <h3> XXXX puntos </h3>
                      </div>
                      <div className="ratings">
                        <img
                          src="/ranking/badge.png"
                          alt=""
                          className="badge-img"
                        />
                        <div className="stars">
                          <img src="/ranking/star.png" alt="" />
                          <img src="/ranking/star.png" alt="" />
                          <img src="/ranking/star.png" alt="" />
                          <img src="/ranking/star.png" alt="" />
                          <img src="/ranking/star.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <img src="/ranking/bottom.png" alt="" className="bottom-img" />
              </div>
              <Link href="" className="btn-outline-normal">
                Visita el ranking
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WorldTopRanking;
