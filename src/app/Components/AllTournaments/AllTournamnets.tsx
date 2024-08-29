'use client'

import { Col, Row } from "antd";
import React from "react";
import { useMediaQuery } from 'react-responsive'

const AllTournamnets = () => {

  const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' })

  return (
    <>
      <div className="all-tournaments">
        <div className="container">
          <h1>todos los torneos</h1>
          <h2 className="text-center m-auto">
            EV VIVO <span></span>
          </h2>

          {isMobile ? (
            <>
              <div className="mobile-view">
              <Row gutter={[24, 16]} className="mt-4">
                <Col span={isTablet ? 24 : 12}>
                  <img
                    src="/live-tournments/Video en vivo.png"
                    alt=""
                    className="w-100"
                  />
                </Col>
                <Col span={isTablet ? 24 : 12}>
                  <div className="torneo-de">
                    <h3>torneo de 12 de agosto</h3>
                    <p>
                      ¡Ve el último torneo en vivo y directo!
                      <br />
                      Sin perderte ningún momento.
                    </p>
                  </div>
                </Col>
              </Row>
              </div>
            </>
          ) : (
            <>
              <Row gutter={[24, 16]} className="mt-4">
                <Col span={isTablet ? 24 : 12}>
                  <div className="torneo-de">
                    <h3>torneo de 12 de agosto</h3>
                    <p>
                      ¡Ve el último torneo en vivo y directo!
                      <br />
                      Sin perderte ningún momento.
                    </p>
                  </div>
                </Col>
                <Col span={isTablet ? 24 : 12}>
                  <img
                    src="/live-tournments/Video en vivo.png"
                    alt=""
                    className="w-100"
                  />
                </Col>
              </Row>
            </>
          )}
          <p className="sign-up"> ¿Quieres inscribirte? </p>
        </div>
      </div>
    </>
  );
};

export default AllTournamnets;
