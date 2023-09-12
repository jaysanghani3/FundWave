import React from 'react'
import logo from "../assets/logo.png";
import { Link, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import SalesInvoice from "../admin/pages/sales/SalesInvoice";
import ViewInvoice from "../admin/pages/sales/ViewInvoice";
import SalesInvoiceMasterForEmployee from "./SalesInvoiceMasterForEmployee";

const Employee = () => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const Sidebar = [
    { name: "Create Invoice", path: "/emp/sales-invoice" },
    { name: "Invoice Master", path: "/emp/sales-invoice-master" },
    // { name: "View Invoice", path: "/emp/view-invoice/:invoiceId"}
  ]
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden not-print">
      <header className="sticky z-50 top-0 bg-[#1D5B79] h-[7vh] flex justify-between items-center px-3 py-2">
        <div className="flex items-center">
          <img src={logo} alt="FundWave" className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="text-white text-xl font-bold ml-4">FundWave</span>
        </div>
        <div className="flex items-center">
          <span className="text-white text-lg mr-2 font-semibold"></span>
        </div>

        <div className="flex items-center">
          {/* <span className="text-white text-sm font-medium">Help</span> */}
          {/* <span className="text-white text-sm font-medium ml-4">Profile</span> */}
          <span className="text-white text-lg mr-2 font-semibold">Employee 1 </span>
          <button className="text-white text-sm font-medium ml-4" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <div className="flex flex-row h-auto">
        <aside className="flex flex-col w-auto bg-[#1D5B79] border-r">
        {
          Sidebar.map((item, index) => {
            return (
              <Link to={item.path} key={index} className="flex items-center justify-start text-[#ffffffea] hover:bg-[#14425aaf] hover:text-[#ffffff] px-3 py-2">
                {item.name}
              </Link>
            )
          })
        }
        </aside>

        <div className="flex-auto p-6 overflow-y-scroll h-[93vh]">
          <Routes>
            {/* <Route exact path="/" element={<ProtectedRoute element={Dashboard} />} /> */}
            <Route exact path="/emp/sales-invoice" element={<ProtectedRoute element={SalesInvoice} />} />
            <Route path="/emp/sales-invoice-master" element={<ProtectedRoute element={SalesInvoiceMasterForEmployee} />} />
            {/* <Route path="/purchase-bill" element={<ProtectedRoute element={PurchaseBill} />} /> */}
            {/* <Route path="/expenses" element={<ProtectedRoute element={Expenses} />} /> */}
            {/* <Route path="/expenses/:expensesId" element={<ProtectedRoute element={Expenses} />} /> */}
            <Route path="/emp/view-invoice/:invoiceId" element={<ProtectedRoute element={ViewInvoice} />} />

            <Route path="*" element={<ProtectedRoute element={SalesInvoice} />} />
          </Routes>
        </div>
      </div>

      <footer className="fixed  bottom-0 bg-[#1D5B79] text-white items-center px-4 w-full h-6">
        <span className="text-xs">© 2023 FundWave. All rights reserved.</span>
      </footer>
    </div>
  )
}

export default Employee