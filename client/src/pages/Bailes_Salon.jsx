import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../js/main.js";
import "../css/styles.css";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";

function Bailes_Salon() {
  return (
    <>
      {/* Navbar Start */}
      <div className="container-fluid sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <Link to="/index" className="navbar-brand">
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
                <Link to="/index" className="nav-item nav-link active">
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
          <h1 className="display-4 text-white mb-3">Bailes de Salón</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white" to="/#">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link className="text-white" to="/productos">
                  Productos
                </Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Bailes de Salón
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Hero End */}
      {/* Bailes de Salón */}
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="text-primary mb-3">
              <span className="fw-light text-dark">Oferta de</span> bailes de
              salón
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="product-item text-center border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/bailes-salon-silueta.png"
                  alt=""
                />
                <div className="mb-2">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small></small>
                </div>
                <Link to="/" className="h6 d-inline-block mb-2">
                  Iniciación a los bailes de salón
                </Link>
                <h5 className="text-primary mb-3">$8000 a $40000</h5>
                <Link to="/" className="btn btn-outline-primary px-3">
                  Detalles
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="product-item text-center border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/bolero-image.png"
                  alt=""
                />
                <div className="mb-2">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small></small>
                </div>
                <Link to="/" className="h6 d-inline-block mb-2">
                  Bolero
                </Link>
                <h5 className="text-primary mb-3">$8000 a $40000</h5>
                <Link to="/" className="btn btn-outline-primary px-3">
                  Detalles
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="product-item text-center border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/tanto-image.png"
                  alt=""
                />
                <div className="mb-2">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small></small>
                </div>
                <Link to="/" className="h6 d-inline-block mb-2">
                  Tango
                </Link>
                <h5 className="text-primary mb-3">$8000 a $40000</h5>
                <Link to="/" className="btn btn-outline-primary px-3">
                  Detalles
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="product-item text-center border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/pasodoble-image.png"
                  alt=""
                />
                <div className="mb-2">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small></small>
                </div>
                <Link to="/" className="h6 d-inline-block mb-2">
                  Paso Doble
                </Link>
                <h5 className="text-primary mb-3">$8000 a $40000</h5>
                <Link to="/" className="btn btn-outline-primary px-3">
                  Detalles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bailes de Salón */}
      {/* Footer Start */}
      <div className="container-fluid bg-white footer">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <Link to="/index" className="d-inline-block mb-3">
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

export default Bailes_Salon;
