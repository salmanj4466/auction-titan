import { Col, Row } from "antd";
import Link from "next/link";

const Articles = () => {
  return (
    <>
      <section className="articles">
        <div className="container articles-content">
          <h2>Nuestros artículos más leidos</h2>

          <Row gutter={16}>
            <Col span={8}>
              <div className="article-card">
                <img src="/articles/article1.png" alt="" />
                <h3>Título</h3>
                <p>
                  Nulla vel est sed felis venenatis tempus ullamcorper vel leo.
                  In varius odio et tristique tincidunt. Donec ut velit
                  consequat...
                </p>

                <Link href="/">Lee más </Link>
              </div>
            </Col>
            <Col span={8}>
              <div className="article-card">
                <img src="/articles/article2.png" alt="" />
                <h3>Título</h3>
                <p>
                  Nulla vel est sed felis venenatis tempus ullamcorper vel leo.
                  In varius odio et tristique tincidunt. Donec ut velit
                  consequat...
                </p>

                <Link href="/">Lee más </Link>
              </div>
            </Col>
            <Col span={8}>
              <div className="article-card">
                <img src="/articles/article3.png" alt="" />
                <h3>Título</h3>
                <p>
                  Nulla vel est sed felis venenatis tempus ullamcorper vel leo.
                  In varius odio et tristique tincidunt. Donec ut velit
                  consequat...
                </p>
                <Link href="/">Lee más </Link>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Articles;
