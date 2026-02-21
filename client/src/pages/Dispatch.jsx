import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Dispatch() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarRef = useRef(null);

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

  return (
    <div className="flex min-h-screen bg-[#f3f7fb]">
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
            <div onClick={goDash} className="cursor-pointer">
              Dashboard
            </div>
            <div onClick={goVehicle} className="cursor-pointer">
              Vehicle Registry
            </div>
            <div className="text-yellow-300 font-semibold">Trip Dispatcher</div>
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
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mb-6 px-4 py-2 bg-[#1b6c8e] text-white rounded-lg"
        >
          ☰ Menu
        </button>

        <h1 className="text-3xl font-bold mb-6">
          Trip Dispatcher & Management
        </h1>
        {/* ================= SEARCH + CONTROLS (ADDED) ================= */}
        <div className="bg-white rounded-2xl shadow p-4 mb-5">
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

        {/* EMPTY TABLE */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <table className="w-full">
            <thead>
              <tr className="text-pink-600">
                <th>Trip</th>
                <th>Fleet Type</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{/* EMPTY */}</tbody>
          </table>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow p-6 max-w-3xl">
          <h3 className="text-green-600 font-semibold mb-4">New Trip Form</h3>

          <div className="space-y-3">
            <input
              className="w-full border p-2 rounded-lg"
              placeholder="Select Vehicle"
            />
            <input
              className="w-full border p-2 rounded-lg"
              placeholder="Cargo Weight"
            />
            <input
              className="w-full border p-2 rounded-lg"
              placeholder="Select Driver"
            />
            <input
              className="w-full border p-2 rounded-lg"
              placeholder="Origin Address"
            />
            <input
              className="w-full border p-2 rounded-lg"
              placeholder="Destination"
            />

            <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
              Confirm & Dispatch
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}