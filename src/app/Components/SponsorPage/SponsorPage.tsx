import Link from "next/link";
import React from "react";

const SponsorPage = () => {
  return (
    <>
      <div className="sponsors">
        <div className="container">
          <h1> Patrocinadores </h1>
          <h3>
            Únete a nuestra familia de patrocinadores y consigue beneficios.
          </h3>
          <div className="sponsor-details">
            <div className="my-sponsor">
              <div className="logo">
                <img src="/sponsor-imgs/sponsor1.png" alt="" />
              </div>
              <ul className="social-icon">
                <li>
                  <Link href="/">
                    <i className="bi bi-whatsapp"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="bi bi-envelope"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="bi bi-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="bi bi-tiktok"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="bi bi-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="my-sponsor">
              <div className="logo">
                <img src="/sponsor-imgs/sponsor2.png" alt="" />
              </div>
              <ul className="social-icon">
                <li>
                  <Link href="/">
                    <i className="bi bi-whatsapp"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="bi bi-envelope"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="bi bi-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="bi bi-tiktok"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="bi bi-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorPage;
