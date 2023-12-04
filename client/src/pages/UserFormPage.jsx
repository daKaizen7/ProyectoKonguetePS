import { useForm } from "react-hook-form";
import "../css/login.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useUser } from "../context/UsersContext";
import { Link, useParams,useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserFormPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { createUser, getUser, updateUser, errors: registerErrors } = useUser();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      if (params.id) {
        const user = await getUser(params.id);
        console.log(user);
        setValue("username", user.username);
        setValue("email", user.email);
        setValue("password", user.password);
        setValue("confirmPassword", user.password);
        setValue("role", user.role);
      }
    };
    loadUser();
  }, []);

  const onSubmit = handleSubmit(async (values) => {
    if (params.id) {
      updateUser(params.id, values);
      navigate("/admin")
    } else {
      createUser(values);
    }
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
                    <h4 className="card-title">Crear Usuario</h4>
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
                        <input
                          type="text"
                          {...register("role", { required: true })}
                          placeholder="Rol"
                        />
                      </div>
                      {errors.role && (
                        <span className="text-danger">
                          El rol es obligatorio
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

                      <Link to="/admin">
                        <button className="mt-4 text-center">Volver</button>
                      </Link>
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

export default UserFormPage;
