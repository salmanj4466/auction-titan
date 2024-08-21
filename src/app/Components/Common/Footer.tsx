'use client'

import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from 'react-responsive'

const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' });
  return (
      <>
        {isMobile ? (
            <>
                <footer>
                    <div className="container">
                        <Row gutter={20} className="text-center">
                            <Col span={24}>
                                <Image width={79} height={79} src="/logo.svg" alt="logo"/>
                            </Col>
                            <Col span={24}>
                                <h4 className='mt-4'>Descubrir</h4>
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
                            <Col span={24}>
                                <h4 className='mt-5'>Empresa</h4>
                                <ul>
                                    <li>
                                        <Link href="/">Aviso de privacidad</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Patrocinadores</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col span={24}>
                                <h4 className='mt-5'>TORNEO </h4>
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
                            <Col span={24}>
                                <p className='mt-5'>
                                    <i className="bi bi-geo-alt"></i> Dirección: Lorem ipsum dolor
                                    sit amet.{" "}
                                </p>
                            </Col>
                            <Col span={12}>
                                <ul className="social-icon">
                                    <li>
                                        <Link href="/">
                                            <i className="bi bi-whatsapp"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <i className="bi bi-envelope"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col span={12}>
                                <ul className="social-icon">
                                    <li>
                                        <Link href="/">
                                            <i className="bi bi-tiktok"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <i className="bi bi-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </footer>
            </>
        ) : (
            <>
                <footer>
                    <div className="container">
                        <Row gutter={20} className="text-center">
                            <Col span={isTabletOrMobile ? 24 : 8}>
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
                            <Col span={isTabletOrMobile ? 24 : 8}>
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
                            <Col span={isTabletOrMobile ? 24 : 8}>
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

                        <Row gutter={20} className="align-items-end mt-5 px-5">
                            <Col span={isTabletOrMobile ? 12 : 9}>
                                <Image width={79} height={79} src="/logo.svg" alt="logo"/>
                            </Col>
                            <Col span={isTabletOrMobile ? 12 : 7}>
                                <p>
                                    <i className="bi bi-geo-alt"></i> Dirección: Lorem ipsum dolor
                                    sit amet.{" "}
                                </p>
                            </Col>
                            <Col span={isTabletOrMobile ? 24 : 8}>
                                <ul className="social-icon">
                                    <li>
                                        <Link href="/">
                                            <i className="bi bi-whatsapp"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <i className="bi bi-envelope"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <i className="bi bi-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <i className="bi bi-tiktok"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <i className="bi bi-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </footer>
            </>
        )}
      </>
  );
};

export default Footer;
