import { useForm } from "react-hook-form";
import "../css/login.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/AuthContext";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { singin, errors: singinErrors, isAuthenticated} = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);


  const onSubmit = handleSubmit((data) => {
    singin(data);
  });

  return (
    <>
      <section className="login-page">
        <div className="h-100 login-page">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="brand">
                  <img
                    src="../../public/assets/img/logo_texto.png"
                    alt="bootstrap 5 login page"
                  />
                </div>
                <div className="card fat">
                  <div className="card-body">
                    <div className="error-box">
                      {singinErrors.map((error, i) => (
                        <div
                          className="alert alert-warning"
                          role="alert"
                          key={i}
                        >
                          {error}
                        </div>
                      ))}
                    </div>
                    <h4 className="card-title">Ingresar</h4>
                    <form onSubmit={onSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          {...register("email", { required: true })}
                          placeholder="Correo"
                        />
                      </div>
                      {errors.email && (
                        <span className="text-danger">
                          El correo es obligatorio
                        </span>
                      )}
                      <div className="form-group">
                        <input
                          type="password"
                          {...register("password", { required: true })}
                          placeholder="Contraseña"
                        />
                      </div>
                      {errors.password && (
                        <span className="text-danger">
                          La contraseña es obligatoria
                        </span>
                      )}

                      <div className="form-group m-0">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block custom-button-ingreso"
                        >
                          Ingresar
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        ¿No tienes una cuenta?{" "}
                        <Link to="/register">Registrarse</Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="footer">Copyright © 2023 — Konguete</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
