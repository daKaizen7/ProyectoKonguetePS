import "../css/login.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useUser } from "../context/UsersContext";
import { Link } from "react-router-dom";

function Admin() {
  const { users, getUsers, deleteUser } = useUser();

  const handleClick = () => getUsers();

  return (
    <>
      <div className="container-xl px-4 mt-4">
        {/* Account page navigation*/}
        <nav className="nav nav-borders">
          <a className="nav-link active ms-0" target="__blank">
            Admin
          </a>
        </nav>
        <hr className="mt-0 mb-4" />

        <div className="row">
          <div className="col-xl-8">
            {/* Account details card*/}
            <div className="card mb-4">
              <div className="card-body">
                {/* Usuarios button*/}
                <button
                  onClick={handleClick}
                  className="btn btn-primary"
                  type="button"
                >
                  Ver Usuarios
                </button>
                <br></br>
                <div>
                  {!!users
                    ? users.map((user) => (
                        <div user={user._} key={user.id}>
                          <h1>{`Username: ${user.username}`}</h1>
                          <div className="d-flex align-items-center">
                            <button onClick={() => deleteUser(user.id)}>
                              Eliminar
                            </button>
                            <Link to={`/admin/${user.id}`}>
                              <button>Editar</button>
                            </Link>
                          </div>
                          <p>{`Correo: ${user.email}`}</p>
                          <p>{`Contraseña desencriptada: ${user.password}`}</p>
                        </div>
                      ))
                    : null}
                </div>
                <Link to="/add-user">
                  <button className="btn btn-primary" type="button">
                    Crear Usuario
                  </button>
                </Link>
                <br></br>
                <Link to="/">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block custom-button align-self-end"
                  >
                    Volver
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
