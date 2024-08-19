import { Col, Row } from "antd";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="head">
            <h1>Contacto</h1>
            <p>
              Tu retroalimentación es muy importante, compártenos como podemos
              mejorar.
            </p>
          </div>
          <Row gutter={24} className="main-row">
            <Col span={8}>
              <div className="content">
                <div className="icon">
                  <IoLocationOutline />
                </div>
                <span>Dirección:</span>
                <p>
                  Lorem ipsum dolor sit amet. <br />
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div className="content">
                <div className="icon">
                  <FaWhatsapp />
                </div>
                <span>WhatsApp:</span>
                <p>
                  +521 222 123 4567 <br /> +521 222 123 4567
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div className="content">
                <div className="icon">
                  <FaRegEnvelope />
                </div>
                <span>Correo:</span>
                <p>contacto@correotitan.com</p>
              </div>
            </Col>
          </Row>

          <div className="social-icons">
            <p>Síguenos en nuestras redes sociales:</p>
            <div className="icons">
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
                <FaTiktok />
              </div>
              <div className="icon">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
