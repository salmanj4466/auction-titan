import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <Row gutter={20} className="text-center">
            <Col md={8}>
              <h4>Descubrir</h4>
              <ul>
                <li>
                  <Link href="/">Blog</Link>
                </li>
                <li>
                  <Link href="/">Reglas generales</Link>
                </li>
                <li>
                  <Link href="/">Tarjetas banneadas</Link>
                </li>
                <li>
                  <Link href="/">Eventos pasados</Link>
                </li>
              </ul>
            </Col>
            <Col md={8}>
              <h4>Empresa</h4>
              <ul>
                <li>
                  <Link href="/">Aviso de privacidad</Link>
                </li>
                <li>
                  <Link href="/">Patrocinadores</Link>
                </li>
              </ul>
            </Col>
            <Col md={8}>
              <h4>TORNEO </h4>
              <ul>
                <li>
                  <Link href="/">Eventos próximos</Link>
                </li>
                <li>
                  <Link href="/">Formulario de inscripción</Link>
                </li>
                <li>
                  <Link href="/">Ranking</Link>
                </li>
                <li>
                  <Link href="/">Jugadores</Link>
                </li>
              </ul>
            </Col>
          </Row>

          <Row gutter={20} className="align-items-end">
            <Col md={8}>
              <Image width={79} height={79} src="/logo.svg" alt="logo" />
            </Col>
            <Col md={8}>
              <p>Dirección: Lorem ipsum dolor sit amet. </p>
            </Col>
            <Col md={8}>
              <ul>
                <li>
                  <Link href="/"></Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
