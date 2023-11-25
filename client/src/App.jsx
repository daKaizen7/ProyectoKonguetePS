import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Contacto from "./pages/Contacto";
import Page404 from "./pages/Page404";
import Productos from "./pages/Productos";
import Bailes_Salon from "./pages/Bailes_Salon";
import Bailes_Tropicales from "./pages/Bailes_Tropicales";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./css/styles.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/bailes-salon" element={<Bailes_Salon />} />
          <Route path="/bailes-tropicales" element={<Bailes_Tropicales/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
