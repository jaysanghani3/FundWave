import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SalesInvoice from "./pages/sales/SalesInvoice";
import PurchaseBill from "./pages/purchases/PurchaseBill";
import AddNewCustomer from "./pages/sales/AddNewCustomer";
import CommonForm from "./components/CommonForm";
import EstimateBill from "./pages/sales/EstimateBill";

const FundWave = () => {
  return (
    <div className="min-h-screen">

      <div className="flex flex-row min-h-screen">
        <div className="flex-col top-0 left-0 w-auto bg-[#1D5B79] min-h-full border-r">
          <Sidebar />
        </div>

        <div className="flex-auto py-1 px-3">
          <EstimateBill />
        </div>
      </div>
      
    </div>
  );
};

export default FundWave;
