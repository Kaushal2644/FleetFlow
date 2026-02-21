import { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

/* ================= DATA ================= */

const VEHICLE_DATA = [
  { id: "V001", model: "Tata Prima", distanceKm: 42000, fuelLiters: 8400, fuelCost: 1050000, maintenance: 420000, revenue: 7800000, acquisitionCost: 4800000 },
  { id: "V002", model: "Mahindra Bolero", distanceKm: 26000, fuelLiters: 3250, fuelCost: 420000, maintenance: 180000, revenue: 2600000, acquisitionCost: 1200000 },
  { id: "V003", model: "Ashok Leyland", distanceKm: 50000, fuelLiters: 9200, fuelCost: 1320000, maintenance: 520000, revenue: 8600000, acquisitionCost: 5200000 },
  { id: "V004", model: "Eicher Pro", distanceKm: 31000, fuelLiters: 4300, fuelCost: 530000, maintenance: 220000, revenue: 3400000, acquisitionCost: 1800000 },
  { id: "V005", model: "Tata Ace", distanceKm: 18000, fuelLiters: 1800, fuelCost: 220000, maintenance: 90000, revenue: 1500000, acquisitionCost: 900000 },
  { id: "V006", model: "Isuzu D-Max", distanceKm: 24000, fuelLiters: 2900, fuelCost: 350000, maintenance: 120000, revenue: 2100000, acquisitionCost: 1100000 },
  { id: "V007", model: "BharatBenz", distanceKm: 47000, fuelLiters: 8700, fuelCost: 1280000, maintenance: 470000, revenue: 8200000, acquisitionCost: 5000000 },
  { id: "V008", model: "Force Traveller", distanceKm: 20000, fuelLiters: 2500, fuelCost: 300000, maintenance: 110000, revenue: 1900000, acquisitionCost: 1300000 },
];

const MONTHLY = [
  { month: "Jun", revenue: 7000000, fuel: 1200000, maint: 450000 },
  { month: "Jul", revenue: 7600000, fuel: 1300000, maint: 480000 },
  { month: "Aug", revenue: 7900000, fuel: 1280000, maint: 500000 },
  { month: "Sep", revenue: 8200000, fuel: 1350000, maint: 520000 },
  { month: "Oct", revenue: 8600000, fuel: 1420000, maint: 560000 },
  { month: "Nov", revenue: 9100000, fuel: 1500000, maint: 590000 },
  { month: "Dec", revenue: 9500000, fuel: 1560000, maint: 620000 },
  { month: "Jan", revenue: 9900000, fuel: 1650000, maint: 650000 },
  { month: "Feb", revenue: 10400000, fuel: 1700000, maint: 700000 },
];

const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;

const calcROI = (rev, maint, fuel, cost) =>
  (((rev - maint - fuel) / cost) * 100).toFixed(1);

export default function Analytics() {
  const [month] = useState("February 2026");

  const totals = useMemo(
    () =>
      VEHICLE_DATA.reduce(
        (a, v) => ({
          revenue: a.revenue + v.revenue,
          fuel: a.fuel + v.fuelCost,
          maintenance: a.maintenance + v.maintenance,
        }),
        { revenue: 0, fuel: 0, maintenance: 0 }
      ),
    []
  );

  return (
    <div className="flex min-h-screen bg-[#f0f4f8]">

      {/* SIDEBAR */}
      <aside className="w-56 bg-[#1a6b7c] text-white p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-8">
            🚚 Fleet<span className="text-yellow-300">Flow</span>
          </h1>

          <div className="space-y-3 text-sm">
            <div>Dashboard</div>
            <div>Vehicle Registry</div>
            <div>Trip Dispatcher</div>
            <div>Maintenance</div>
            <div>Trip & Expense</div>
            <div>Performance</div>
            <div className="text-yellow-300 font-bold">Analytics</div>
          </div>
        </div>

        <button className="bg-white text-[#1a6b7c] rounded-lg py-2 font-semibold">
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">

        <h1 className="text-2xl font-bold mb-6">
          Operational Analytics & Financial Reports
        </h1>

        {/* KPI */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-sm text-gray-500">Total Revenue</p>
            <h2 className="text-xl font-bold">{fmt(totals.revenue)}</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-sm text-gray-500">Fuel Expense</p>
            <h2 className="text-xl font-bold">{fmt(totals.fuel)}</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-sm text-gray-500">Maintenance</p>
            <h2 className="text-xl font-bold">{fmt(totals.maintenance)}</h2>
          </div>
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-2 gap-4 mb-6">

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Monthly Revenue</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={MONTHLY}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#1a6b7c" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Fuel vs Maintenance</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={MONTHLY}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="fuel" stroke="#ef4444" />
                <Line type="monotone" dataKey="maint" stroke="#1a6b7c" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold mb-4">Vehicle Performance</h3>

          <table className="w-full text-sm">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="text-left py-2">Vehicle</th>
                <th>Revenue</th>
                <th>Fuel</th>
                <th>Maintenance</th>
                <th>ROI %</th>
              </tr>
            </thead>

            <tbody>
              {VEHICLE_DATA.map((v) => (
                <tr key={v.id} className="border-b">
                  <td className="py-2">{v.model}</td>
                  <td>{fmt(v.revenue)}</td>
                  <td>{fmt(v.fuelCost)}</td>
                  <td>{fmt(v.maintenance)}</td>
                  <td>{calcROI(v.revenue, v.maintenance, v.fuelCost, v.acquisitionCost)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}