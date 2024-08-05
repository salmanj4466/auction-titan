import { Col, Row } from "antd";

const WorldTopRanking = () => {
  return (
    <>
      <div className="top-ranking">
        <div className="container">
          <h2> Top mundial </h2>
          <div className="ranking-details">
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <div className="profile">
                  <div className="img-box">
                    <img src="/ranking/placeholder.webp" alt="" />
                  </div>
                  <div className="person-detail">
                    <h3>
                      Juan perez <br />
                      Ozuna
                    </h3>
                    <p>Cholula</p>
                    <h5>Leyenda</h5>
                    <h6>3500 puntos</h6>
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
              </Col>
              <Col span={18}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldTopRanking;
