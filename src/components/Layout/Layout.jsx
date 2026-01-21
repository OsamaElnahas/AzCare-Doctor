import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import { Menu, X } from "lucide-react";

const Layout = ({ title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

      {/* {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-white opacity-70 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )} */}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header title={title} toggleSidebar={toggleSidebar} />

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
