import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./middleware/AuthContext";
import Login from "./auth/Login";
import Landing from "./Landing";
import Registration from "./auth/Registration";


const AdminDashboard = () => <div className="p-5 text-center">Admin Dashboard</div>;
const StaffDashboard = () => <div className="p-5 text-center">Staff Dashboard</div>;
const StudentDashboard = () => <div className="p-5 text-center">Student Dashboard</div>;
const ParentDashboard = () => <div className="p-5 text-center">Parent Dashboard</div>;
const Unauthorized = () => <div className="p-5 text-center text-red-500">Access Denied</div>;

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/staff" element={<StaffDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/parent" element={<ParentDashboard />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
