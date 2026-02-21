import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Maintenance() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const sidebarRef = useRef(null);

  // close sidebar on outside click
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
  const goVehicle = () => navigate("/vehicleregistry");
  const goDispatch = () => navigate("/dispatch");

  return (
    <div className="flex min-h-screen bg-[#f3f7fb]">

      {/* ================= SIDEBAR ================= */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen w-64
        bg-gradient-to-br from-[#2e86ab] to-[#1b6c8e]
        p-6 text-white flex flex-col justify-between
        transition-transform duration-300 z-40
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div>
          <div className="text-2xl font-bold mb-10">
            🚚 Fleet<span className="text-yellow-300">Flow</span>
          </div>

          <nav className="space-y-4 text-lg">
            <div onClick={goDash} className="cursor-pointer">Dashboard</div>
            <div onClick={goVehicle} className="cursor-pointer">Vehicle Registry</div>
            <div onClick={goDispatch} className="cursor-pointer">Trip Dispatcher</div>
            <div className="text-yellow-300 font-semibold">Maintenance</div>
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

      {/* ================= MAIN ================= */}
      <main
        className={`flex-1 p-8 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* MENU BUTTON */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mb-6 px-4 py-2 bg-[#1b6c8e] text-white rounded-lg"
        >
          ☰ Menu
        </button>

        <h1 className="text-3xl font-bold mb-6">
          Maintenance & Service Logs
        </h1>

        {/* SEARCH BAR */}
        <div className="bg-white rounded-2xl shadow p-4 mb-4">
          <div className="flex gap-3">
            <input
              placeholder="Search bar ......"
              className="flex-1 border rounded-lg px-4 py-2 bg-slate-50"
            />
            <button className="border px-4 py-2 rounded-lg">Group by</button>
            <button className="border px-4 py-2 rounded-lg">Filter</button>
            <button className="border px-4 py-2 rounded-lg">Sort by</button>
          </div>
        </div>

        {/* CREATE BUTTON */}
        {!showForm && (
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowForm(true)}
              className="border border-blue-500 text-blue-600 px-5 py-2 rounded-xl font-semibold"
            >
              Create New Service
            </button>
          </div>
        )}

        {/* TABLE (EMPTY) */}
        {!showForm && (
          <div className="bg-white rounded-2xl shadow overflow-hidden mb-6">
            <table className="w-full text-left">
              <thead>
                <tr className="text-pink-600 border-b">
                  <th className="p-4">Log ID</th>
                  <th className="p-4">Vehicle</th>
                  <th className="p-4">Issue/Service</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Cost</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>{/* EMPTY */}</tbody>
            </table>
          </div>
        )}

        {/* FORM (ONLY WHEN BUTTON CLICKED) */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow p-6 max-w-xl">
            <h3 className="text-green-600 font-semibold mb-4">
              New Service
            </h3>

            <div className="space-y-3">
              <input
                placeholder="Vehicle Name"
                className="w-full border p-2 rounded-lg"
              />
              <input
                placeholder="Issue / Service"
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="date"
                className="w-full border p-2 rounded-lg"
              />

              <div className="flex gap-3 pt-2">
                <button className="border border-green-500 text-green-600 px-5 py-2 rounded-lg">
                  Create
                </button>

                <button
                  onClick={() => setShowForm(false)}
                  className="border border-red-500 text-red-500 px-5 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}