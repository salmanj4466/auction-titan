import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="blog">
        <div className="container">
          <h2> BLOG </h2>

          <div className="blog-banner">
            <Row className="d-flex align-items-end">
              <Col span={12}>
                <div className="content">
                  <h3>Título ULTIMO BLOG </h3>
                  <p>
                    Sed feugiat tempus ipsum non dignissim. Donec posuere est et
                    laoreet tempor. Phasellus pharetra, odio vitae congue
                    varius, purus enim dignissim lorem.
                  </p>
                  <Link href=""> Leer más </Link>
                </div>
              </Col>
              <Col span={12}>
                <div className="img">
                  <img src="/blog/bg.png" alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
