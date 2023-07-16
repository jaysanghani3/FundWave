import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Purchases from "./pages/Purchases";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Sales from "./pages/Sales";
import SalesInvoice from "./pages/SalesInvoice";
import CreateItem from "./pages/CreateItem";

const FundWave = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-row min-h-screen">
        <div className="flex-col top-0 left-0 w-auto bg-[#1D5B79] min-h-full border-r">
          <Sidebar />
        </div>

        <div className="flex-auto py-1 px-3">
          <Routes>
            <Route path="/" element={<CreateItem />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default FundWave;
