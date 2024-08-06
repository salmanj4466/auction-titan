import { Col, Row } from "antd";
import Link from "next/link";

const Articles = () => {
  const cardData = [
    {
      img: "/articles/article1.png",
      title: "Título",
      description:
        "Nulla vel est sed felis venenatis tempus ullamcorper vel leo. In varius odio et tristique tincidunt. Donec ut velit consequat...",
    },
    {
      img: "/articles/article2.png",
      title: "Título",
      description:
        "Nulla vel est sed felis venenatis tempus ullamcorper vel leo. In varius odio et tristique tincidunt. Donec ut velit consequat...",
    },
    {
      img: "/articles/article3.png",
      title: "Título",
      description:
        "Nulla vel est sed felis venenatis tempus ullamcorper vel leo. In varius odio et tristique tincidunt. Donec ut velit consequat...",
    },
  ];

  return (
    <>
      <section className="articles">
        <div className="container articles-content">
          <h2>Nuestros artículos más leidos</h2>

          <Row gutter={16}>
            {cardData.map((elm) => (
              <Col span={8}>
                <div className="article-card">
                  <img src={elm.img} alt="" />
                  <h3>{elm.title}</h3>
                  <p>{elm.description}</p>
                  <Link href="/">Lee más </Link>
                  <img
                    src="/articles/bottom.png"
                    alt=""
                    className="bottom-card"
                  />
                </div>
              </Col>
            ))}
            <button className="btn-blog"> Visita nuestro blog </button>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Articles;
