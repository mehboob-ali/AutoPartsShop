import React, { useState } from 'react';
import TopNavBar from './TopNavbar';
import Sidebar from './Sidebar';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative min-h-screen flex">

      {/* Main Content Area */}
      <div className="flex-1">
        <TopNavBar onMenuClick={handleMenuClick} />
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />

        {/* Content Area */}
        <main className="p-8">
          <h1 className="text-3xl mb-6">Dashboard</h1>
          {/* Add your main content here */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
