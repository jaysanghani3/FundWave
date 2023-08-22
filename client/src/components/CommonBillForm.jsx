import React, { useState } from "react";
import { MdOutlineDelete, MdEdit } from "react-icons/md";

const CommonBillForm = ({ title, formFields, onChange, data }) => {

  const [rows, setRows] = useState([{}]);
  const [bill, setBill] = useState({
    // billNo: "",
    // customer: "",
    gstNo: "",
    cashCredit: "",
    date: "",
    dueDate: "",
    contactNo: "",
    address: "",
    subTotal: 0,
    taxableValue: 0,
    discount: 0,
    cgst: 0,
    sgst: 0,
    igst: 0,
    total: 0,
  });

  const handleBillChange = (e) => {
    const { name, value } = e.target;
    setBill((prev) => ({ ...prev, [name]: value }));
  }

  const handleItemChange = (e, rowIndex, field) => {
    const { value } = e.target;

    const updatedRows = [...rows];
    updatedRows[rowIndex][field] = value;

    setRows(updatedRows);

    // calculate all the totals
    const subTotal = updatedRows.reduce((acc, item) => acc + ((parseFloat(item.total)) || 0), 0);
    const discount = updatedRows.reduce((acc, item) => acc + ((parseFloat(item.discount)) || 0), 0);
    const cgst = updatedRows.reduce((acc, item) => acc + ((parseFloat(item.cgst)) || 0), 0);
    const sgst = updatedRows.reduce((acc, item) => acc + ((parseFloat(item.sgst)) || 0), 0);
    const igst = updatedRows.reduce((acc, item) => acc + ((parseFloat(item.igst)) || 0), 0);
    const total = subTotal - discount;

    // update the bill state
    setBill((prev) => ({
      ...prev,
      subTotal,
      discount,
      cgst,
      sgst,
      igst,
      total,
    }));
  };

  const handleBillSubmit = () => {
    console.log(bill);
    console.log(rows);
  }
  const addRow = () => {
    setRows([...rows, {}]);
  };

  const handleDeleteItem = (e) => {
    const updatedRows = [...rows];
    updatedRows.pop();
    setRows(updatedRows);
  }


  return (
    <div className="h-full flex flex-col border-2 gap-y-3 min-h-full text-xs ">
      <h1 className="text-sm font-bold bg-[#1d5e7e] text-white px-3 py-1">{title}</h1>

      <div className="grid grid-cols-3 gap-6 border border-gray-300 p-2 mx-2">

        {formFields.map((column, index) => (
          <div key={index} className="flex flex-col gap-y-1 border-l-2 border-blue-100">
            {column.map((field) => (
              <div className="flex flex-row" key={field.name}>
                <label className="ml-5 font-medium text-gray-700">{field.label}</label>
                {field.type === "select" ? (
                  <select onChange={handleBillChange} name={field.name} id={field.name} className="border border-gray-300 ms-auto w-7/12 ps-2">
                    {field.options.map((option) => (
                      <option className='ps-2' key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                ) : field.type === "textarea" ? (
                  <textarea onChange={handleBillChange} name={field.name} id={field.name} className="border ps-2 border-gray-300 ml-3 ms-auto w-7/12 resize-none" />
                ) : (
                  <input autoComplete="false" onChange={handleBillChange} type={field.type} name={field.name} id={field.name} className="border ps-2 border-gray-300 ms-auto w-7/12" />
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
              {/* <td className="p-1 w-6"></td> */}
              <td className="p-1 w-40">Product</td>
              <td className="p-1">Description</td>
              <td className="p-1 w-14 text-center">Qty</td>
              <td className="p-1 w-14 text-center">Rate</td>
              <td className="p-1 w-14 text-center">CGST</td>  {/*TAXCode*/}
              <td className="p-1 w-14 text-center">SGST</td>
              <td className="p-1 w-14 text-center">IGST</td>
              <td className="p-1 w-16 text-center">Discount</td>
              <td className="p-1 w-24 text-center">Taxable Value</td>
              <td className="p-1 w-24 text-center">Total</td>
            </tr>
          </thead>
          <tbody className="text-right ">
            {rows.map((item, index) => (
              <tr key={index} className="bg-transparent hover:bg-gray-50">
                <td className="text-center">{index + 1}</td>
                <td className="text-red-400 text-sm text-center">
                  <button type="button" onClick={() => handleDeleteItem()} className="focus:outline-none p-1">
                    <MdOutlineDelete size={17} />
                  </button>
                </td>
                {/* <td className="text-blue-400 text-sm text-center">
                  <MdEdit />
                </td> */}
                <td className="text-left">
                  <input autoComplete="false" onChange={(e) => handleItemChange(e, index, "product")} type="text" name="product" id="product" className="ps-2 border border-gray-300 ms-auto w-full" />
                </td>
                <td className="text-left">
                  <input autoComplete="false" onChange={(e) => handleItemChange(e, index, "description")} type="text" name="description" id="description" className="border ps-2 border-gray-300 ms-auto w-full" />
                </td>
                <td className="">
                  <input autoComplete="false" onChange={(e) => handleItemChange(e, index, "qty")} type="number" name="qty" id="qty" className="border text-right pr-1 ps-2 border-gray-300 ms-auto w-full" />
                </td>
                <td className="">
                  <input autoComplete="false" onChange={(e) => handleItemChange(e, index, "rate")} type="number" name="rate" id="rate" className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2" />
                </td>
                <td className="">
                  <input autoComplete="false" onChange={(e) => handleItemChange(e, index, "cgst")} type="number" name="cgst" id="cgst" className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2" />
                </td>
                <td className="">
                  <input autoComplete="false" onChange={(e) => handleItemChange(e, index, "sgst")} type="number" name="sgst" id="sgst" className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2" />
                </td>
                <td className="">
                  <input autoComplete="false" onChange={(e) => handleItemChange(e, index, "igst")} type="number" name="igst" id="igst" className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2" />
                </td>
                <td className="">
                  <input autoComplete="false" onChange={(e) => handleItemChange(e, index, "discount")} type="number" name="discount" id="discount" className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2" />
                </td>
                <td className="">
                  <input autoComplete="false" onChange={(e) => handleItemChange(e, index, "taxableValue")} type="number" name="taxableValue" id="taxableValue" className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2" value={(item?.qty * item?.rate) - item?.discount} contentEditable={false} />
                </td>
                <td className="">
                  <input autoComplete="false" onChange={(e) => handleItemChange(e, index, "item_total")} type="number" name="total" id="item_total" className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2" value={(
                    parseFloat(item?.qty) * parseFloat(item?.rate) -
                    parseFloat(item?.discount) +
                    parseFloat(item?.cgst) +
                    parseFloat(item?.sgst) +
                    parseFloat(item?.igst)
                  )} contentEditable={false} />
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
              <textarea name="remarks" id="remarks" className="border border-gray-300 ml-3 w-10/12 resize-none h-12" />
            </div>

            <div className="flex flex-row">
              <label className="w-2/12  font-medium text-gray-700">Terms & Conditions</label>
              <textarea name="terms" id="terms" className="border border-gray-300 ml-3 w-10/12 resize-none h-12" />
            </div>
          </div>

          <div className="flex flex-col w-3/12 gap-y-1">
            <table className="table-auto w-full bg-transparent">
              <tbody className="text-right ">
                <tr>
                  <td className="w-1/2"><span className="text-right text-gray-700">Sub Total</span></td>
                  <td><span>{bill.subTotal}</span></td>
                </tr>

                <tr>
                  <td className="w-1/2"><span className="text-right text-gray-700">Discount</span></td>
                  <td><span>{bill.discount}</span></td>
                </tr>

                <tr>
                  <td className="w-1/2"><span className="text-right text-gray-700">Taxable Value</span></td>
                  <td><span>{bill.subTotal - bill.discount}</span></td>
                </tr>

                <tr>
                  <td className="w-1/2"><span className="text-right text-gray-700">CGST</span></td>
                  <td><span>{bill.cgst}</span></td>
                </tr>

                <tr>
                  <td className="w-1/2"><span className="text-right text-gray-700">SGST</span></td>
                  <td><span>{bill.sgst}</span></td>
                </tr>

                <tr>
                  <td className="w-1/2"><span className="text-right text-gray-700">IGST</span></td>
                  <td><span>{bill.igst}</span></td>
                </tr>

                <tr>
                  <td className="w-1/2"><span className="text-lg text-right text-gray-700">Total</span></td>
                  <td><span className="font-semibold text-lg">{bill.total}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-row justify-end gap-x-2 m-2">
          <button className="bg-[#1d5e7e] text-white px-3 py-1 " onClick={handleBillSubmit} >Save</button>
          <button className="bg-[#1d5e7e] text-white px-3 py-1 ">Cancel</button>
          <button className="bg-[#1d5e7e] text-white px-3 py-1 ">Print</button>
          <button className="bg-[#1d5e7e] text-white px-3 py-1 ">Email</button>
          <button className="bg-[#1d5e7e] text-white px-3 py-1 ">Export</button>
        </div>
      </div>
    </div>
  );
};

export default CommonBillForm;
