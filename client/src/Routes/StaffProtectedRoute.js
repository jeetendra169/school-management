import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth.js";
import axios from "axios";

import Loader from '../loader/Loader';

export const StaffProtectedRoute = () => {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      
      // Ensure token exists before setting state
      if (!auth?.token && parsedUser?.token) {
        setAuth(parsedUser);
      }
    }
  }, [setAuth, auth?.token]);

  useEffect(() => {
    const authCheck = async () => {
      if (!auth?.token) return; // Wait until token is set

      try {
        const response = await axios.get("/api/v1/auth/student-auth", {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });

        console.log("Auth Check Response:", response);
        if (response.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Error during authentication check", error);
        setOk(false);
      }
    };

    authCheck();
  }, [auth?.token]);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
      if (!ok) {
        navigate("/access-denied");
      }
    }, 2000);

    return () => clearTimeout(loaderTimeout);
  }, [ok, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return ok ? <Outlet /> : null;
};

export default StaffProtectedRoute;

