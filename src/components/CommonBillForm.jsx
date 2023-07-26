import React, { useState } from "react";
import { MdOutlineDelete, MdEdit } from "react-icons/md";

const CommonBillForm = ({ title, formFields }) => {
  const [rows, setRows] = useState([{}]);

  const addRow = () => {
    setRows([...rows, {}]);
  };

  return (
    <>
      <div className="flex flex-col border-2 gap-y-3 min-h-full text-xs">
        <h1 className="text-sm font-bold bg-[#1d5e7e] text-white px-3 py-1">{title}</h1>

        <div className="grid grid-cols-3 gap-6 border border-gray-300 p-2 mx-2">
          {formFields.map((column) => (
            <div className="flex flex-col gap-y-1 border-l-2 border-blue-100">
              {column.map((field) => (
                <div className="flex flex-row" key={field.name}>
                  <label className="ml-5 font-medium text-gray-700">{field.label}</label>
                  {field.type === "select" ? (
                    <select name={field.name} id={field.name} className="border border-gray-300 ms-auto w-7/12">
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea name={field.name} id={field.name} autoComplete="given-name" className="border border-gray-300 ml-3 ms-auto w-7/12 resize-none" />
                  ) : (
                    <input type={field.type} name={field.name} id={field.name} autoComplete="given-name" className="border border-gray-300 ms-auto w-7/12" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="overflow-x-auto border border-gray-300 mx-2">
          <table className="table-auto w-full text-sm bg-transparent">
            <thead className="bg-[#1d5e7e] text-white">
              <tr>
                <td className="p-1 w-7">Sr</td>
                <td className="p-1 w-6"></td>
                <td className="p-1 w-6"></td>
                <td className="p-1 w-40">Product</td>
                <td className="p-1">Description</td>
                <td className="p-1 w-14 text-center">Qty</td>
                <td className="p-1 w-14 text-center">Rate</td>
                <td className="p-1 w-16 text-center">Discount</td>
                <td className="p-1 w-24 text-center">Taxable Value</td>
                <td className="p-1 w-14 text-center">CGST</td>
                <td className="p-1 w-14 text-center">SGST</td>
                <td className="p-1 w-14 text-center">IGST</td>
                <td className="p-1 w-14 text-center">Total</td>
              </tr>
            </thead>
            <tbody className="text-right ">
              {rows.map((item, index) => (
                <tr key={index} className="bg-transparent hover:bg-gray-50">
                  <td className="text-center">{index + 1}</td>
                  <td className="text-red-400 text-sm text-center">
                    <MdOutlineDelete />
                  </td>
                  <td className="text-blue-400 text-sm text-center">
                    <MdEdit />
                  </td>
                  <td className="text-left">
                    <input type="text" name="product" id="product" autoComplete="given-name" className="border border-gray-300 ms-auto w-full" />
                  </td>
                  <td className="text-left">
                    <input type="text" name="description" id="description" autoComplete="given-name" className="border border-gray-300 ms-auto w-full" />
                  </td>
                  <td className="">
                    <input type="number" name="qty" id="qty" autoComplete="given-name" className="border border-gray-300 ms-auto w-full" />
                  </td>
                  <td className="">
                    <input type="number" name="rate" id="rate" autoComplete="given-name" className="border border-gray-300 ms-auto w-full" />
                  </td>
                  <td className="">
                    <input type="number" name="discount" id="discount" autoComplete="given-name" className="border border-gray-300 ms-auto w-full" />
                  </td>
                  <td className="">
                    <input type="number" name="taxableValue" id="taxableValue" autoComplete="given-name" className="border border-gray-300 ms-auto w-full" />
                  </td>
                  <td className="">
                    <input type="number" name="cgst" id="cgst" autoComplete="given-name" className="border border-gray-300 ms-auto w-full" />
                  </td>
                  <td className="">
                    <input type="number" name="sgst" id="sgst" autoComplete="given-name" className="border border-gray-300 ms-auto w-full" />
                  </td>
                  <td className="">
                    <input type="number" name="igst" id="igst" autoComplete="given-name" className="border border-gray-300 ms-auto w-full" />
                  </td>
                  <td className="">
                    <input type="number" name="total" id="total" autoComplete="given-name" className="border border-gray-300 ms-auto w-full" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-row justify-end gap-x-2 m-2">
            <button className="bg-[#1d5e7e] text-white px-3 py-1" onClick={addRow}>
              Add Item
            </button>
          </div>
        </div>

        <div className="">
          <div className="flex flex-row gap-x-10 mx-2">
            <div className="flex flex-col w-9/12 gap-y-6 mt-3">
              <div className="flex flex-row">
                <label className="w-2/12  font-medium text-gray-700">Remarks</label>
                <textarea name="remarks" id="remarks" autoComplete="given-name" className="border border-gray-300 ml-3 w-10/12 resize-none h-12" />
              </div>

              <div className="flex flex-row">
                <label className="w-2/12  font-medium text-gray-700">Terms & Conditions</label>
                <textarea name="terms" id="terms" autoComplete="given-name" className="border border-gray-300 ml-3 w-10/12 resize-none h-12" />
              </div>
            </div>

            <div className="flex flex-col w-3/12 gap-y-1">
              <div className="flex flex-row">
                <label className=" font-medium text-gray-700">Sub Total</label>
                <input type="text" name="subTotal" id="subTotal" autoComplete="given-name" className="border border-gray-300 ms-auto w-6/12 text-right h-5  pr-2" />
              </div>

              <div className="flex flex-row">
                <label className=" font-medium text-gray-700">Discount</label>
                <input type="text" name="discount" id="discount" autoComplete="given-name" className="border border-gray-300 ms-auto w-6/12 text-right h-5  pr-2" />
              </div>

              <div className="flex flex-row">
                <label className=" font-medium text-gray-700">Taxable Value</label>
                <input type="text" name="taxableValue" id="taxableValue" autoComplete="given-name" className="border border-gray-300 ms-auto w-6/12 text-right h-5  pr-2" />
              </div>

              <div className="flex flex-row">
                <label className=" font-medium text-gray-700">CGST</label>
                <input type="text" name="cgst" id="cgst" autoComplete="given-name" className="border border-gray-300 ms-auto w-6/12 text-right h-5  pr-2" />
              </div>

              <div className="flex flex-row">
                <label className=" font-medium text-gray-700">SGST</label>
                <input type="text" name="sgst" id="sgst" autoComplete="given-name" className="border border-gray-300 ms-auto w-6/12 text-right h-5  pr-2" />
              </div>

              <div className="flex flex-row">
                <label className=" font-medium text-gray-700">IGST</label>
                <input type="text" name="igst" id="igst" autoComplete="given-name" className="border border-gray-300 ms-auto w-6/12 text-right h-5  pr-2" />
              </div>

              <div className="flex flex-row">
                <label className=" font-medium text-gray-700">Total</label>
                <input type="text" name="total" id="total" autoComplete="given-name" className="border border-gray-300 ms-auto w-6/12 text-right h-5  pr-2" />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-end gap-x-2 m-2">
            <button className="bg-[#1d5e7e] text-white px-3 py-1 ">Save</button>
            <button className="bg-[#1d5e7e] text-white px-3 py-1 ">Cancel</button>
            <button className="bg-[#1d5e7e] text-white px-3 py-1 ">Print</button>
            <button className="bg-[#1d5e7e] text-white px-3 py-1 ">Email</button>
            <button className="bg-[#1d5e7e] text-white px-3 py-1 ">Export</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonBillForm;
