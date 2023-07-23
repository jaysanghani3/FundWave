import React, { useState, useContext } from "react";
import CustomerVendorForm from "../components/CustomerVendorForm";
import SharedContext from "../contexts/SharedContext";

const AddNewCustomer = () => {
  
  const { customerFields } = useContext(SharedContext);
  const [customer, setCustomer] = useState(
    customerFields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log(customer);
  };

  const handleClear = () => {
    const clearFields = customerFields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});
    setCustomer(clearFields);
  };

  const handlePrint = () => {
    console.log("Print");
  };

  const handleImport = () => {
    console.log("Import");
  };
  

  return (
    <>
      <h1 className="text-sm font-bold bg-[#1d5e7e] text-white px-3 py-1">Add New Customer</h1>
      
      <CustomerVendorForm fields={customerFields} data={customer} onChange={handleChange} />
      
      <div className="flex justify-end mt-5 space-x-3">
        <button onClick={handleSave} className="bg-[#1d5e7e] text-white px-3 py-1 rounded-md">
          Save
        </button>
        <button onClick={handleClear} className="bg-[#1d5e7e] text-white px-3 py-1 rounded-md">
          Clear
        </button>
        <button onClick={handlePrint} className="bg-[#1d5e7e] text-white px-3 py-1 rounded-md">
          Print
        </button>
        <button onClick={handleImport} className="bg-[#1d5e7e] text-white px-3 py-1 rounded-md">
          Import
        </button>
      </div>
    </>
  );
};

export default AddNewCustomer;
