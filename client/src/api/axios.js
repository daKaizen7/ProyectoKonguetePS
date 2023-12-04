//Archivo para configurar Axios
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/",
  withCredentials: true,
}); //Nueva configuración de Axios

export default instance;
