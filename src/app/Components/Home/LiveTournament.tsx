"use client";

import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";

const LiveTournament = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <div className="liveTournament">
        <div className="container">
          <h2 className="text-center m-auto">
            EN VIVO <span></span>
          </h2>
          <Row gutter={[24, 16]} className="mt-4">
            <Col span={isTabletOrMobile ? 24 : 12}>
              <div className="torneo-de">
                <h3>torneo de 12 de agosto</h3>
                <p>
                  ¡Ve el último torneo en vivo y directo!
                  <br />
                  Sin perderte ningún momento.
                </p>
              </div>
            </Col>
            <Col span={isTabletOrMobile ? 24 : 12}>
              <a href="/live-stream">
                <img
                  src="/live-tournments/Video en vivo.png"
                  alt=""
                  className="w-100"
                />
              </a>
            </Col>
            <Col span={isTabletOrMobile ? 24 : 12}>
              <div className="button-banner">
                <a href="/past-events">
                  <h3>eventos pasados</h3>
                </a>
              </div>
            </Col>
            <Col span={isTabletOrMobile ? 24 : 12}>
              <div className="button-banner">
                <a href="/all-tournaments">
                  <h3>Todos los torneos</h3>
                </a>
              </div>
            </Col>
          </Row>
          <Row gutter={[24, 8]} className="bottom-imgs mt-2">
            <Col span={6}>
              <a href="/past-events">
                {" "}
                <img src="/live-tournments/eventos 1.png" alt="" />
              </a>
            </Col>
            <Col span={6}>
              <a href="/past-events">
                <img src="/live-tournments/eventos 2.png" alt="" />
              </a>
            </Col>
            <Col span={12}>
              <a href="/all-tournaments">
                <img src="/live-tournments/galeria 1.png" alt="" />
              </a>
            </Col>
            <Col span={6}>
              <a href="/past-events">
                <img src="/live-tournments/eventos 3.png" alt="" />
              </a>
            </Col>
            <Col span={6}>
              <a href="/past-events">
                <img src="/live-tournments/eventos 4.png" alt="" />
              </a>
            </Col>
            <Col span={12}>
              <a href="/all-tournaments">
                <img src="/live-tournments/galeria 2.png" alt="" />
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default LiveTournament;
