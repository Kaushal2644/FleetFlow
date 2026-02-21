import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3f7fb]">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* MAIN CONTENT */}
      <div
        className={`
          transition-all duration-300
          ${isOpen ? "ml-64" : "ml-0"}
        `}
      >
        {/* TOP BAR */}
        <div className="p-4 bg-white shadow flex items-center gap-4">
          {/* TOGGLE BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="mb-6 px-4 py-2 bg-[#1b6c8e] text-white rounded-lg"
          >
            ☰ Menu
          </button>
          <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>{" "}
        </div>

        {/* PAGE CONTENT */}
        <div className="p-8 space-y-6">
          {/* SEARCH + FILTER BAR */}
          <div className="bg-white rounded-2xl shadow p-4">
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

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-3">
            <button className="border border-blue-500 text-blue-600 px-5 py-2 rounded-xl font-semibold">
              New Trip
            </button>

            <button className="border border-blue-500 text-blue-600 px-5 py-2 rounded-xl font-semibold">
              New Vehicle
            </button>
          </div>

          {/* KPI CARDS */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-green-600 text-xl font-semibold">
                Active Fleet
              </h3>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-green-600 text-xl font-semibold">
                Maintenance Alert
              </h3>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-green-600 text-xl font-semibold">
                Pending Cargo
              </h3>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>
          </div>

          {/* TABLE SECTION */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-pink-600 text-lg">
                  <th className="p-4">Trip</th>
                  <th className="p-4">Vehicle</th>
                  <th className="p-4">Driver</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>

              <tbody>{/* EMPTY TABLE AS IMAGE */}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}