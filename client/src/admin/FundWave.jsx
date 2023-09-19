import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SalesInvoice from "./pages/sales/SalesInvoice";
import SalesInvoiceMaster from "./pages/sales/SalesInvoiceMaster.jsx";
import ViewInvoice from "./pages/sales/ViewInvoice.jsx";
import PurchaseBill from "./pages/purchases/PurchaseBill";
import AddNewCustomer from "./pages/sales/AddNewCustomer";
import Dashboard from "./pages/Dashboard";
import logo from "../assets/logo.png";
import CustomerMaster from "./pages/sales/CustomerMaster";
import VendorMaster from "./pages/purchases/VendorMaster";
import PageNotFound from "./pages/PageNotFound";
import ItemMasters from "./pages/inventory/ItemMasters";
import AddNewVendor from "./pages/purchases/AddNewVendor";
import CreateItem from "./pages/inventory/CreateItem";
import LoginPage from "../LoginPage";
import ProtectedRoute from "../ProtectedRoute";
import Expenses from "./pages/purchases/Expenses";
import AddNewEmployee from "./pages/employee/AddNewEmployee";
import EmployeeMaster from "./pages/employee/EmployeeMaster";
import PurchasesMaster from "./pages/purchases/PurchasesMaster";
import ViewPurchase from "./pages/purchases/ViewPurchase";
import { Link } from "react-router-dom";


const FundWave = () => {
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (

    <div className="min-h-screen bg-slate-50 overflow-hidden not-print">
      <header className="sticky z-50 top-0 bg-[#1D5B79] h-[7vh] flex justify-between items-center px-3 py-2">
        <Link to='/' className="flex items-center">
          <img src={logo} alt="FundWave" className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="text-white text-xl font-bold ml-4">FundWave</span>
        </Link>
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
            <Route exact path="/" element={<ProtectedRoute element={Dashboard} />} />
            <Route path="/sales-invoice" element={<ProtectedRoute element={SalesInvoice} />} />
            <Route path="/sales-invoice-master" element={<ProtectedRoute element={SalesInvoiceMaster} />} />
            <Route path="/purchase-bill" element={<ProtectedRoute element={PurchaseBill} />} />
            <Route path="purchase-master" element={<ProtectedRoute element={PurchasesMaster} />} />
            <Route path="/expenses" element={<ProtectedRoute element={Expenses} />} />
            <Route path="/expenses/:expensesId" element={<ProtectedRoute element={Expenses} />} />
            <Route path="/add-new-customer" element={<ProtectedRoute element={AddNewCustomer} />} />
            <Route path="/add-new-vendor" element={<ProtectedRoute element={AddNewVendor} />} />
            <Route path="/add-new-item" element={<ProtectedRoute element={CreateItem} />} />
            <Route path="/customer" element={<ProtectedRoute element={CustomerMaster} />} />
            <Route path="/vendor" element={<ProtectedRoute element={VendorMaster} />} />
            <Route path="/item-master" element={<ProtectedRoute element={ItemMasters} />} />
            <Route path="/edit-customer/:customerId" element={<ProtectedRoute element={AddNewCustomer} />} />
            <Route path="/edit-vendor/:vendorId" element={<ProtectedRoute element={AddNewVendor} />} />
            <Route path="/edit-item/:itemId" element={<ProtectedRoute element={CreateItem} />} />
            <Route path="/view-invoice/:invoiceId" element={<ProtectedRoute element={ViewInvoice} />} />
            <Route path="/view-purchase/:purchaseId" element={<ProtectedRoute element={ViewPurchase} />} />
            <Route path="/add-new-employee" element={<ProtectedRoute element={AddNewEmployee} />} />
            <Route path="/edit-employee/:employeeId" element={<ProtectedRoute element={AddNewEmployee} />} />
            <Route path="employee-master" element={<ProtectedRoute element={EmployeeMaster} />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </div>
      </div>

      <footer className="fixed  bottom-0 bg-[#1D5B79] text-white items-center px-4 w-full h-6">
        <span className="text-xs">© 2023 FundWave. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default FundWave;
