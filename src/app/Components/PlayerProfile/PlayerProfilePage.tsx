import { Col, Row } from "antd";
import React from "react";

const PlayerProfilePage = () => {
  return (
    <>
      <div className="player-profile">
        <div className="container">
          <h1> Perfiles jugadores </h1>
          <div className="content">
            <div className="details-top">
              <img src="/player-profile/left.png" alt="" className="left" />
              <Row>
                <Col span={8}>
                  <img
                    src="/player-profile/playerProfile.png"
                    alt=""
                    className="profile"
                  />
                </Col>
                <Col span={16} className="imgs">
                  <img src="/profile-imgs/selected.png" alt="" />
                  <img src="/profile-imgs/selected.png" alt="" />
                  <img src="/profile-imgs/selected.png" alt="" />
                  <div className="points">
                    <p>Puntos</p>
                    <h2>134</h2>
                  </div>

                  <div className="name">
                    <h3>Nombre</h3>
                    <h5>Ubicación</h5>
                  </div>
                </Col>
              </Row>
              <img src="/player-profile/right.png" alt="" className="right" />
            </div>
            <div className="details-bottom">
              <Row>
                <Col span={8}>
                  <div className="tier-boxes">
                    <div className="box">
                      <p>Nivel</p>
                      <h2>Maestro</h2>
                      <div className="bar"></div>
                    </div>
                    <div className="box">
                      <p>equipo</p>
                      <h2>Alfa 12</h2>
                      <div className="bar"></div>
                    </div>
                    <div className="box">
                      <p>Torneos ganados</p>
                      <img src="/ranking/badge.png" alt="" />
                      <div className="stars">
                        <img src="/ranking/star.png" alt="" />
                        <img src="/ranking/star.png" alt="" />
                        <img src="/ranking/star.png" alt="" />
                        <img src="/ranking/star.png" alt="" />
                        <img src="/ranking/star.png" alt="" />
                      </div>
                      <div className="bar"></div>
                    </div>
                  </div>
                </Col>
                <Col span={16} className="details">
                  <p>
                    <span>Biografia:</span> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vestibulum mi arcu, blandit
                    posuere bibendum eget, porta vitae tortor. Vestibulum
                    lacinia odio nulla, vel accumsan enim faucibus ac. Duis
                    blandit sed tortor a pellentesque. Suspendisse ornare
                    volutpat velit, quis lobortis nulla congue at. Ut
                    scelerisque sit amet augue sed facilisis. Praesent sit amet
                    velit ante. Donec varius a tortor interdum placerat. Etiam
                    accumsan est non scelerisque sollicitudin. In dui libero,
                    consequat eu lacus pretium, aliquet euismod nisl. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Suspendisse scelerisque
                    dolor ac ante lacinia pharetra.
                  </p>
                  <p>
                    Suspendisse ac lorem nec orci suscipit sodales consequat non
                    odio. Mauris a imperdiet metus, vel egestas metus. Nam nec
                    placerat lorem. Proin porta arcu metus, sit amet lobortis
                    risus sollicitudin nec. Nullam quis odio aliquam, hendrerit
                    massa id, elementum nibh. Praesent a tellus eget massa
                    sagittis vulputate id sed arcu. Maecenas porta mattis dui,
                    ac tempus nisl faucibus quis. Pellentesque vitae ipsum
                    felis.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerProfilePage;
