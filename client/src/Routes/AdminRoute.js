import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../pages/admin/Sidebar";
import MainContentDash from "../pages/admin/MainContentDash";
import TestForComponet from "../pages/admin/TestForComponet";

const AdminRoute = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar should always be visible */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route index element={<MainContentDash />} />
          <Route path="admindash" element={<MainContentDash />} />
          <Route path="activity" element={<TestForComponet />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoute;
