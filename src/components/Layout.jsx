import React from "react";
import TopNavBar from "./TopNavbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavBar />
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content Area */}
        <main className="flex-1 p-4 h-screen bg-green-700 ml-56 overflow-auto">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
