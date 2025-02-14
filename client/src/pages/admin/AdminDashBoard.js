import React from "react";

import MainContentDash from "./MainContentDash";
import Sidebar from "./Sidebar";

function AdminDashBoard() {
  return (
    <>
      <div>
        <div className="flex h-screen">
          {/* sidebar content start */}
          <Sidebar />

          {/* main content start */}
          <MainContentDash />

          {/* main content end */}
        </div>
      </div>
    </>
  );
}

export default AdminDashBoard;
