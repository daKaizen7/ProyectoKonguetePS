import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../js/main.js";
import "../css/styles.css";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <>
      {/* 404 Start */}
      <div className="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary" />
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <Link className="btn btn-primary py-2 px-4" to="/index">
                Volver a la página de inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* 404 End */}
      {/* Template Javascript */}
    </>
  );
}

export default Page404;
