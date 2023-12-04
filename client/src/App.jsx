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
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import UserFormPage from "./pages/UserFormPage";
import Admin from "./pages/Admin";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./api/components/ProtectedRoute";
import { ProtectedAdminRoute } from "./api/components/ProtectedAdminRoute";
import { UserProvider } from "./context/UsersContext";
import { useAuth } from "./context/AuthContext";
import "./css/styles.css";

function App() {
  
  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="/bailes-salon" element={<Bailes_Salon />} />
            <Route path="/bailes-tropicales" element={<Bailes_Tropicales />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/logout" element={<Logout />} />

            <Route element={<ProtectedAdminRoute />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/add-user" element={<UserFormPage />} />
              <Route path="/admin/:id" element={<UserFormPage />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
