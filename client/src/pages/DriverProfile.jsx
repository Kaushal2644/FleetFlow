import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DriverProfile() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);

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

          {/* MENU BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-[#1b6c8e] text-white rounded-lg"
          >
            ☰ Menu
          </button>

          <h1 className="text-2xl font-bold text-slate-800">
            Vehicle Registry
          </h1>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-6">

          {/* SEARCH + FILTER BAR */}
          <div className="bg-white rounded-2xl shadow p-4 mb-6">
            <div className="flex gap-3">
              <input
                placeholder="Search bar ......"
                className="flex-1 border rounded-lg px-4 py-2 bg-slate-50"
              />
              <button className="border px-4 py-2 rounded-lg">
                Group by
              </button>
              <button className="border px-4 py-2 rounded-lg">
                Filter
              </button>
              <button className="border px-4 py-2 rounded-lg">
                Sort by...
              </button>
            </div>
          </div>

          {/* TABLE (EMPTY AS REQUESTED) */}
          <div className="bg-white rounded-2xl shadow p-6">
            <table className="w-full text-left">
              <thead>
                <tr className="text-pink-600">
                  <th>Name</th>
                  <th>License#</th>
                  <th>Expiry</th>
                  <th>Completion Rate</th>
                  <th>Safety Score</th>
                  <th>Complaints</th>
                </tr>
              </thead>

              <tbody>
                {/* intentionally EMPTY */}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}