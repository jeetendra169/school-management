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
import AdminDashBoard from "./pages/admin/AdminDashBoard";
import StaffDashBoard from "./pages/staff/StaffDashBoard";
import StudentDashBoard from "./pages/student/StudentDashBoard";
import ParentsDashboard from "./pages/parents/ParentsDashboard";



const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/admin" element={<AdminDashBoard />} />
          <Route path="/staff" element={<StaffDashBoard />} />
          <Route path="/student" element={<StudentDashBoard />} />
          <Route path="/parent" element={<ParentsDashboard />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
