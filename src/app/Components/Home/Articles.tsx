"use client";

import { Col, Row, Collapse, Space } from "antd";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const Articles = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });
  const mobile = useMediaQuery({ query: "(max-width: 768px)" });
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

  const { Panel } = Collapse;

  return (
    <>
      {mobile ? (
        <>
          <section className="articles">
            <div className="container articles-content">
              <h2>Nuestros artículos más leidos</h2>
              <Space direction="vertical">
                <Row gutter={40}>
                  {cardData.map((elm, index) => (
                    <Col span={24} key={index}>
                      <Collapse collapsible="header" defaultActiveKey={["0"]}>
                        <Panel
                          header={<h3>{elm.title}</h3>}
                          key={index.toString()}
                        >
                          <div className="article-card mt-md-5">
                            <img src={elm.img} alt={elm.title} />
                            <h3>{elm.title}</h3>
                            <p>{elm.description}</p>
                            <Link
                              href="/blog-lecture"
                              className="btn-outline-shadow"
                            >
                              Lee más
                            </Link>
                            <img
                              src="/articles/bottom.png"
                              alt=""
                              className="bottom-card"
                            />
                          </div>
                        </Panel>
                      </Collapse>
                    </Col>
                  ))}
                </Row>
              </Space>
              <button className="btn-md-warning">Visita nuestro blog</button>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="articles">
            <div className="container articles-content">
              <h2>Nuestros artículos más leidos</h2>

              <Row gutter={40}>
                {cardData.map((elm) => (
                  <Col span={isTabletOrMobile ? 12 : 8}>
                    <div className="article-card mt-md-5">
                      <img src={elm.img} alt="" />
                      <h3>{elm.title}</h3>
                      <p>{elm.description}</p>
                      <Link href="/blog-lecture" className="btn-outline-shadow">
                        Lee más{" "}
                      </Link>
                      <img
                        src="/articles/bottom.png"
                        alt=""
                        className="bottom-card"
                      />
                    </div>
                  </Col>
                ))}
              </Row>
              <button className="btn-md-warning">
                <Link href="/blog">Visita nuestro blog</Link>
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Articles;
