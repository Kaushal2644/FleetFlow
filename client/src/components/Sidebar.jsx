import { useNavigate } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => navigate("/");

  return (
    <>
      {/* Overlay (outside click close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64
          bg-gradient-to-br from-[#2e86ab] to-[#1b6c8e]
          text-white p-6 z-40
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="text-2xl font-bold mb-10">
          🚚 Fleet<span className="text-yellow-300">Flow</span>
        </div>

        <nav className="space-y-5 text-lg">
          <div onClick={() => navigate("/dashboard")} className="cursor-pointer hover:text-yellow-300">Dashboard</div>
          <div onClick={() => navigate("/vehicleregistry")} className="cursor-pointer hover:text-yellow-300">Vehicle Registry</div>
          <div onClick={() => navigate("/dispatch")} className="cursor-pointer hover:text-yellow-300">Trip Dispatcher</div>
          <div onClick={() => navigate("/maintenance")} className="cursor-pointer">Maintenance</div>
          <div onClick={() => navigate("/expenses")} className="cursor-pointer">Trip & Expense</div>
          <div onClick={() => navigate("/profile")} className="cursor-pointer">Performance</div>
          <div onClick={() => navigate("/analytics")} className="cursor-pointer">Analytics</div>
        </nav>

        <button
          onClick={handleLogout}
          className="absolute bottom-6 left-6 right-6 bg-white text-[#1b6c8e] py-2 rounded-xl font-semibold"
        >
          Logout
        </button>
      </aside>
    </>
  );
}