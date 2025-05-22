"use client";
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Main from '@/components/Main';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile when component mounts and when window resizes
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Close sidebar when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsSidebarOpen(false);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex">
      {/* Overlay for mobile - only visible when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar - always in DOM but visibility changes */}
      <Sidebar isMobile={isMobile} isOpen={isSidebarOpen} />
      
      {/* Main content */}
      <Main toggleSidebar={toggleSidebar} isMobile={isMobile} />
    </div>
  );
}