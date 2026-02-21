import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function ExpenseFuel() {
  const [isOpen, setIsOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3f7fb]">

      {/* SIDEBAR */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* MAIN CONTENT */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* TOP BAR */}
        <div className="p-4 bg-white shadow flex items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-[#1b6c8e] text-white rounded-lg"
          >
            ☰ Menu
          </button>

          <h1 className="text-2xl font-bold">
            Expense & Fuel Logging
          </h1>
        </div>

        {/* PAGE */}
        <div className="p-8">

          {/* SEARCH BAR AREA */}
          <div className="bg-white rounded-2xl shadow p-4 mb-5">
            <div className="flex gap-3">
              <input
                placeholder="Search bar ......"
                className="flex-1 border rounded-lg px-4 py-2 bg-slate-50"
              />
              <button className="border px-4 py-2 rounded-lg">Group by</button>
              <button className="border px-4 py-2 rounded-lg">Filter</button>
              <button className="border px-4 py-2 rounded-lg">Sort by...</button>
            </div>
          </div>

          {/* HEADER + BUTTON */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowForm(true)}
              className="border-2 border-blue-500 text-blue-600 px-5 py-2 rounded-xl font-semibold hover:bg-blue-50"
            >
              Add an Expense
            </button>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="text-pink-600 text-lg">
                  <th className="p-4">Trip ID</th>
                  <th className="p-4">Driver</th>
                  <th className="p-4">Distance</th>
                  <th className="p-4">Fuel Expense</th>
                  <th className="p-4">Misc. Expense</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* EMPTY TABLE AS REQUESTED */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FORM (OPENS ONLY ON BUTTON CLICK) */}
      {showForm && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
            <h2 className="text-xl font-semibold mb-4">New Expense</h2>

            <div className="space-y-3">
              <input
                placeholder="Trip ID"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                placeholder="Driver"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                placeholder="Fuel Cost"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                placeholder="Misc Expense"
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}