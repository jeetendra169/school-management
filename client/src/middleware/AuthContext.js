import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) setRole(storedRole);
  }, []);

  const login = (userRole) => {
    localStorage.setItem("role", userRole);
    setRole(userRole);
    navigate(getRedirectPath(userRole));
  };

  const logout = () => {
    localStorage.removeItem("role");
    setRole(null);
    navigate("/login");
  };

  const getRedirectPath = (role) => {
    switch (role) {
      case "0": return "/student";
      case "1": return "/admin";
      case "2": return "/staff";
      case "3": return "/parent";
      default: return "/unauthorized";
    }
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
