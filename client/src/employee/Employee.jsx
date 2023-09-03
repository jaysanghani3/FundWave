import React from 'react'
import logo from "../assets/logo.png";
import { Link, Route, Routes } from "react-router-dom";
import PageNotFound from "../admin/pages/PageNotFound";
import ProtectedRoute from "../ProtectedRoute";
import SalesInvoice from "../admin/pages/sales/SalesInvoice";
import SalesInvoiceMaster from "../admin/pages/sales/SalesInvoiceMaster";


const Employee = () => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <>
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

          <div className="py-1">
            <Link to="/emp/sales-invoice" className="flex items-center w-full focus:outline-none hover:bg-[#267399] text-gray-600 border-l-4 border-transparent hover:border-white px-3 py-1 flex-row">
              <span className="text-[16px] hidden sm:block tracking-wide truncate  text-white font-semibold">Create Invoice</span>
            </Link>
          </div>
          <div className="py-1">
            <Link to="/emp/sales-invoice-master" className="flex items-center w-full focus:outline-none hover:bg-[#267399] text-gray-600 border-l-4 border-transparent hover:border-white px-3 py-1 flex-row">
              <span className="text-[16px] hidden sm:block tracking-wide truncate  text-white font-semibold">Invoice Master</span>
            </Link>
          </div>

        </aside>

        <div className="flex-auto p-6 overflow-y-scroll h-[93vh]">
          <Routes>
            {/* <Route exact path="/" element={<ProtectedRoute element={Dashboard} />} /> */}
            <Route exact path="/emp/sales-invoice" element={<ProtectedRoute element={SalesInvoice} />} />
            <Route path="/emp/sales-invoice-master" element={<ProtectedRoute element={SalesInvoiceMaster} />} />
            {/* <Route path="/purchase-bill" element={<ProtectedRoute element={PurchaseBill} />} /> */}
            {/* <Route path="/expenses" element={<ProtectedRoute element={Expenses} />} /> */}
            {/* <Route path="/expenses/:expensesId" element={<ProtectedRoute element={Expenses} />} /> */}
            {/* <Route path="/view-invoice/:invoiceId" element={<ProtectedRoute element={ViewInvoice} />} /> */}

            <Route path="*" element={<SalesInvoice />} />
          </Routes>
        </div>
      </div>

      <footer className="fixed  bottom-0 bg-[#1D5B79] text-white items-center px-4 w-full h-6">
        <span className="text-xs">© 2023 FundWave. All rights reserved.</span>
      </footer>
    </>
  )
}

export default Employee