export default function Home() {
    return (
      <section className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>
        <p className="mb-6">
          This is an example page content. The sidebar can be toggled using the menu button.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-md">
            <h2 className="font-semibold mb-2">Statistics</h2>
            <p>Sample content for the dashboard</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <h2 className="font-semibold mb-2">Recent Activity</h2>
            <p>Sample content for the dashboard</p>
          </div>
        </div>
      </section>
    );
  }