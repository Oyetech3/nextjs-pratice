export default function Sidebar({ isMobile, isOpen }) {
    return (
      <div 
        className={`
          bg-gray-800 text-white w-64 p-6
          ${isMobile 
            ? `fixed top-0 left-0 h-full z-30 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
            : 'relative'
          }
        `}
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          
          <nav className="space-y-2">
            <SidebarItem text="Home" />
            <SidebarItem text="Profile" />
            <SidebarItem text="Analytics" />
            <SidebarItem text="Settings" />
            <SidebarItem text="Help" />
          </nav>
        </div>
      </div>
    );
  }
  
  function SidebarItem({ text }) {
    return (
      <div className="px-4 py-3 rounded hover:bg-gray-700 cursor-pointer transition-colors">
        {text}
      </div>
    );
  }
  