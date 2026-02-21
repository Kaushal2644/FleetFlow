import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function VehicleRegistry() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);
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
            <div onClick={goDash} className="cursor-pointer">Dashboard</div>
            <div className="text-yellow-300 font-semibold">
              Vehicle Registry
            </div>
            <div onClick={goDispatch} className="cursor-pointer">
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
        {/* MENU BUTTON */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mb-6 px-4 py-2 bg-[#1b6c8e] text-white rounded-lg"
        >
          ☰ Menu
        </button>

        <h1 className="text-3xl font-bold mb-6">Vehicle Registry</h1>

        {/* TOP SEARCH BAR */}
        <div className="bg-white rounded-2xl shadow p-4 mb-4">
          <div className="flex gap-3">
            <input
              placeholder="Search bar ......"
              className="flex-1 border rounded-lg px-4 py-2 bg-slate-50"
            />
            <button className="border px-4 py-2 rounded-lg">Group by</button>
            <button className="border px-4 py-2 rounded-lg">Filter</button>
            <button className="border px-4 py-2 rounded-lg">Sort by</button>

            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              + New Vehicle
            </button>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="grid grid-cols-3 gap-6">
          {/* FORM */}
          {showForm && (
            <div className="bg-white rounded-2xl shadow p-6 col-span-1">
              <h3 className="text-lg font-semibold mb-4">
                New Vehicle Registration
              </h3>

              <div className="space-y-3">
                <input
                  placeholder="License Plate"
                  className="w-full border rounded-lg p-2"
                />
                <input
                  placeholder="Max Payload"
                  className="w-full border rounded-lg p-2"
                />
                <input
                  placeholder="Initial Odometer"
                  className="w-full border rounded-lg p-2"
                />
                <input
                  placeholder="Type"
                  className="w-full border rounded-lg p-2"
                />
                <input
                  placeholder="Model"
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                  Save
                </button>
              </div>
            </div>
          )}

          {/* TABLE */}
          <div
            className={`bg-white rounded-2xl shadow p-6 ${
              showForm ? "col-span-2" : "col-span-3"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4">
              Registered Vehicles
            </h3>

            <table className="w-full">
              <thead>
                <tr className="text-pink-600 text-left">
                  <th>NO</th>
                  <th>Plate</th>
                  <th>Model</th>
                  <th>Type</th>
                  <th>Capacity</th>
                  <th>Odometer</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {/* EMPTY TABLE */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}