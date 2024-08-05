import { Col, Row } from "antd";
import Link from "next/link";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const Articles = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

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
            <button className="btn-blog"> Visita nuestro blog </button>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Articles;
