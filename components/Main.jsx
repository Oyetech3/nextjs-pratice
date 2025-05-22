export default function Main({ toggleSidebar, isMobile }) {
    return (
      <div className="flex-1 bg-gray-100">
        <header className="bg-white shadow">
          <div className="px-6 py-4 flex justify-between items-center">
            {isMobile && (
              <button 
                onClick={toggleSidebar}
                className="text-2xl focus:outline-none"
              >
                ☰
              </button>
            )}
            <h1 className="text-xl font-semibold">Main Content</h1>
            <div>User Profile</div>
          </div>
        </header>
        
        <main className="p-6">
          <div className="bg-white rounded-lg shadow mb-6 p-6">
            <h2 className="text-xl font-semibold mb-4">Welcome to the Dashboard</h2>
            <p className="mb-2">This is a responsive layout with a sidebar that automatically shows on desktop and hides on mobile.</p>
            <p>On mobile devices, use the menu button (☰) to toggle the sidebar.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2">
              <li>- Responsive design that adapts to screen size</li>
              <li>- Sidebar automatically visible on larger screens</li>
              <li>- Sidebar hidden behind toggle menu on mobile</li>
              <li>- Built with Next.js 15 and Tailwind CSS</li>
            </ul>
          </div>
        </main>
      </div>
    );
  }