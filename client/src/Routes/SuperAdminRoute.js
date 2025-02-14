import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../pages/admin/Sidebar";
import MainContentDash from "../pages/admin/MainContentDash";
;


const SuperAdminRoute = () => {
 

  return (
    <div className="grid-container">
 
      <Sidebar/>
      <Routes>
        <Route path="/" element={<MainContentDash />} />
 

        
       

      </Routes>
    </div>
  );
};

export default SuperAdminRoute;
