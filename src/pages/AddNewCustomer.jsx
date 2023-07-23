import React, { useState, useContext } from "react";
import CustomerVendorForm from "../components/CustomerVendorForm";
import SharedContext from "../contexts/SharedContext";

const AddNewCustomer = () => {
  
  const { fields } = useContext(SharedContext);
  const [customer, setCustomer] = useState(
    fields.reduce((acc, field) => {
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
    const clearFields = fields.reduce((acc, field) => {
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
      
      <CustomerVendorForm title={"Add New Customer"} fields={fields} data={customer} onChange={handleChange} />
      
      <div className="flex justify-end mt-3 space-x-3 text-xs">
        <button onClick={handleSave} className="bg-[#1d5e7e] text-white px-3 py-1">
          Save
        </button>
        <button onClick={handleClear} className="bg-[#1d5e7e] text-white px-3 py-1">
          Clear
        </button>
        <button onClick={handlePrint} className="bg-[#1d5e7e] text-white px-3 py-1">
          Print
        </button>
        <button onClick={handleImport} className="bg-[#1d5e7e] text-white px-3 py-1">
          Import
        </button>
      </div>
    </>
  );
};

export default AddNewCustomer;
