import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import "../js/main.js";

function HomePage() {
  return (
    <>
      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-grow text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        ></div>
      </div>
      {/* Spinner End */}
      {/* Navbar Start */}
      <div className="container-fluid sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <a href="index.html" className="navbar-brand">
              <h2 className="text-white">
                <img
                  id="logo-texto"
                  src="assets/img/logo_rosa_texto.png"
                  alt=""
                />
              </h2>
            </a>
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
                <a href="index.html" className="nav-item nav-link active">
                  Home
                </a>
                <a href="landing.html" className="nav-item nav-link">
                  Sobre nosotros
                </a>
                <a href="producto.html" className="nav-item nav-link">
                  Productos
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Páginas
                    <i className="bi bi-caret-down-fill" />
                  </a>
                  <div className="dropdown-menu bg-light mt-2">
                    <a href="blog.html" className="dropdown-item">
                      Articulos
                    </a>
                    <a href="404.html" className="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a href="contacto.html" className="nav-item nav-link">
                  Contáctanos
                </a>
              </div>
              <a
                href="/client/src/html/login.html"
                className="nav-item nav-link btn btn-dark py-2 px-4  d-lg-inline-block"
              >
                <i className="bi bi-person"> Ingresar</i>
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
      {/* Hero Start */}
      <div className="container-fluid bg-primary hero-header mb-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <h3 className="fw-light text-white">Danza &amp; Baile</h3>
              <h1 className="display-4 text-white">
                Academia <span className="fw-light text-dark">de baile</span>{" "}
                para aprender de verdad
              </h1>
              <p className="text-white mb-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                feugiat rutrum lectus, sed auctor ex malesuada id. Orci varius
                natoque penatibus et magnis dis parturient montes.
              </p>
              <a href="" className="btn btn-dark py-2 px-4 me-3">
                Matricúlate ahora
              </a>
              <a
                href="contacto.html"
                className="btn btn-outline-dark py-2 px-4"
              >
                Contáctanos
              </a>
            </div>
            <div className="col-lg-6">
              <img
                id="imagen-logo"
                className="img-fluid"
                src="assets/img/logo_rosa_imagen.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}
      {/* Feature Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 ">
              <div className="feature-item position-relative bg-primary text-center p-3">
                <div className="border py-5 px-3">
                  <i className="fas fa-check fa-3x text-dark mb-4" />
                  <h5 className="text-white mb-0">Técnica</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="feature-item position-relative bg-primary text-center p-3">
                <div className="border py-5 px-3">
                  <i className="fas fa-smile-beam fa-3x text-dark mb-4" />
                  <h5 className="text-white mb-0">Diversión</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="feature-item position-relative bg-primary text-center p-3">
                <div className="border py-5 px-3">
                  <i className="bi bi-book-half text-dark mb-4 icono-grande" />
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
            <div className="col-lg-6 fadeIn">
              <img
                className="img-fluid"
                src="assets/img/baile-social-image.jpg"
              />
            </div>
            <div className="col-lg-6 fadeIn">
              <h1 className="text-primary mb-4">
                El baile{" "}
                <span className="fw-light text-dark">
                  es una habilidad social indispensable
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
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Bailes Tropicales */}
      <div className="container-fluid deal bg-primary my-5 py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 fadeIn">
              <img
                className="img-fluid"
                src="assets/img/tango-imagen-silueta.png"
              />
            </div>
            <div className="col-lg-6 fadeIn">
              <div className="bg-white text-center p-4">
                <div className="border p-4">
                  <h2 className="fw-bold text-uppercase mb-4">
                    Bailes Tropicales
                  </h2>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae tempora temporibus, sint soluta quod aspernatur
                    totam inventore deleniti ipsum quibusdam. Excepturi, maxime
                    quisquam? Quaerat natus dolorem explicabo repudiandae soluta
                    quidem.
                  </p>
                  <div className="row g-0 cdt mb-4">
                    <div className="col-3">
                      <h1 className="display-6" id="cdt-days" />
                    </div>
                    <div className="col-3">
                      <h1 className="display-6" id="cdt-hours" />
                    </div>
                    <div className="col-3">
                      <h1 className="display-6" id="cdt-minutes" />
                    </div>
                    <div className="col-3">
                      <h1 className="display-6" id="cdt-seconds" />
                    </div>
                  </div>
                  <a className="btn btn-primary py-2 px-4" href="">
                    Explorar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center fadeIn" style={{ maxWidth: 600 }}>
            <h1 className="text-primary mb-3">
              <span className="fw-light text-dark">Oferta de</span> bailes
              tropicales
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 fadeIn">
              <div className="product-item text-center border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/iniciacion-image.png"
                  alt=""
                />
                <div className="mb-2">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small>(99)</small>
                </div>
                <a href="" className="h6 d-inline-block mb-2">
                  Iniciación a los bailes tropicales
                </a>
                <h5 className="text-primary mb-3">$8000 a $40000</h5>
                <a href="" className="btn btn-outline-primary px-3">
                  Detalles
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 fadeIn">
              <div className="product-item text-center border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/merengue-image.png"
                  alt=""
                />
                <div className="mb-2">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small>(99)</small>
                </div>
                <a href="" className="h6 d-inline-block mb-2">
                  Merengue
                </a>
                <h5 className="text-primary mb-3">$8000 a $40000</h5>
                <a href="" className="btn btn-outline-primary px-3">
                  Detalles
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 fadeIn">
              <div className="product-item text-center border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/porro-image.png"
                  alt=""
                />
                <div className="mb-2">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small>(99)</small>
                </div>
                <a href="" className="h6 d-inline-block mb-2">
                  Porro
                </a>
                <h5 className="text-primary mb-3">$8000 a $40000</h5>
                <a href="" className="btn btn-outline-primary px-3">
                  Detalles
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 fadeIn">
              <div className="product-item text-center border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/salsa-image.png"
                  alt=""
                />
                <div className="mb-2">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small>(99)</small>
                </div>
                <a href="" className="h6 d-inline-block mb-2">
                  Salsa
                </a>
                <h5 className="text-primary mb-3">$8000 a $40000</h5>
                <a href="" className="btn btn-outline-primary px-3">
                  Detalles
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bailes Tropicales */}
      {/* Bailes de Salón */}
      <div className="container-fluid deal bg-primary my-5 py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 fadeIn">
              <img
                className="img-fluid"
                src="assets/img/bachata-imagen-silueta.png"
              />
            </div>
            <div className="col-lg-6 fadeIn">
              <div className="bg-white text-center p-4">
                <div className="border p-4">
                  <h2 className="fw-bold text-uppercase mb-4">
                    Bailes de Salón
                  </h2>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae tempora temporibus, sint soluta quod aspernatur
                    totam inventore deleniti ipsum quibusdam. Excepturi, maxime
                    quisquam? Quaerat natus dolorem explicabo repudiandae soluta
                    quidem.
                  </p>
                  <div className="row g-0 cdt mb-4">
                    <div className="col-3">
                      <h1 className="display-6" id="cdt-days" />
                    </div>
                    <div className="col-3">
                      <h1 className="display-6" id="cdt-hours" />
                    </div>
                    <div className="col-3">
                      <h1 className="display-6" id="cdt-minutes" />
                    </div>
                    <div className="col-3">
                      <h1 className="display-6" id="cdt-seconds" />
                    </div>
                  </div>
                  <a className="btn btn-primary py-2 px-4" href="">
                    Explorar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center fadeIn" style={{ maxWidth: 600 }}>
            <h1 className="text-primary mb-3">
              <span className="fw-light text-dark">Oferta de</span> bailes
              tropicales
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 fadeIn">
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
                  <small>(99)</small>
                </div>
                <a href="" className="h6 d-inline-block mb-2">
                  Iniciación a los bailes de salón
                </a>
                <h5 className="text-primary mb-3">$8000 a $40000</h5>
                <a href="" className="btn btn-outline-primary px-3">
                  Detalles
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 fadeIn">
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
                  <small>(99)</small>
                </div>
                <a href="" className="h6 d-inline-block mb-2">
                  Bolero
                </a>
                <h5 className="text-primary mb-3">$8000 a $40000</h5>
                <a href="" className="btn btn-outline-primary px-3">
                  Detalles
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 fadeIn">
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
                  <small>(99)</small>
                </div>
                <a href="" className="h6 d-inline-block mb-2">
                  Tango
                </a>
                <h5 className="text-primary mb-3">$8000 a $40000</h5>
                <a href="" className="btn btn-outline-primary px-3">
                  Detalles
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 fadeIn">
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
                  <small>(99)</small>
                </div>
                <a href="" className="h6 d-inline-block mb-2">
                  Paso Doble
                </a>
                <h5 className="text-primary mb-3">$8000 a $40000</h5>
                <a href="" className="btn btn-outline-primary px-3">
                  Detalles
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bailes de Salónn */}
      {/* Newsletter Start */}
      <div className="container-fluid newsletter bg-primary py-5 my-5">
        <div className="container py-5">
          <div className="mx-auto text-center fadeIn" style={{ maxWidth: 600 }}>
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
            <div className="col-md-7 fadeIn">
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
      {/* Blog Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center fadeIn" style={{ maxWidth: 600 }}>
            <h1 className="text-primary mb-3">
              <span className="fw-light text-dark">De nuestros</span> Artículos
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 fadeIn">
              <div className="blog-item border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/tipos-image.jpg"
                  alt=""
                />
                <a href="" className="h5 lh-base d-inline-block">
                  Tipos de baile
                </a>
                <div className="d-flex text-black-50 mb-2">
                  <div className="pe-3">
                    <small className="fa fa-eye me-1" />
                    <small>9999 Vistas</small>
                  </div>
                  <div className="pe-3">
                    <small className="fa fa-comments me-1" />
                    <small>9999 Comentarios</small>
                  </div>
                </div>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aliquet, erat non malesuada consequat.
                </p>
                <a href="" className="btn btn-outline-primary px-3">
                  Leer más
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 fadeIn">
              <div className="blog-item border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/baile-salud-image.jpg"
                  alt=""
                />
                <a href="" className="h5 lh-base d-inline-block">
                  Bailar y sus beneficios a la salud
                </a>
                <div className="d-flex text-black-50 mb-2">
                  <div className="pe-3">
                    <small className="fa fa-eye me-1" />
                    <small>9999 Vistas</small>
                  </div>
                  <div className="pe-3">
                    <small className="fa fa-comments me-1" />
                    <small>9999 Comentarios</small>
                  </div>
                </div>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aliquet, erat non malesuada consequat.
                </p>
                <a href="" className="btn btn-outline-primary px-3">
                  Leer más
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 fadeIn">
              <div className="blog-item border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/ciencia-baile.jpg"
                  alt=""
                />
                <a href="" className="h5 lh-base d-inline-block">
                  La ciencia detrás del baile
                </a>
                <div className="d-flex text-black-50 mb-2">
                  <div className="pe-3">
                    <small className="fa fa-eye me-1" />
                    <small>9999 Vistas</small>
                  </div>
                  <div className="pe-3">
                    <small className="fa fa-comments me-1" />
                    <small>9999 Comentarios</small>
                  </div>
                </div>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aliquet, erat non malesuada consequat.
                </p>
                <a href="" className="btn btn-outline-primary px-3">
                  Leer más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
      {/* Footer Start */}
      <div className="container-fluid bg-white footer">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 fadeIn">
              <a href="index.html" className="d-inline-block mb-3">
                <h2 className="text-white">
                  <img id="logo-texto" src="assets/img/logo_texto.png" alt="" />
                </h2>
              </a>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                aliquet, erat non malesuada consequat, nibh erat tempus risus,
                vitae porttitor purus nisl vitae purus.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 fadeIn">
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
                <a className="btn btn-square btn-outline-primary me-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square btn-outline-primary me-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square btn-outline-primary me-1" href="">
                  <i className="fab fa-instagram" />
                </a>
                <a className="btn btn-square btn-outline-primary me-1" href="">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 fadeIn">
              <h5 className="mb-4">Nuestros Productos</h5>
              <a className="btn btn-link" href="">
                Iniciación
              </a>
              <a className="btn btn-link" href="">
                Merengue
              </a>
              <a className="btn btn-link" href="">
                Porro
              </a>
              <a className="btn btn-link" href="">
                Salsa
              </a>
              <a className="btn btn-link" href="">
                Bachata
              </a>
              <a className="btn btn-link" href="">
                Tango
              </a>
              <a className="btn btn-link" href="">
                Bolero
              </a>
            </div>
            <div className="col-md-6 col-lg-3 fadeIn">
              <h5 className="mb-4">Navegación</h5>
              <a className="btn btn-link" href="">
                Sobre nosotros
              </a>
              <a className="btn btn-link" href="">
                Contáctanos
              </a>
              <a className="btn btn-link" href="">
                Política de privacidad
              </a>
              <a className="btn btn-link" href="">
                Términos &amp; Condiciones
              </a>
            </div>
          </div>
        </div>
        <div className="container fadeIn">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <a className="border-bottom" href="#">
                  ©2023 Konguete
                </a>
                , Todos los derechos reservados.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Ayuda</a>
                  <a href="">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </>
  );
}

export default HomePage;
