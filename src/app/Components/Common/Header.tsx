import { Image } from "antd";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="#">
            <Image width={79} height={79} src="/logo.svg" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/blog">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ranking">
                  Rankings
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Events
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Patrocinadores
                </a>
              </li>
              <li className="nav-item">
                <button className="hero-btn"> Registro del torneo </button>
              </li>
              <li className="nav-item">
                <button className="hero-btn2"> Reglas de la liga </button>
              </li>
              <li className="nav-item">
                <img src="bars.png" alt="" className="bars" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
