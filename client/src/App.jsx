import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import VehicleRegistry from "./pages/VehicleRegistry";
import Dispatcher from "./pages/Dispatch";
import Maintenance from "./pages/Maintenance";
import ExpenseFuel from "./pages/Expenses";
import DriverProfile from "./pages/DriverProfile";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vehicleregistry" element={<VehicleRegistry />} />
        <Route path="/dispatch" element={<Dispatcher />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/expenses" element={<ExpenseFuel />} />
        <Route path="/profile" element={<DriverProfile />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;