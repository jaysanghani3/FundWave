import SharedContext from "../../../contexts/SharedContext"
import React, { useState, useContext, useEffect, useRef } from "react";
import { MdOutlineDelete } from "react-icons/md";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const SalesInvoice = () => {

  const { customerData, getInvoiceData, itemData } = useContext(SharedContext);
  const navigate = useNavigate();

  const invoiceNumberRef = useRef(null);
  const cashCreditRef = useRef(null);
  const companyNameRef = useRef(null);
  const qtyRef = useRef(null);
  const addBtnRef = useRef(null);
  const itemInputsRefs = useRef([]);

  const initialItem = {
    name: "",
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
    createdDate: new Date().toISOString().substr(0, 10) || '',
    dueDate: (new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)).toISOString().substr(0, 10) || '',
    contactNumber: "",
    billingAddress: "",
    subTotal: 0,
    taxableValue: 0,
    discount: 0,
    cgst: 0,
    sgst: 0,
    total: 0,
    terms: "",
    remarks: "",
    items: rows?.map(() => ({ ...initialItem })),
  });

  const [fetchedData, setFetchedData] = useState({
    companyDetails: customerData,
    itemDetails: itemData,
  });

  useEffect(() => {
    setFetchedData({
      companyDetails: customerData,
      itemDetails: itemData,
    });
  }, [customerData, itemData]);

  const handleInvoiceChange = (e) => {
    const { name, value } = e.target;
    setInvoice((prev) => ({ ...prev, [name]: value }));

    // Filter the customer data based on the input value and update fetchedData
    setFetchedData((prevData) => ({
      ...prevData,
      companyDetails: customerData.filter((item) =>
        item.companyName.toLowerCase().includes(value.toLowerCase())
      ),
    }));
  };

  // Define the useEffect hook to update totals when rows change ** Face final total inccoret then i use this
  useEffect(() => {
    // Update invoice totals whenever rows change
    updateInvoiceTotals();
  }, [rows]);

    const handleItemChange = (e, rowIndex, field) => {
      const { value } = e.target;

      // Create a copy of the rows state array to work with
      const updatedRows = [...rows];

      // Access the specific item being updated
      const updatedItem = { ...updatedRows[rowIndex] };

      // Update the field of the item based on the input value
      updatedItem[field] = field === "name" || field === "description" ? value : parseFloat(value);

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
      const updatedInvoiceItems = [...invoice.items];
updatedInvoiceItems[rowIndex] = { ...updatedItem };

setInvoice((prevInvoice) => ({
  ...prevInvoice,
  items: updatedInvoiceItems,
}));
      updateInvoiceTotals();
      // Filter the item data based on the input value and update fetchedData
      setFetchedData((prevData) => ({
        ...prevData,
        itemDetails: itemData.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        ),
      }));
      // Update invoice totals
    };

  const updateInvoiceTotals = () => {
    let subTotal = 0;
    let discountTotal = 0;
    let cgstTotal = 0;
    let sgstTotal = 0;
    let totalInvoice = 0;
    let totalTaxableValue = 0;

    rows.forEach((item) => {
      subTotal += item.taxableValue;
      discountTotal += item.discount;
      totalTaxableValue += item.taxableValue - item.discount;
      cgstTotal += item.taxableValue * (item.taxCode / 200); // Assuming equal split between cgst and sgst
      sgstTotal += item.taxableValue * (item.taxCode / 200); // Assuming equal split between cgst and sgst
      totalInvoice += item.total;
    });

    setInvoice((prev) => ({
      ...prev,
      subTotal,
      discount: discountTotal,
      taxableValue: totalTaxableValue,
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
      const response = await axios.post('http://localhost:3000/invoice/store', invoice);
      console.log('Response:', response?.data);
      toast.success("Invoice Created successfully.");
      // getComputedStyle("/sales-invoice-master");
      getInvoiceData();
      navigate("/sales-invoice-master");
    }
    catch (error) {
      console.error('Error:', error.response?.data.error);
    }
  };

  const [clickCompanyFiled, setClickCompanyFiled] = useState(false);
  const [clickItemFiled, setClickItemFiled] = useState(false);

  const handleCompanyFieldClick = (selectedCompanyName) => {
    const selectedCompany = fetchedData.companyDetails.find(
      (company) => company.companyName === selectedCompanyName
    );

    if (selectedCompany) {
      updateCompanyDetails([selectedCompany]);
      // Update the invoice state with the selected company's details
      setInvoice((prevData) => ({
        ...prevData,
        companyName: selectedCompany.companyName,
        gst: selectedCompany.gst || "",
        contactNumber: selectedCompany.contactNumber || "",
        billingAddress: selectedCompany.billingAddress || "",
      }));
    }
    setClickCompanyFiled(false);
  }

  // Update company details
  const updateCompanyDetails = (newCompanyData) => {
    setFetchedData((prevData) => ({
      ...prevData,
      companyDetails: newCompanyData,
    }));
  };

  // Update item details
  const updateItemDetails = (newItemData) => {
    setFetchedData((prevData) => ({
      ...prevData,
      itemDetails: newItemData,
    }));
  };

  const handleItemFieldClick = (selectedItemName, rowIndex) => { // Add rowIndex parameter
    const selectedItem = fetchedData.itemDetails.find(
      (item) => item.name === selectedItemName
    );

    if (selectedItem) {
      updateItemDetails([selectedItem]);
      // Create a copy of the rows state array to work with
      const updatedRows = [...rows];

      // Update the specific item in the copy of the rows state array
      updatedRows[rowIndex] = {
        ...updatedRows[rowIndex],
        name: selectedItem.name,
        description: selectedItem.description || "",
        rate: selectedItem.rate || 0, // Set a default value if rate is not available
        taxCode: selectedItem.taxCode || 0, // Set a default value if taxCode is not available
      };

      // Update the rows state with the modified array
      setRows(updatedRows);
      setInvoice((prevInvoice) => {
        const updatedItems = [...prevInvoice.items];
        updatedItems[rowIndex] = {
          ...updatedItems[rowIndex],
          name: selectedItem.name,
          description: selectedItem.description || "",
          rate: selectedItem.rate || 0,
          taxCode: selectedItem.taxCode || 0,
        };
        return { ...prevInvoice, items: updatedItems };
      });

      // Update invoice totals
      updateInvoiceTotals();
    }

    setClickItemFiled(false); // Move this inside the if block
  };

  const handleKeyDown = (e) => {
    if (clickCompanyFiled) {
      const suggestions = fetchedData.companyDetails || [];
      const selectedIndex = suggestions.findIndex((value) => value.companyName === invoice.companyName);
      if (e.key === 'Tab' || e.key === 'Enter') {
        e.preventDefault();
        if (selectedIndex !== -1) {
          handleCompanyFieldClick(suggestions[selectedIndex].companyName);
        }
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const newIndex = (selectedIndex + 1) % suggestions.length;
        setInvoice((prevInvoice) => ({
          ...prevInvoice,
          companyName: suggestions[newIndex].companyName,
        }));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const newIndex = (selectedIndex - 1 + suggestions.length) % suggestions.length;
        setInvoice((prevInvoice) => ({
          ...prevInvoice,
          companyName: suggestions[newIndex].companyName,
        }));
      }
    }

    else if (clickItemFiled) {
      const suggestions = fetchedData.itemDetails || [];
      const selectedIndex = suggestions.findIndex((value) => value.name === rows.name);
      if (e.key === 'Tab' || e.key === 'Enter') {
        e.preventDefault();
        if (selectedIndex !== -1) {
          handleCompanyFieldClick(suggestions[selectedIndex].companyName);
        }
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const newIndex = (selectedIndex + 1) % suggestions.length;
        setRows((prevRows) => ({
          ...prevRows,
          name: suggestions[newIndex].name,
        }));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const newIndex = (selectedIndex - 1 + suggestions.length) % suggestions.length;
        setRows((prevRows) => ({
          ...prevRows,
          name: suggestions[newIndex].name,
        }));
      }
    }


  };

  return (
    <div className="h-[98%] flex flex-col border-2 gap-y-3 min-h-full text-xs ">
      <h1 className="text-sm font-bold bg-[#1d5e7e] text-white px-3 py-1">Create New Sales Invoice</h1>
      <Toaster />
      <div className="grid grid-cols-3 gap-6 border border-gray-300 p-2 mx-2">

        <div className="flex flex-col gap-y-1 border-l-2 border-blue-100">
          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">Invoice No.</label>
            <input autoComplete="off" value={invoice.invoiceNo} onChange={handleInvoiceChange} type="text" name="invoiceNo" id="invoiceNo" className="border ps-2 border-gray-300 ms-auto w-7/12" ref={invoiceNumberRef} tabIndex="1" />
          </div>

          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">Company Name</label>
            <div className="relative ms-auto w-7/12">
              <input
                autoComplete="off"
                type="text"
                name="companyName"
                id="companyName"
                className="border ps-2 border-gray-300 ms-auto w-full"
                value={invoice.companyName}
                onClick={() => setClickCompanyFiled(true)}
                onFocus={() => setClickCompanyFiled(true)}
                onBlur={() => setTimeout(() => setClickCompanyFiled(false), 200)}
                onKeyDown={handleKeyDown}
                onChange={handleInvoiceChange}
                ref={companyNameRef}
                tabIndex="2"
              />
              {clickCompanyFiled && (
                <div className="absolute z-10 bg-white border border-gray-300  w-[110%] mt-1">
                  {fetchedData.companyDetails
                    ?.map((value, index) => {
                      return (
                        <div key={index}
                          className="cursor-pointer border-b border-gray-400 p-2 hover:bg-gray-300"
                          onClick={() => handleCompanyFieldClick(value.companyName)}
                        >
                          <span className="border-r pr-2 border-gray-600">{value.code}</span>
                          <span className="font-semibold ms-2">{value.companyName}</span>
                        </div>
                      );

                    }
                    )}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">Cash/Credit</label>
            <input autoComplete="off" value={invoice.cashCredit} onChange={handleInvoiceChange} type="text" name="cashCredit" id="cashCredit" className="border ps-2 border-gray-300 ms-auto w-7/12" ref={cashCreditRef} tabIndex="3" />
          </div>

        </div>

        <div className="flex flex-col gap-y-1 border-l-2 border-blue-100">
          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">GST No.</label>
            <input autoComplete="off" value={invoice.gst} onChange={handleInvoiceChange} type="text" name="gst" id="gst" className="border ps-2 border-gray-300 ms-auto w-7/12" />
          </div>


          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">Created Date</label>
            <input
              autoComplete="off"
              onChange={handleInvoiceChange}
              type="date"
              value={invoice.createdDate}
              name="createdDate"
              id="createdDate"
              className="border ps-2 border-gray-300 ms-auto w-7/12"
            />
          </div>

          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">Due Date</label>
            <input
              autoComplete="off"
              onChange={handleInvoiceChange}
              type="date"
              name="dueDate"
              value={invoice.dueDate}
              id="dueDate"
              className="border ps-2 border-gray-300 ms-auto w-7/12"
            />

          </div>
        </div>

        <div className="flex flex-col gap-y-1 border-l-2 border-blue-100">
          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">Contact No.</label>
            <input autoComplete="off" value={invoice.contactNumber} onChange={handleInvoiceChange} type="number" name="contactNumber" id="contactNumber" className="border ps-2 border-gray-300 ms-auto w-7/12" />
          </div>

          <div className="flex flex-row">
            <label className="ml-5 font-medium text-gray-700">Address</label>
            <textarea autoComplete="off" value={invoice.billingAddress} onChange={handleInvoiceChange} name="billingAddress" id="billingAddress" className="border ps-2 border-gray-300 ms-auto w-7/12 resize-none h-12" />
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
                  <input
                    autoComplete="off"
                    type="text"
                    name="name"
                    id={`name-${index}`}
                    className="ps-2 border border-gray-300 ms-auto w-full"
                    value={rows[index].name || ""}
                    onClick={() => setClickItemFiled(true)}
                    onFocus={() => setClickItemFiled(true)}
                    // onKeyDown={handleKeyDown}
                    onBlur={() => setTimeout(() => setClickItemFiled(false), 200)}
                    onChange={(e) => handleItemChange(e, index, "name")}
                    ref={(input) => (itemInputsRefs.current[index] = input)} // Save refs for each item input
                    tabIndex={4 + index } // Set the tab index accordingly
                  />
                  {clickItemFiled && (
                    <div className="absolute z-10 bg-white border border-gray-300 mt-1">
                      {fetchedData.itemDetails
                        ?.map((value, i) => (
                          <div
                            key={i}
                            className="cursor-pointer border-b border-gray-400 p-2 hover:bg-gray-300"
                            onClick={() => handleItemFieldClick(value.name, index)} // Pass i here
                          >
                            <span className="font-semibold ms-2">{value.name}</span>
                          </div>
                        ))}
                    </div>
                  )}
                  {/* </div> */}
                </td>
                <td className="text-left">
                  <input autoComplete="off" value={rows[index].description || ""} onChange={(e) => handleItemChange(e, index, "description")} type="text" name="description" id={`description-${index}`} className="border ps-2 border-gray-300 ms-auto w-full text-[11px]" />
                </td>
                <td>
                  <input autoComplete="off" value={rows[index].qty || ""} onChange={(e) => handleItemChange(e, index, "qty")} type="number" name="qty" id="qty" className="border text-right pr-1 ps-2 border-gray-300 ms-auto w-full"
                    ref={qtyRef}
                    tabIndex={5 + index }
                  />
                </td>
                <td>
                  <input autoComplete="off" value={rows[index].rate || 0} onChange={(e) => handleItemChange(e, index, "rate")} type="number" name="rate" id="rate" className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2" />
                </td>
                <td>
                  <input autoComplete="off" value={rows[index].discount || 0} onChange={(e) => { handleItemChange(e, index, "discount") }} type="number" name="discount" id="discount" className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2" />
                </td>
                <td>
                  <input autoComplete="off" value={rows[index].taxCode || 0} onChange={(e) => { handleItemChange(e, index, "taxCode"); console.log(rows[index].qty) }} type="number" name="taxCode" id="taxCode" className="border text-right pr-1 border-gray-300 ms-auto w-full ps-2" />
                </td>
                <td>
                  <div className="text-right border pr-1 bg-white border-gray-300 ms-auto w-full ps-2">
                    {(item.taxableValue)?.toFixed(2) || 0}
                  </div>
                </td>
                <td>
                  <div className="text-right pr-1 border bg-white border-gray-300 ms-auto w-full ps-2">
                    {(item.total)?.toFixed(2) || 0}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div className="flex flex-row justify-end gap-x-2 m-2">
        <button
          className="bg-[#1d5e7e] text-white px-3 py-1"
          ref={addBtnRef}
          tabIndex={6 + rows.length}
          onClick={() => {
            addRow();
            if (itemInputsRefs.current.length > 0) {
              itemInputsRefs.current[itemInputsRefs.current.length - 1].focus(); // Focus on the last item input
            }
          }}
        >
          Add Item
        </button>
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

export default SalesInvoice;
