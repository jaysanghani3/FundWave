import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SalesInvoice from "./pages/sales/SalesInvoice";
import PurchaseBill from "./pages/purchases/PurchaseBill";
import AddNewCustomer from "./pages/sales/AddNewCustomer";
import EstimateBill from "./pages/sales/EstimateBill";
import Dashboard from "./pages/Dashboard";
import logo from "./assets/logo.png";

const FundWave = () => {
  return (
    <div className="min-h-screen">
      <header className="bg-[#1D5B79] flex items-center px-3 py-2">
        <div className="flex items-center">
          <img src={logo} alt="FundWave" className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="text-white text-xl font-bold ml-4">FundWave</span>
        </div>
        <div className="flex items-center ml-16">
          <span className="text-white text-sm font-medium">Welcome, Admin</span>
          <span className="text-white text-sm font-medium ml-4">Time Period : 01/04/2023 to 31/03/2024</span>

        </div>

        <div className="flex items-center ms-auto">
          <span className="text-white text-sm font-medium">Help</span>
          <span className="text-white text-sm font-medium ml-4">Settings</span>
          <span className="text-white text-sm font-medium ml-4">Profile</span>
          <span className="text-white text-sm font-medium ml-4">Logout</span>
          <span className="text-white text-sm font-medium ml-4">Admin</span>
        </div>
      </header>
      <div className="flex flex-row min-h-screen">
        <div className="flex-col top-0 left-0 w-auto bg-[#1D5B79] min-h-full border-r">
          <Sidebar />
        </div>

        <div className="flex-auto py-1 px-3">
          {/* <EstimateBill /> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales-invoice" element={<SalesInvoice />} />
            <Route path="/purchase-bill" element={<PurchaseBill />} />
            <Route path="/estimate" element={<EstimateBill />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default FundWave;
