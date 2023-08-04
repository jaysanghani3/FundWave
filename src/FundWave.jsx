import React, {useState} from "react";
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
import ItemMasters from "./pages/inventory/ItemMasters";
import AddNewVendor from "./pages/purchases/AddNewVendor";
import CreateItem from "./pages/inventory/CreateItem";
import Login from "./pages/Login";

const FundWave = () => {

  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    
    <div className="min-h-screen bg-slate-50 overflow-hidden">
    {/* {user ? ( */}
      <>
      <header className="sticky z-50 top-0 bg-[#1D5B79] h-[7vh] flex justify-between items-center px-3 py-2">
        <div className="flex items-center">
          <img src={logo} alt="FundWave" className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="text-white text-xl font-bold ml-4">FundWave</span>
        </div>
        <div className="flex items-center">
          <span className="text-white text-lg mr-2 font-semibold">Jay Sanghani </span>
          <span className="text-white text-xs "> : ( 01/04/2023 - 31/03/2024 )</span>
        </div>

        <div className="flex items-center">
          {/* <span className="text-white text-sm font-medium">Help</span> */}
          {/* <span className="text-white text-sm font-medium ml-4">Profile</span> */}
          <button className="text-white text-sm font-medium ml-4" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <div className="flex flex-row h-auto">
        <aside className="flex flex-col w-auto bg-[#1D5B79] border-r">
          <Sidebar />
        </aside>

        <div className="flex-auto p-6 overflow-y-scroll h-[93vh]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales-invoice" element={<SalesInvoice />} />
            <Route path="/purchase-bill" element={<PurchaseBill />} />
            <Route path="/estimate" element={<EstimateBill />} />
            <Route path="/add-new-customer" element={<AddNewCustomer />} />
            <Route path="/add-new-vendor" element={<AddNewVendor />} />
            <Route path="/add-new-item" element={<CreateItem/>} />
            <Route path="/customer" element={<CustomerMaster />} />
            <Route path="/vendor" element={<VendorMaster />} />
            <Route path="/item-master" element={<ItemMasters />} />
            <Route path="/add-new-item" element={<ItemMasters />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>

      <footer className="fixed  bottom-0 bg-[#1D5B79] text-white items-center px-4 w-full h-6">
        <span className="text-xs">© 2023 FundWave. All rights reserved.</span>
      </footer>
      </>
      {/* ): (
     <Login onLogin={handleLogin} />
   )}    */}
    </div>
  );
};

export default FundWave;
