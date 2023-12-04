import { useForm } from "react-hook-form";
import "../css/login.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Profile() {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { profile, isAuthenticated, errors: singinErrors } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (data) => {
    profile();
  });
  return (
    <div className="container-xl px-4 mt-4">
      {/* Account page navigation*/}
      <nav className="nav nav-borders">
        <a className="nav-link active ms-0" target="__blank">
          Perfil
        </a>
      </nav>
      <hr className="mt-0 mb-4" />
      <div className="row">
        <div className="col-xl-8">
          {/* Account details card*/}
          <div className="card mb-4">
            <div className="card-header">Detalles de la cuenta</div>
            <div className="card-body">
              <form onSubmit={onSubmit}>
                {/* Form Group (username)*/}
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">
                    Username
                  </label>
                  <input
                    className="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="Nuevo username"
                  />
                </div>

                {/* Form Group (email address)*/}
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputEmailAddress">
                    Email address
                  </label>
                  <input
                    className="form-control"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Nuevo correo"
                  />
                </div>
                {/* Form Group (password)*/}
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputPassword">
                    Contraseña
                  </label>
                  <input
                    className="form-control"
                    id="inputPassword"
                    type="password"
                    placeholder="Nueva contraseña"
                  />
                </div>
                {/* Volver button*/}
                <button className="btn btn-primary" type="button">
                  Save changes
                </button>
                <br></br>
                <Link to="/logout">
                  <button className="btn btn-primary" type="button">
                    Cerrar Sesión
                  </button>
                </Link>
                <br></br>
                <Link to="/">
                  <button
                    className="btn btn-primary align-self-end"
                    type="button"
                  >
                    Volver{" "}
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
