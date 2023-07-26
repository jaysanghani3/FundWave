import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SalesInvoice from "./pages/sales/SalesInvoice";
import PurchaseBill from "./pages/purchases/PurchaseBill";
import AddNewCustomer from "./pages/sales/AddNewCustomer";
import EstimateBill from "./pages/sales/EstimateBill";
import Dashboard from "./pages/Dashboard";
import logo from "./assets/logo.png";
import CustomerMaster from "./pages/sales/CustomerMaster";
import VendorMaster from "./pages/purchases/VendorMaster";
import PageNotFound from "./pages/PageNotFound";
const FundWave = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky z-50 top-0 bg-[#1D5B79] flex justify-between items-center px-3 py-2">
        <div className="flex items-center">
          <img src={logo} alt="FundWave" className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="text-white text-xl font-bold ml-4">FundWave</span>
        </div>
        <div className="flex items-center">
          <span className="text-white text-lg mr-2 font-semibold">Jay Sanghani </span>
          <span className="text-white text-xs "> : ( 01/04/2023 - 31/03/2024 )</span>
        </div>

        <div className="flex items-center">
          <span className="text-white text-sm font-medium">Help</span>
          <span className="text-white text-sm font-medium ml-4">Profile</span>
          <span className="text-white text-sm font-medium ml-4">Logout</span>
        </div>
      </header>

      <div className="flex flex-row">
        <aside className="flex-col w-auto bg-[#1D5B79] border-r h-screen">
          <Sidebar />
        </aside>

        <div className="flex-auto p-1 ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales-invoice" element={<SalesInvoice />} />
            <Route path="/purchase-bill" element={<PurchaseBill />} />
            <Route path="/estimate" element={<EstimateBill />} />
            <Route path="/add-new-cutomer" element={<AddNewCustomer />} />
            <Route path="/customer" element={<CustomerMaster />} />
            <Route path="/vendor" element={<VendorMaster />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
{/* 
      <footer class="bg-[#1D5B79] text-white py-2 px-4 sticky z-50  bottom-0 left-0 w-full">
    Fixed Footer
  </footer> */}
    </div>
  );
};

export default FundWave;
