'use client';

import { useState } from 'react';
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 w-full h-20 py-5 px-6 md:px-12 xl:px-24 bg-gray-200 flex justify-between items-center z-30">
        <div className="flex items-center gap-5">
          {/* Menu Toggle Button */}
          <div 
            onClick={toggleSidebar} 
            className="cursor-pointer"
          >
            {isSidebarOpen ? (
              <RiCloseLine size={30} className="text-black" />
            ) : (
              <RiMenu2Line size={30} className="text-black" />
            )}
          </div>
          <div className="text-xl font-bold">LOGO</div>
        </div>
        <div>Notification</div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex flex-1 relative">
        {/* Sidebar - conditionally rendered based on state */}
        <div 
          className={`${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed md:static top-20 h-[calc(100vh-5rem)] w-64 bg-gray-100 transition-transform duration-300 ease-in-out z-40`}
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6">Sidebar</h2>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="hover:text-blue-500">Dashboard</a>
              <a href="#" className="hover:text-blue-500">Profile</a>
              <a href="#" className="hover:text-blue-500">Settings</a>
              <a href="#" className="hover:text-blue-500">Help</a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className={`flex-1 p-6 md:p-12 transition-all duration-300`}>
          {children}
        </main>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
}