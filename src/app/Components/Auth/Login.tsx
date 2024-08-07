"use client";
import { Checkbox, Col, Form, Input, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const LoginComponent = () => {
  return (
    <>
      <section className="auth-section">
        <div className="container">
          <Row className="align-items-center">
            <Col md={14}>
              <Image
                className="img-fluid auth-img"
                width={605}
                height={824}
                src="/auth/login.png"
                alt="login"
              />
            </Col>
            <Col md={10}>
              <h3></h3>
              <p></p>
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
                    placeholder="ejemplo@gmail.com"
                  />
                </div>

                <button type="submit" className="btn btn-warning w-100">
                  Iniciar sesión
                </button>
              </form>

              <hr className="my-5" />

              <button
                type="submit"
                className="btn btn-light text-start w-100 mb-4"
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
                className="btn btn-light text-start w-100 mb-4"
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
                className="btn btn-light text-start w-100 mb-4"
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
      </section>
    </>
  );
};

export default LoginComponent;
