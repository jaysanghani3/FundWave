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

        <div className="overflow-x-auto border mx-2">
          <table className="table-auto w-full text-xs">
            <thead className="text-xs bg-[#1d5e7e] text-white">
              <tr>
                {/* {
                ["Sr no.", "Operation", "Product", "Qty", "Rate", "Discount", "Taxable Value", "CGST", "SGST", "IGST", "Total"].map((item) => (
                  <td className="w-auto p-1">{item}</td>
                ))
              } */}
                <td className="p-1 w-7 ">Sr</td>
                <td className="p-1 w-6"></td>
                <td className="p-1 w-6"></td>
                <td className="p-1 w-40">Product</td>
                <td className="p-1">Description</td>
                <td className="p-1 w-14 text-right">Qty</td>
                <td className="p-1 w-14 text-right">Rate</td>
                <td className="p-1 w-16 text-right">Discount</td>
                <td className="p-1 w-24 text-right">Taxable Value</td>
                <td className="p-1 w-14 text-right">CGST</td>
                <td className="p-1 w-14 text-right">SGST</td>
                <td className="p-1 w-14 text-right">IGST</td>
                <td className="p-1 w-14 text-right">Total</td>
              </tr>
            </thead>
            <tbody className="text-right">
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="p-1 text-center">1</td>
                <td className="text-red-400 text-sm text-center">
                  <MdOutlineDelete />
                </td>
                <td className="text-blue-400 text-sm text-center">
                  <MdEdit />
                </td>
                <td className="p-1 text-left">Item 1</td>
                <td className="p-1 text-left">ABCDEFGH</td>
                <td className="p-1">1</td>
                <td className="p-1">100</td>
                <td className="p-1">0</td>
                <td className="p-1">100</td>
                <td className="p-1">9</td>
                <td className="p-1">9</td>
                <td className="p-1">0</td>
                <td className="p-1">118</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="p-1 text-center">1</td>
                <td className="text-red-400 text-sm text-center">
                  <MdOutlineDelete />
                </td>
                <td className="text-blue-400 text-sm text-center">
                  <MdEdit />
                </td>
                <td className="p-1 text-left">Item 1</td>
                <td className="p-1 text-left">ABCDEFGH</td>
                <td className="p-1">1</td>
                <td className="p-1">100</td>
                <td className="p-1">0</td>
                <td className="p-1">100</td>
                <td className="p-1">9</td>
                <td className="p-1">9</td>
                <td className="p-1">0</td>
                <td className="p-1">118</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="p-1 text-center">1</td>
                <td className="text-red-400 text-sm text-center">
                  <MdOutlineDelete />
                </td>
                <td className="text-blue-400 text-sm text-center">
                  <MdEdit />
                </td>
                <td className="p-1 text-left">Item 1</td>
                <td className="p-1 text-left">ABCDEFGH</td>
                <td className="p-1">1</td>
                <td className="p-1">100</td>
                <td className="p-1">0</td>
                <td className="p-1">100</td>
                <td className="p-1">9</td>
                <td className="p-1">9</td>
                <td className="p-1">0</td>
                <td className="p-1">118</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-row justify-end gap-x-2 m-2">
            <button className="bg-[#1d5e7e] text-white px-3 py-1 rounded-md text-xs">Add Item</button>
          </div>
        </div>

        <div className="">
          <div className="flex flex-row gap-x-10 mx-2">
            <div className="flex flex-col w-9/12 gap-y-2">
              <div className="flex flex-row">
                <label className="w-2/12 text-xs font-medium text-gray-700">Remarks</label>
                <textarea name="remarks" id="remarks" autoComplete="given-name" className="border ml-3 w-10/12 " />
              </div>

              <div className="flex flex-row">
                <label className="w-2/12 text-xs font-medium text-gray-700">Terms & Conditions</label>
                <textarea name="terms" id="terms" autoComplete="given-name" className="border ml-3 w-10/12 " />
              </div>
            </div>

            <div className="flex flex-col w-3/12 gap-y-1">
              <div className="flex flex-row">
                <label className="text-xs font-medium text-gray-700">Sub Total</label>
                <input type="text" name="subTotal" id="subTotal" autoComplete="given-name" className="border ms-auto w-6/12 text-right h-5 text-xs pr-2" />
              </div>

              <div className="flex flex-row">
                <label className="text-xs font-medium text-gray-700">Discount</label>
                <input type="text" name="discount" id="discount" autoComplete="given-name" className="border ms-auto w-6/12 text-right h-5 text-xs pr-2" />
              </div>

              <div className="flex flex-row">
                <label className="text-xs font-medium text-gray-700">Taxable Value</label>
                <input type="text" name="taxableValue" id="taxableValue" autoComplete="given-name" className="border ms-auto w-6/12 text-right h-5 text-xs pr-2" />
              </div>

              <div className="flex flex-row">
                <label className="text-xs font-medium text-gray-700">CGST</label>
                <input type="text" name="cgst" id="cgst" autoComplete="given-name" className="border ms-auto w-6/12 text-right h-5 text-xs pr-2" />
              </div>

              <div className="flex flex-row">
                <label className="text-xs font-medium text-gray-700">SGST</label>
                <input type="text" name="sgst" id="sgst" autoComplete="given-name" className="border ms-auto w-6/12 text-right h-5 text-xs pr-2" />
              </div>

              <div className="flex flex-row">
                <label className="text-xs font-medium text-gray-700">IGST</label>
                <input type="text" name="igst" id="igst" autoComplete="given-name" className="border ms-auto w-6/12 text-right h-5 text-xs pr-2" />
              </div>

              <div className="flex flex-row">
                <label className="text-xs font-medium text-gray-700">Total</label>
                <input type="text" name="total" id="total" autoComplete="given-name" className="border ms-auto w-6/12 text-right h-5 text-xs pr-2" />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-end gap-x-2 m-2">
            <button className="bg-[#1d5e7e] text-white px-3 py-1 rounded-md text-xs">Save</button>
            <button className="bg-[#1d5e7e] text-white px-3 py-1 rounded-md text-xs">Cancel</button>
            <button className="bg-[#1d5e7e] text-white px-3 py-1 rounded-md text-xs">Print</button>
            <button className="bg-[#1d5e7e] text-white px-3 py-1 rounded-md text-xs">Email</button>
            <button className="bg-[#1d5e7e] text-white px-3 py-1 rounded-md text-xs">Export</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesInvoice;
