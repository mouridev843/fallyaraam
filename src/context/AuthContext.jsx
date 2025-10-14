import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// 👇 Créez un contexte d'authentification
export const AuthProvider = ({ children }) => {
  // 👇 État pour savoir si l'utilisateur est authentifié
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // 👇 État pour savoir si l'utilisateur est admin
  const [user, setUser] = useState(null); // 👈 On garde les infos utilisateur (dont le rôle)
  const navigate = useNavigate();

  // 👇 Vérifie si l'utilisateur est déjà authentifié au chargement du composant
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);
  // 👇 Fonction de connexion
  const login = (token, userInfo) => {
    // 👈 Stocker le token et les infos utilisateur dans le localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userInfo)); // 👈 Stocker les infos utilisateur
    // 👈 Mettre à jour l'état d'authentification
    setIsAuthenticated(true);
    setUser(userInfo);
    // 👈 Rediriger l'utilisateur vers la page appropriée
    if (userInfo.role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/"); // ou autre route utilisateur
    }
  };
  // 👇 Fonction de déconnexion
  const logout = () => {
    // 👈 Supprimer le token et les infos utilisateur du localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
