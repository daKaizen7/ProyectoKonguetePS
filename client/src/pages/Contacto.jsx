import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../js/main.js";
import "../css/styles.css";
import { Link } from "react-router-dom";
function Contacto() {
  return (
    <>
      {/* Navbar Start */}
      <div className="container-fluid sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <Link to="/" className="navbar-brand">
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
                <Link to="/" className="nav-item nav-link active">
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
          <h1 className="display-4 text-white mb-3 animated slideInDown">
            Contact
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
              <li className="breadcrumb-item">
                <Link className="text-white" to="/#">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link className="text-white" to="/#">
                  Pages
                </Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Hero End */}
      {/* Contact Info Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="contact-info-item position-relative bg-primary text-center p-3">
                <div className="border py-5 px-3">
                  <i className="fa fa-map-marker-alt fa-3x text-dark mb-4" />
                  <h5 className="text-white">Office Address</h5>
                  <h5 className="fw-light text-white">
                    123 Street, New York, USA
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="contact-info-item position-relative bg-primary text-center p-3">
                <div className="border py-5 px-3">
                  <i className="fa fa-phone-alt fa-3x text-dark mb-4" />
                  <h5 className="text-white">Call Us</h5>
                  <h5 className="fw-light text-white">+012 345 67890</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="contact-info-item position-relative bg-primary text-center p-3">
                <div className="border py-5 px-3">
                  <i className="fa fa-envelope fa-3x text-dark mb-4" />
                  <h5 className="text-white">Mail Us</h5>
                  <h5 className="fw-light text-white">info@example.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Info End */}
      {/* Contact Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="text-primary mb-5">
              <span className="fw-light text-dark">If You Have Any Query,</span>{" "}
              Please Contact Us
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.1s">
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax &amp; PHP in a few minutes. Just
                copy and paste the files, add a little code and you're done.{" "}
                <Link to="/https://htmlcodex.com/contact-form">
                  Download Now
                </Link>
                .
              </p>
              <div className="wow fadeIn" data-wow-delay="0.3s">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 150 }}
                          defaultValue={""}
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.5s">
              <iframe
                className="w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder={0}
                style={{ minHeight: 300, border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
      {/* Newsletter Start */}
      <div className="container-fluid newsletter bg-primary py-5 my-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="text-white mb-3">
              <span className="fw-light text-dark">Let's Subscribe</span> The
              Newsletter
            </h1>
            <p className="text-white mb-4">
              Subscribe now to get 30% discount on any of our products
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7 wow fadeIn" data-wow-delay="0.5s">
              <div className="position-relative w-100 mt-3 mb-2">
                <input
                  className="form-control w-100 py-4 ps-4 pe-5"
                  type="text"
                  placeholder="Enter Your Email"
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
              <Link to="/" className="d-inline-block mb-3">
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

export default Contacto;
