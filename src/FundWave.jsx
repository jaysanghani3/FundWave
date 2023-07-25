import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SalesInvoice from "./pages/sales/SalesInvoice";
import PurchaseBill from "./pages/purchases/PurchaseBill";
import AddNewCustomer from "./pages/sales/AddNewCustomer";
import EstimateBill from "./pages/sales/EstimateBill";
import Dashboard from "./pages/Dashboard";
import logo from "./assets/logo.png";
import MasterTableview from "./components/MasterTableview";
import CustomerMaster from "./pages/sales/CustomerMaster";
import VendorMaster from "./pages/purchases/VendorMaster";

const FundWave = () => {
  return (
    <div className="min-h-screen">
      <header className="bg-[#1D5B79] flex justify-between items-center px-3 py-2">
        <div className="flex items-center">
          <img src={logo} alt="FundWave" className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="text-white text-xl font-bold ml-4">FundWave</span>
        </div>
        <div className="flex items-center">
          <span className="text-white text-sm font-medium ">Company Name : ( 01/04/2023 to 31/03/2024 )</span>

        </div>

        <div className="flex items-center">
          <span className="text-white text-sm font-medium">Help</span>
          <span className="text-white text-sm font-medium ml-4">Settings</span>
          <span className="text-white text-sm font-medium ml-4">Profile</span>
          <span className="text-white text-sm font-medium ml-4">Logout</span>
          <span className="text-white text-sm font-medium ml-4">Admin</span>
        </div>
      </header>
      <div className="flex flex-row">
        <div className="flex-col top-0 left-0 w-auto bg-[#1D5B79] border-r min-h-screen">
          <Sidebar />
        </div>

        <div className="flex-auto p-1">
          {/* <EstimateBill /> */}
          <Routes>
            <Route path="/" element={<VendorMaster />} />
            <Route path="/sales-invoice" element={<SalesInvoice />} />
            <Route path="/purchase-bill" element={<PurchaseBill />} />
            <Route path="/estimate" element={<EstimateBill />} />
            <Route path="/add-new-cutomer" element={<AddNewCustomer />} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default FundWave;
