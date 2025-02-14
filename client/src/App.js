import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./middleware/AuthContext";
import Login from "./auth/Login";
import Landing from "./Landing";
import Registration from "./auth/Registration";
import Unauthorized from "./autentication/Unauthorized";
import AdminProtectedRoute from "./Routes/AdminProtectedRoute";
import SuperAdminProtectedRoute from "./Routes/SuperAdminProtectedRoute";
import StaffProtectedRoute from "./Routes/StaffProtectedRoute";
import AdminRoutes from "./Routes/AdminRoute";
import SuperAdminRoute from "./Routes/SuperAdminRoute";
import StaffRoute from "./Routes/StaffRoute";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/access-denied" element={<Unauthorized />} />
  
          <Route path="/admin/*" element={<AdminProtectedRoute />}>
            <Route path="*" element={<AdminRoutes />} />
          </Route>
          <Route path="/superadmin/*" element={<SuperAdminProtectedRoute />}>
            <Route path="*" element={<SuperAdminRoute />} />
          </Route>

          <Route path="/student/*" element={<StaffProtectedRoute />}>
            <Route path="*" element={<StaffRoute />} />
          </Route>


          
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
