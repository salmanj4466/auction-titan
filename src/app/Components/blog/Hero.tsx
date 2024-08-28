'use client'

import { Col, Row } from "antd";
import React from "react";
import { useMediaQuery } from 'react-responsive'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';

const Hero = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  const responsive = {
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <div className="blog">
        <div className="container">
          <h2> BLOG </h2>

          {isMobile ? (
            <>
              <div className="blog-banner-mobile">
                <Carousel responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                  arrows={false}
                  itemClass="carousel-item-padding"
                >
                  <div className="img">
                    <img src="/blog/blog-banner-mobile.png" alt="Banner 1" />
                    <div className="img-content">
                      <p>Main title, main title, main title, main ...</p>
                      <Link href=''>
                        Ver mas...
                      </Link>
                    </div>
                  </div>
                  <div className="img">
                    <img src="/blog/blog-banner-mobile.png" alt="Banner 2" />
                    <div className="img-content">
                      <p>Main title, main title, main title, main ...</p>
                      <Link href=''>
                        Ver mas...
                      </Link>
                    </div>
                  </div>
                </Carousel>
              </div>
            </>
          ) : (
            <>
              <div className="blog-banner">
                <Row className="d-flex align-items-end">
                  <Col span={isTabletOrMobile ? 24 : 12}>
                    <div className="content">
                      <h3>Título ULTIMO BLOG </h3>
                      <p>
                        Sed feugiat tempus ipsum non dignissim. Donec posuere est et
                        laoreet tempor. Phasellus pharetra, odio vitae congue
                        varius, purus enim dignissim lorem.
                      </p>
                      <Link href=""> Leer más </Link>
                    </div>
                  </Col>
                  <Col span={isTabletOrMobile ? 24 : 12} className="mt-5 mt-lg-0">
                    <div className="img">
                      <img src="/blog/bg.png" alt="" />
                    </div>
                  </Col>
                </Row>
              </div>
            </>
          )}

        </div>
      </div>
    </>
  );
};

export default Hero;
