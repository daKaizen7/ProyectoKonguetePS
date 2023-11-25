import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../js/main.js";
import "../css/styles.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      {/* Navbar Start */}
      <div className="container-fluid sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <Link to="/client/index" className="navbar-brand">
              <h2 className="text-white">
                <img
                  id="logo-texto"
                  src="assets/img/logo_rosa_texto.png"
                  alt=""
                />
              </h2>
            </Link>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <Link to="/client/index" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/landing" className="nav-item nav-link">
                  Sobre nosotros
                </Link>
                <Link to="/productos" className="nav-item nav-link">
                  Productos
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Páginas
                  </Link>
                  <div className="dropdown-menu bg-light mt-2">
                    <Link to="/blog" className="dropdown-item">
                      Articulos
                    </Link>
                    <Link to="/404" className="dropdown-item">
                      404 Page
                    </Link>
                  </div>
                </div>
                <Link to="/contacto" className="nav-item nav-link">
                  Contáctanos
                </Link>
              </div>
              <Link
                to="/"
                className="btn btn-dark py-2 px-4 d-none d-lg-inline-block"
              >
                Matricúlate ahora
              </Link>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
      {/* Hero Start */}
      <div className="container-fluid bg-primary hero-header mb-5">
        <div className="container text-center">
          <h1 className="display-4 text-white mb-3">Sobre Nosotros</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white" to="/client/index">
                  Home
                </Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Sobre Nosotros
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Hero End */}
      {/* Feature Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 fadeIn">
              <div className="feature-item position-relative bg-primary text-center p-3">
                <div className="border py-5 px-3">
                  <i className="fas fa-check fa-3x text-dark mb-4" />
                  <h5 className="text-white mb-0">Técnica</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 fadeIn">
              <div className="feature-item position-relative bg-primary text-center p-3">
                <div className="border py-5 px-3">
                  <i className="fas fa-smile-beam fa-3x text-dark mb-4" />
                  <h5 className="text-white mb-0">Diversión</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 fadeIn">
              <div className="feature-item position-relative bg-primary text-center p-3">
                <div className="border py-5 px-3">
                  <i className="fas fa-book-open fa-3x text-dark mb-4" />
                  <h5 className="text-white mb-0">Aprendizaje real</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <img className="img-fluid" src="" />
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="text-primary mb-4">
                Academia de baile{" "}
                <span className="fw-light text-dark">
                  para aprender de verdad.
                </span>
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                aliquet, erat non malesuada consequat, nibh erat tempus risus,
                vitae porttitor purus nisl vitae purus. Praesent tristique odio
                ut rutrum pellentesque. Fusce eget molestie est, at rutrum est.
              </p>
              <p className="mb-4">
                Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
                sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                tempor.
              </p>
              <Link className="btn btn-primary py-2 px-4" to="/">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Newsletter Start */}
      <div className="container-fluid newsletter bg-primary py-5 my-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="text-white mb-3">
              <span className="fw-light text-dark">Suscríbete al </span>
              Newsletter
            </h1>
            <p className="text-white mb-4">
              Suscríbete ahora para recibir 10% de descuento en uno de nuestros
              productos
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7 wow fadeIn" data-wow-delay="0.5s">
              <div className="position-relative w-100 mt-3 mb-2">
                <input
                  className="form-control w-100 py-4 ps-4 pe-5"
                  type="text"
                  placeholder="Ingresa tu email"
                  style={{ height: 48 }}
                />
                <button
                  type="button"
                  className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                >
                  <i className="fa fa-paper-plane text-white fs-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter End */}
      {/* Footer Start */}
      <div className="container-fluid bg-white footer">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <Link to="/client/index" className="d-inline-block mb-3">
                <h2 className="text-white">
                  <img id="logo-texto" src="assets/img/logo_texto.png" alt="" />
                </h2>
              </Link>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                aliquet, erat non malesuada consequat, nibh erat tempus risus,
                vitae porttitor purus nisl vitae purus.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h5 className="mb-4">Ponerse en contacto</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3" />
                Calle 123 #45A67, Medellín, Colombia
              </p>
              <p>
                <i className="fa fa-phone-alt me-3" />
                +57 345 6789012
              </p>
              <p>
                <i className="fa fa-envelope me-3" />
                info@konguete.com
              </p>
              <div className="d-flex pt-2">
                <Link
                  className="btn btn-square btn-outline-primary me-1"
                  to="/"
                >
                  <i className="fab fa-twitter" />
                </Link>
                <Link
                  className="btn btn-square btn-outline-primary me-1"
                  to="/"
                >
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link
                  className="btn btn-square btn-outline-primary me-1"
                  to="/"
                >
                  <i className="fab fa-instagram" />
                </Link>
                <Link
                  className="btn btn-square btn-outline-primary me-1"
                  to="/"
                >
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <h5 className="mb-4">Nuestros Productos</h5>
              <Link className="btn btn-link" to="/">
                Iniciación
              </Link>
              <Link className="btn btn-link" to="/">
                Merengue
              </Link>
              <Link className="btn btn-link" to="/">
                Porro
              </Link>
              <Link className="btn btn-link" to="/">
                Salsa
              </Link>
              <Link className="btn btn-link" to="/">
                Bachata
              </Link>
              <Link className="btn btn-link" to="/">
                Tango
              </Link>
              <Link className="btn btn-link" to="/">
                Bolero
              </Link>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <h5 className="mb-4">Navegación</h5>
              <Link className="btn btn-link" to="/">
                Sobre nosotros
              </Link>
              <Link className="btn btn-link" to="/">
                Contáctanos
              </Link>
              <Link className="btn btn-link" to="/">
                Política de privacidad
              </Link>
              <Link className="btn btn-link" to="/">
                Términos &amp; Condiciones
              </Link>
            </div>
          </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <Link className="border-bottom" to="/#">
                  ©2023 Konguete
                </Link>
                , Todos los derechos reservados.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link to="/">Home</Link>
                  <Link to="/">Cookies</Link>
                  <Link to="/">Ayuda</Link>
                  <Link to="/">FAQs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <Link
        to="/#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </Link>
      {/* Template Javascript */}
    </>
  );
}

export default LandingPage;
