import { useForm } from "react-hook-form";
import "../css/login.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singup, isAuthenticated, errors: registerErrors } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);
  const onSubmit = handleSubmit(async (values) => {
    singup(values);
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
                      {registerErrors.map((error, i) => (
                        <div
                          className="alert alert-warning"
                          role="alert"
                          key={i}
                        >
                          {error}
                        </div>
                      ))}
                    </div>
                    <h4 className="card-title">Registrarse</h4>
                    <form onSubmit={onSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          {...register("username", { required: true })}
                          placeholder="Nombre de usuario"
                        />
                      </div>
                      {errors.username && (
                        <span className="text-danger">
                          El usuario es obligatorio
                        </span>
                      )}
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
                      <div className="form-group">
                        <input
                          type="password"
                          {...register("confirmPassword", { required: true })}
                          placeholder="Confirmar contraseña"
                        />
                      </div>
                      {errors.confirmPassword && (
                        <span className="text-danger">
                          Las contraseñas no coinciden
                        </span>
                      )}
                      <div className="form-group">
                        <div className="custom-checkbox custom-control">
                          <input
                            type="checkbox"
                            {...register("agree", { required: true })}
                          />
                          <label
                            htmlFor="agree"
                            className="custom-control-label"
                          >
                            Acepto los{" "}
                            <Link to="/#">Términos y Condiciones</Link>
                          </label>
                        </div>
                      </div>
                      {errors.agree && (
                        <span className="text-danger">
                          Acepta los términos y condiciones
                        </span>
                      )}
                      <div className="form-group m-0">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block custom-button"
                        >
                          Registrar
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        ¿Ya tienes una cuenta? <Link to="/login">Ingresar</Link>
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

export default RegisterPage;
