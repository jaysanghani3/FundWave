import React from "react";
import { MdOutlineDelete, MdEdit } from "react-icons/md";
const SalesInvoice = () => {
  return (
    <>
      <div className="flex flex-col border-2 gap-y-3 min-h-full">
        <h1 className="text-sm font-bold bg-[#1d5e7e] text-white px-3 py-1">Sales Invoice</h1>

        <div className="grid grid-cols-3 gap-6 border p-2 text-xs mx-2">
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-row">
              <label className="text-sm font-medium text-gray-700">Invoice No.</label>
              <input type="text" name="invoiceNo" id="invoiceNo" autoComplete="given-name" className="border ms-auto w-7/12" />
            </div>
            <div className="flex flex-row">
              <label className="text-sm font-medium text-gray-700">Customer</label>
              <input type="text" name="customer" id="customer" autoComplete="given-name" className="border ms-auto w-7/12" />
            </div>
            <div className="flex flex-row">
              <label className="text-sm font-medium text-gray-700">GST No</label>
              <input type="text" name="gstNo" id="gstNo" autoComplete="given-name" className="border ms-auto w-7/12" />
            </div>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-row">
              <label className="text-sm font-medium text-gray-700">Cash/Credit</label>
              <input type="text" name="cashCredit" id="cashCredit" autoComplete="given-name" className="border ms-auto w-7/12" />
            </div>
            <div className="flex flex-row">
              <label className="text-sm font-medium text-gray-700">Date</label>
              <input type="date" name="date" id="date" autoComplete="given-name" className="border ms-auto w-7/12" />
            </div>
            <div className="flex flex-row">
              <label className="text-sm font-medium text-gray-700">Due Date</label>
              <input type="date" name="dueDate" id="dueDate" autoComplete="given-name" className="border ms-auto w-7/12" />
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-row">
              <label className="text-sm font-medium text-gray-700">Contact No</label>
              <input type="text" name="contactNo" id="contactNo" autoComplete="given-name" className="border ms-auto w-7/12" />
            </div>
            <div className="flex flex-row">
              <label className="text-sm font-medium text-gray-700">Address</label>
              <textarea type="text" name="address" id="address" autoComplete="given-name" className="border ms-auto w-7/12  " />
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default SalesInvoice;
