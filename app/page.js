export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-black/40 backdrop-blur-xl border-r border-gray-800 p-6 hidden md:flex flex-col">
        <h1 className="text-2xl font-bold mb-10 text-purple-400">
          Ray D' Vinci
        </h1>

        <nav className="space-y-4">
          <a className="block hover:text-purple-400 transition">Dashboard</a>
          <a className="block hover:text-purple-400 transition">Analytics</a>
          <a className="block hover:text-purple-400 transition">Projects</a>
          <a className="block hover:text-purple-400 transition">Settings</a>
        </nav>

        <div className="mt-auto text-sm text-gray-500">
          © 2026 Ray D' Vinci
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Dashboard Overview</h2>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl transition">
            + New Project
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card title="Revenue" value="$24,389" change="+12%" />
          <Card title="Active Users" value="1,204" change="+5%" />
          <Card title="Projects" value="32" change="+3 new" />
        </div>

        {/* Activity Section */}
        <div className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>

          <ul className="space-y-4">
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span>New client signed</span>
              <span className="text-gray-400 text-sm">2h ago</span>
            </li>
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span>Dashboard updated</span>
              <span className="text-gray-400 text-sm">5h ago</span>
            </li>
            <li className="flex justify-between">
              <span>Server upgraded</span>
              <span className="text-gray-400 text-sm">1d ago</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

function Card({ title, value, change }) {
  return (
    <div className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition">
      <h4 className="text-gray-400 text-sm">{title}</h4>
      <p className="text-3xl font-bold mt-2">{value}</p>
      <span className="text-green-400 text-sm">{change}</span>
    </div>
  );
}
