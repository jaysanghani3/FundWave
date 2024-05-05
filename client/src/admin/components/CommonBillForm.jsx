import React, { useState, useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import SharedContext from "../../contexts/SharedContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const CommonInvoiceForm = ({ title, formFields }) => {

  const { customerData , getInvoiceData } = useContext(SharedContext);
  const navigate = useNavigate();

  const companyNames = customerData.map((item) => {
    return { companyName: item.companyName };
  });

  const initialItem = {
    product: "",
    description: "",
    qty: 0,
    rate: 0,
    taxCode: 0,
    discount: 0,
    taxableValue: 0,
    total: 0,
  };

  const [rows, setRows] = useState([initialItem]);

  const [invoice, setInvoice] = useState({
    gst: "",
    invoiceNo: "",
    companyName: "",
    cashCredit: "",
    createdDate: "",
    dueDate: "",
    contactNumber: "",
    address: "",
    subTotal: 0,
    taxableValue: 0,
    discount: 0,
    cgst: 0,
    sgst: 0,
    total: 0,
    terms: "",
    remarks: "",
    items: rows.map(() => ({ ...initialItem })),
  });

  const handleInvoiceChange = (e) => {
    const { name, value } = e.target; setInput(value);
    setInvoice((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (e, rowIndex, field) => {
    const { value } = e.target;

    // Create a copy of the rows state array to work with
    const updatedRows = [...rows];

    // Access the specific item being updated
    const updatedItem = { ...updatedRows[rowIndex] };

    // Update the field of the item based on the input value
    updatedItem[field] = field === "product" || field === "description" ? value : parseFloat(value);

    // Update taxable value and total if applicable
    if (field === "qty" || field === "rate" || field === "discount" || field === "taxCode") {
      const qty = parseFloat(updatedItem.qty || 0);
      const rate = parseFloat(updatedItem.rate || 0);
      const discount = parseFloat(updatedItem.discount || 0);
      const taxCode = parseFloat(updatedItem.taxCode || 0);

      const taxableValue = qty * rate - discount;
      const taxAmount = (taxableValue * taxCode) / 100;
      const total = taxableValue + taxAmount;

      updatedItem.taxableValue = taxableValue;
      updatedItem.total = total;
    }

    // Update the specific item in the copy of the rows state array
    updatedRows[rowIndex] = updatedItem;

    // Update the rows state with the modified array
    setRows(updatedRows);
    setInvoice((prevInvoice) => {
      const updatedItems = [...prevInvoice.items];
      updatedItems[rowIndex] = updatedItem;
      return { ...prevInvoice, items: updatedItems };
    });
    // Update invoice totals
    updateInvoiceTotals();
  };

  const updateInvoiceTotals = () => {
    let subTotal = 0;
    let discountTotal = 0;
    let cgstTotal = 0;
    let sgstTotal = 0;
    let totalInvoice = 0;

    rows.forEach((item) => {
      subTotal += item.taxableValue;
      discountTotal += item.discount;
      cgstTotal += item.taxableValue * (item.taxCode / 200); // Assuming equal split between cgst and sgst
      sgstTotal += item.taxableValue * (item.taxCode / 200); // Assuming equal split between cgst and sgst
      totalInvoice += item.total;
    });

    setInvoice((prev) => ({
      ...prev,
      subTotal,
      discount: discountTotal,
      cgst: cgstTotal,
      sgst: sgstTotal,
      total: totalInvoice,
    }));
  };

  const addRow = () => {
    const updatedRows = [...rows, { ...initialItem }]; // Add a new item to the rows state
    setRows(updatedRows);

    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      items: [...prevInvoice.items, { ...initialItem }],
    }));
  };

  const handleDeleteItem = () => {
    const updatedRows = [...rows];
    updatedRows.pop();
    setRows(updatedRows);
    updateInvoiceTotals();
  };

  const handleInvoiceSubmit = async () => {
    console.log(invoice);
    try {
      if (title === "Sales Invoice") {
        const response = await axios.post('https://fundwave-api.vercel.app/invoice/store', invoice);
        console.log('Response:', response?.data);
        toast.success("Invoice Created successfully.");
        // getComputedStyle("/sales-invoice-master");
        getInvoiceData();
        navigate("/sales-invoice-master");
      }
    }
    catch (error) {
      console.error('Error:', error.response?.data.error);
    }
    // console.log(rows);
  };

  const [click, setClick] = useState(false);
  const [input, setInput] = useState(invoice.companyName);

  const handleClick = () => {
    setClick(true);
  };

  const handleOptionClick = (companyName) => {
    setInput(companyName)
    setClick(false);
  }

  return (
    <div className="h-full flex flex-col border-2 gap-y-3 min-h-full text-xs ">
      <h1 className="text-sm font-bold bg-[#1d5e7e] text-white px-3 py-1">
        Create New {title}
      </h1>
      <Toaster/>
      <div className="grid grid-cols-3 gap-6 border border-gray-300 p-2 mx-2">

        <div className="flex flex-col gap-y-1 border-l-2 border-blue-100">
          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">Invoice No.</label>
            <input autoComplete="false" value={invoice.invoiceNo} onChange={handleInvoiceChange} type="text" name="invoiceNo" id="invoiceNo" className="border ps-2 border-gray-300 ms-auto w-7/12" />
          </div>

          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">Company Name</label>
            <div className="relative ms-auto w-7/12">
              <input
                autoComplete="false"
                onChange={handleInvoiceChange}
                type="text"
                name="companyName"
                id="companyName"
                className="border ps-2 border-gray-300 ms-auto w-full"
                value={invoice.companyName}
                onClick={handleClick}
                onBlur={
                  () => setTimeout(() => {
                    setClick(false)
                  }, 200)

                }
              />
              {click && (
                <div className="absolute z-10 w-7/12 bg-white border ps-2 border-gray-300 ms-auto w-7/12 mt-1">
                  {companyNames
                    .filter(({ companyName }) => companyName.toLowerCase().includes(input.toLowerCase()))
                    .map((value, index) => {
                      return (
                        <div
                          key={index}
                          className="cursor-pointer hover:bg-gray-100 p-1"
                          onClick={() => handleOptionClick(value.companyName)}
                        >
                          {value.companyName}
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">GST No.</label>
            <input autoComplete="false" value={invoice.gst} onChange={handleInvoiceChange} type="text" name="gst" id="gst" className="border ps-2 border-gray-300 ms-auto w-7/12" />
          </div>
        </div>

        <div className="flex flex-col gap-y-1 border-l-2 border-blue-100">
          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">Cash/Credit</label>
            <input autoComplete="false" value={invoice.cashCredit} onChange={handleInvoiceChange} type="text" name="cashCredit" id="cashCredit" className="border ps-2 border-gray-300 ms-auto w-7/12" />
          </div>

          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">Created Date</label>
            <input autoComplete="false" value={invoice.createdDate} onChange={handleInvoiceChange} type="date" name="createdDate" id="createdDate" className="border ps-2 border-gray-300 ms-auto w-7/12" />
          </div>

          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">Due Date</label>
            <input autoComplete="false" value={invoice.dueDate} onChange={handleInvoiceChange} type="date" name="dueDate" id="dueDate" className="border ps-2 border-gray-300 ms-auto w-7/12" />
          </div>
        </div>

        <div className="flex flex-col gap-y-1 border-l-2 border-blue-100">
          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">Contact No.</label>
            <input autoComplete="false" value={invoice.contactNumber} onChange={handleInvoiceChange} type="number" name="contactNumber" id="contactNumber" className="border ps-2 border-gray-300 ms-auto w-7/12" />
          </div>

          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">Address</label>
            <textarea autoComplete="false" value={invoice.address} onChange={handleInvoiceChange} name="address" id="address" className="border ps-2 border-gray-300 ms-auto w-7/12 resize-none h-12" />
            </  div>
          </div>
      </div>

      <div className="overflow-x-auto border border-gray-300 mx-2">
        <table className="table-auto w-full text-sm bg-transparent">
          <thead className="bg-[#1d5e7e] text-white">
            <tr>
              <td className="p-1 w-7">Sr</td>
              <td className="p-1 w-6"></td>
              <td className="p-1 w-40">Product</td>
              <td className="p-1">Description</td>
              <td className="p-1 w-14 text-center">Qty</td>
              <td className="p-1 w-24 text-center">Rate</td>
              <td className="p-1 w-16 text-center">Discount</td>
              <td className="p-1 w-24 text-center">TaxCode in %</td>
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
                <td className="text-left">
                  {/* <select onChange={(e) => handleItemChange(e, index, "product")} name="product" id={`product-${index}`} className="border border-gray-300 ms-auto w-full ps-2">
                    <option value="product1">Product 1</option>
                    <option value="product2">Product 2</option>
                    <option value="product3">Product 3</option>
                  </select> */}
                  <input autoComplete="false"  value={item.product || ""} onChange={(e) => handleItemChange(e, index, "product")} type="text" name="product" id={`product-${index}`}  className="ps-2 border border-gray-300 ms-auto w-full" />
                </td>
                <td className="text-left">
                  <input autoComplete="false" value={item.description || ""} onChange={(e) => handleItemChange(e, index, "description")} type="text" name="description" id={`description-${index}`} className="border ps-2 border-gray-300 ms-auto w-full" />
                </td>
                <td>
                  <input autoComplete="false" onChange={(e) => handleItemChange(e, index, "qty")} type="number" name="qty" id="qty" className="border text-right pr-1 ps-2 border-gray-300 ms-auto w-full" />
                </td>
                <td>
                  <input autoComplete="false" onChange={(e) => handleItemChange(e, index, "rate")} type="number" name="rate" id="rate" className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2" />
                </td>
                <td>
                  <input autoComplete="false" onChange={(e) => { handleItemChange(e, index, "discount") }} type="number" name="discount" id="discount" className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2" />
                </td>
                <td>
                  <input autoComplete="false" onChange={(e) => handleItemChange(e, index, "taxCode")} type="number" name="taxCode" id="taxCode" className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2" />
                </td>
                <td>
                  <div className="text-right border pr-1 bg-white border-gray-300 ms-auto w-full ps-2">
                    {item.taxableValue || 0}
                  </div>

                </td>
                <td>
                  <div className="text-right pr-1 border bg-white border-gray-300 ms-auto w-full ps-2">
                    {item.total || 0}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-row justify-end gap-x-2 m-2">
          <button
            className="bg-[#1d5e7e] text-white px-3 py-1"
            onClick={addRow}
          >
            Add Item
          </button>
        </div>
      </div>

      <div>
        <div className="flex flex-row gap-x-10 mx-2">
          <div className="flex flex-col w-9/12 gap-y-6 mt-3">
            <div className="flex flex-row">
              <label className="w-2/12  font-medium text-gray-700">Remarks</label>
              <textarea
                name="remarks"
                id="remarks"
                className="border border-gray-300 ml-3 w-10/12 resize-none h-12"
              />
            </div>

            <div className="flex flex-row">
              <label className="w-2/12  font-medium text-gray-700">Terms & Conditions</label>
              <textarea
                name="terms"
                id="terms"
                className="border border-gray-300 ml-3 w-10/12 resize-none h-12"
              />
            </div>
          </div>

          <div className="flex flex-col w-3/12 gap-y-1">
            <table className="table-auto w-full bg-transparent">
              <tbody className="text-right ">
                <tr>
                  <td className="w-1/2">
                    <span className="text-right text-gray-700">Sub Total</span>
                  </td>
                  <td>
                    <span>{(invoice.subTotal).toFixed(2)}</span>
                  </td>
                </tr>

                <tr>
                  <td className="w-1/2">
                    <span className="text-right text-gray-700">Discount</span>
                  </td>
                  <td>
                    <span>{(invoice.discount).toFixed(2)}</span>
                  </td>
                </tr>

                <tr>
                  <td className="w-1/2">
                    <span className="text-right text-gray-700">
                      Taxable Value
                    </span>
                  </td>
                  <td>
                    <span>{(invoice.subTotal - invoice.discount).toFixed(2)}</span>
                  </td>
                </tr>

                <tr>
                  <td className="w-1/2">
                    <span className="text-right text-gray-700">CGST</span>
                  </td>
                  <td>
                    <span>{(invoice.cgst).toFixed(2)}</span>
                  </td>
                </tr>

                <tr>
                  <td className="w-1/2">
                    <span className="text-right text-gray-700">SGST</span>
                  </td>
                  <td>
                    <span>{(invoice.sgst).toFixed(2)}</span>
                  </td>
                </tr>

                <tr>
                  <td className="w-1/2">
                    <span className="text-lg text-right text-gray-700">
                      Total
                    </span>
                  </td>
                  <td>
                    <span className="font-semibold text-lg">{(invoice.total).toFixed(2)}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-row justify-end gap-x-2 m-2">
          <button
            className="bg-[#1d5e7e] text-white px-3 py-1 "
            onClick={handleInvoiceSubmit}
          >
            Save
          </button>
          <button className="bg-[#1d5e7e] text-white px-3 py-1 ">Cancel</button>
          <button className="bg-[#1d5e7e] text-white px-3 py-1 " onClick={() => navigate("/sales-invoice-master")}>Back</button>
          <button className="bg-[#1d5e7e] text-white px-3 py-1 ">Email</button>
          <button className="bg-[#1d5e7e] text-white px-3 py-1 ">Export</button>
        </div>
      </div>
    </div>
  );
};

export default CommonInvoiceForm;