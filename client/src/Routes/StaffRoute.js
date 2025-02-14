import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../pages/admin/Sidebar";
import MainContentDash from "../pages/admin/MainContentDash";

const StaffRoute = () => {
 

  return (
    <div className="flex h-screen">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<MainContentDash />} />
        {/* <Route path="/dash" element={<Home />} /> */}

        
      </Routes>
    </div>
  );
};

export default StaffRoute;
