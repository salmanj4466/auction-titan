import { Col, Row } from "antd";
import "../../styles/globals.scss";

const Articles = () => {
  return (
    <>
      <div className="articles">
        <div className="container articles-content">
          <h2>Nuestros artículos más leidos</h2>

          <Row gutter={16}>
            <Col span={8}>
              <div className="article-card">
                <img src="/assets/articles/article1.png" alt="" />
                <h3>Título</h3>
                <p>
                  Nulla vel est sed felis venenatis tempus ullamcorper vel leo.
                  In varius odio et tristique tincidunt. Donec ut velit
                  consequat...
                </p>

                <a href="/">Lee más </a>
              </div>
            </Col>
            <Col span={8}>
              <div className="article-card">
                <img src="/assets/articles/article2.png" alt="" />
                <h3>Título</h3>
                <p>
                  Nulla vel est sed felis venenatis tempus ullamcorper vel leo.
                  In varius odio et tristique tincidunt. Donec ut velit
                  consequat...
                </p>

                <a href="/">Lee más </a>
              </div>
            </Col>
            <Col span={8}>
              <div className="article-card">
                <img src="/assets/articles/article3.png" alt="" />
                <h3>Título</h3>
                <p>
                  Nulla vel est sed felis venenatis tempus ullamcorper vel leo.
                  In varius odio et tristique tincidunt. Donec ut velit
                  consequat...
                </p>

                <a href="/">Lee más </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Articles;
