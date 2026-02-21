import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function VehicleRegistry() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarRef = useRef(null);

  // CLOSE SIDEBAR ON OUTSIDE CLICK
  useEffect(() => {
    const handler = (e) => {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [sidebarOpen]);

  const handleLogout = () => navigate("/");
  const goDash = () => navigate("/dashboard");
  const goDispatch = () => navigate("/dispatch");

  return (
    <div className="flex min-h-screen bg-[#f3f7fb] relative">

      {/* SIDEBAR */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-br
        from-[#2e86ab] to-[#1b6c8e] p-6 text-white flex flex-col justify-between
        transition-transform duration-300 z-40
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div>
          <div className="text-2xl font-bold mb-10">
            🚚 Fleet<span className="text-yellow-300">Flow</span>
          </div>

          <nav className="space-y-4 text-lg">
            <div onClick={goDash} className="cursor-pointer hover:opacity-80">
              Dashboard
            </div>
            <div className="text-yellow-300 font-semibold">
              Vehicle Registry
            </div>
            <div onClick={goDispatch} className="cursor-pointer hover:opacity-80">
              Trip Dispatcher
            </div>
            <div onClick={() => navigate("/maintenance")}>Maintenance</div>
            <div>Trip & Expense</div>
            <div>Performance</div>
            <div>Analytics</div>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="bg-white text-[#1b6c8e] py-2 rounded-xl font-semibold"
        >
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main
        className={`flex-1 p-8 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* TOGGLE BUTTON */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mb-6 px-4 py-2 bg-[#1b6c8e] text-white rounded-lg"
        >
          ☰ Menu
        </button>

        <h1 className="text-3xl font-bold mb-6">Vehicle Registry</h1>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Registered Vehicles</h3>

          {/* EMPTY TABLE */}
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-slate-500">
                <th>Vehicle ID</th>
                <th>Type</th>
                <th>Driver</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{/* EMPTY */}</tbody>
          </table>
        </div>
      </main>
    </div>
  );
}