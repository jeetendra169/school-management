import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(storedUser);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      console.log("response", response);
      const data = response.data;
      if (response.status === 200 && data.success) {
        // Store token

        alert(response.data.message);

        localStorage.setItem("token", response);

        // Store user data properly
        const userData = {
          data,
        };

        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);

        return data.role || 0; // Default to 0 if role is missing
      } else {
        throw new Error(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Something went wrong.");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
