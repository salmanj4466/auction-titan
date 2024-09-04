"use client";

import { Col, Row } from "antd";
import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const ProfilePage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <div className="profile-page-bg">
        <div className="container">
          <div className="profile-page">
            <img src="/profile-imgs/top.png" alt="" className="top" />

            <Row gutter={[32, 24]}>
              <Col span={6}>
                <div className="box">
                  <div className="img">
                    <img src="/profile-imgs/placeholder.png" alt="" />
                  </div>
                </div>
                <div className="selected-imgs">
                  <img src="/profile-imgs/selected.png" alt="" />
                  <img src="/profile-imgs/selected.png" alt="" />
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        cursor: "pointer",
                      }}
                    />
                    <div className="add-file" onClick={handleButtonClick}>
                      <div className="plus-icon">
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                </div>
                <p>Cambiar contraseña</p>
              </Col>
              <Col span={12}>
                <div className="form">
                  <h3>Mi perfil</h3>
                  <form>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Equipo"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ubicación"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <textarea
                        cols={4}
                        className="form-control"
                        placeholder="Biografía"
                        style={{ minHeight: "300px" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-warning w-100 mb-3 mt-4"
                    >
                      Guardar
                    </button>
                    <button
                      type="submit"
                      className="btn btn-warning w-100 sign-up-tournament"
                    >
                      Inscribirme al torneo
                    </button>
                  </form>
                </div>
              </Col>
              <Col span={6}>
                <div className="profile-info-boxes">
                  <div className="profile-info">
                    <p>Puntos</p>
                    <h2>134</h2>
                  </div>
                  <div className="profile-info">
                    <p>Nivel</p>
                    <h2>Maestro</h2>
                  </div>
                  <div className="profile-info">
                    <p>Torneos ganados</p>
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
            </Row>
            <img src="/profile-imgs/bottom.png" alt="" className="bottom" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
