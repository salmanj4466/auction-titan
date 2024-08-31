"use client";
import { Checkbox, Col, Form, Input, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const LoginComponent = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 968px)" });

  return (
    <>
      <section className="auth-section">
        <div className="container">
          <Row gutter={20} className="justify-content-center">
            <Col md={22}>
              <div className="bg-dark rounded-xl">
                <Row className="align-items-center">
                  <Col md={12} className="d-none d-lg-block">
                    <Image
                      className="img-fluid auth-img"
                      width={605}
                      height={824}
                      src="/auth/login.png"
                      alt="login"
                    />
                  </Col>
                  <Col
                    md={isMobile ? 24 : 12}
                    className="px-5 px-md-3 py-5 py-lg-0"
                  >
                    <h3 className="text-center">hola de nuevo</h3>
                    <p className="text-center mb-5">Ingresa tus detalles</p>
                    <form>
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ejemplo@gmail.com"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Contraseña "
                        />
                      </div>

                      <button type="submit" className="btn btn-warning w-100">
                        Iniciar sesión
                      </button>
                    </form>

                    <hr className="my-5" />

                    <button
                      type="submit"
                      className="btn btn-light text-start w-100 mb-4 px-4"
                    >
                      <Image
                        className="me-3"
                        width={30}
                        height={30}
                        src="/auth/google.svg"
                        alt="google"
                      />
                      Continua con Google
                    </button>
                    <button
                      type="submit"
                      className="btn btn-light text-start w-100 mb-4 px-4"
                    >
                      <Image
                        className="me-3"
                        width={30}
                        height={30}
                        src="/auth/fb.svg"
                        alt="fb"
                      />
                      Continua con Facebook
                    </button>
                    <button
                      type="submit"
                      className="btn btn-light text-start w-100 mb-4 px-4"
                    >
                      <Image
                        className="me-3"
                        width={30}
                        height={30}
                        src="/auth/apple.svg"
                        alt="apple"
                      />
                      Continua con Apple
                    </button>

                    <p className="text-end">
                      ¿No tienes cuenta?{" "}
                      <Link href="/" className="text-warning">
                        <strong>Crea una aquí</strong>
                      </Link>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default LoginComponent;
