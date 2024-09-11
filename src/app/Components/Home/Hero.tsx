import { Col, Row } from "antd";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <Row>
            <Col xs={24}></Col>
            <div className="hero-btn">
              <Link href="/registration-page" className="btn-lg-warning">
                INSCRIBETE
              </Link>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Hero;
