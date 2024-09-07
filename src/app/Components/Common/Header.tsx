import { Image } from "antd";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img width={79} height={79} src="/logo.svg" alt="logo" />
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
            <img src="bars.png" alt="" className="bars" />
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
                      Próximo evento
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/past-events">
                      Eventos anteriores
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Todos los torneos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/live-stream">
                      Live Stream torneo
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-disabled="true"
                  href="/sponsor-page"
                >
                  Patrocinadores
                </a>
              </li>
              <li className="nav-item">
                <a href="/registration-page">
                  <button className="hero-btn">Registro del torneo</button>
                </a>
              </li>
              <li className="nav-item dropdown resister-btn">
                <a
                  className="nav-link dropdown-toggle hero-btn2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Reglas de la liga
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/page-event-rules">
                      Reglas generales
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/banned-cards">
                      Cartas banneadas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/league-protocol">
                      Protocolo de la liga
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/score-page">
                      Lista de puntos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/player-profile">
                      Nuevo usuario
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/login">
                      Inicio de sesión
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/profile-page">
                      Perfil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/terms-and-conditions">
                      Términos y Condiciones
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/contact-us">
                      Contacto
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/privacy-notice-page">
                      Aviso de privacidad
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item d-none d-lg-block">
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
