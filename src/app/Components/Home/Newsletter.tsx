import { Col, Row } from "antd";

const Newsletter = () => {
  return (
    <>
      <section className="newsletter-section">
        <div className="container">
          <Row>
            <Col xs={24}>
              <ul>
                <li>
                  <h2>72</h2>
                  <h4>dias</h4>
                </li>
                <li>
                  <h2>10</h2>
                  <h4>horas</h4>
                </li>
                <li>
                  <h2>43</h2>
                  <h4>minutos</h4>
                </li>
                <li>
                  <h2>09</h2>
                  <h4>segundos</h4>
                </li>
              </ul>

              <p>
                Registra tu correo electrónico para estar al tanto de <br />{" "}
                nuestra fecha de inscripción.
              </p>

              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ejemplo@gmail.com"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <button type="submit" className="btn-hero btn-warning">
                  Subscribirme
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
