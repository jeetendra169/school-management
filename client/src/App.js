import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";

const AdminDashboard = () => <div className="p-5 text-center">Admin Dashboard</div>;
const StaffDashboard = () => <div className="p-5 text-center">Staff Dashboard</div>;
const StudentDashboard = () => <div className="p-5 text-center">Student Dashboard</div>;
const ParentDashboard = () => <div className="p-5 text-center">Parent Dashboard</div>;
const Unauthorized = () => <div className="p-5 text-center text-red-500">Access Denied</div>;

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-[#caf2f7] min-h-screen flex flex-col items-center">
          <nav className="p-4 bg-gray-800 text-white w-full flex justify-center space-x-4">
            <a href="/admin">Admin</a>
            <a href="/staff">Staff</a>
            <a href="/student">Student</a>
            <a href="/parent">Parent</a>
          </nav>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            <Route path="/admin" element={<PrivateRoute allowedRoles={["1"]}><AdminDashboard /></PrivateRoute>} />
            <Route path="/staff" element={<PrivateRoute allowedRoles={["2"]}><StaffDashboard /></PrivateRoute>} />
            <Route path="/student" element={<PrivateRoute allowedRoles={["0"]}><StudentDashboard /></PrivateRoute>} />
            <Route path="/parent" element={<PrivateRoute allowedRoles={["3"]}><ParentDashboard /></PrivateRoute>} />

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
