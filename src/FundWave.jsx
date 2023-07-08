import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Purchases from "./pages/Purchases";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Sales from "./pages/Sales";

const FundWave = () => {
  
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className="fixed flex flex-col top-0 left-0 w-2/12 bg-[#1D5B79] h-full border-r">
        <Sidebar />
      </div>
      
      <div className="flex flex-col flex-auto flex-shrink-0 w-10/12 antialiased bg-gray-500 text-gray-800 self-end	">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/sales" element={<Sales/>} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/purchases" element={<Purchases/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      </div>
    </div>
  );
};

export default FundWave;
