import { Col, Row } from "antd";

const Quota = () => {
  return (
    <>
      <section className="quota-section">
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

              <button>Cupo 0/50</button>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Quota;
