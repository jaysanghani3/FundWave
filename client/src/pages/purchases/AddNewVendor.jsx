import React, { useState, useContext } from "react";
import CustomerVendorForm from "../../components/CustomerVendorForm";
import SharedContext from "../../contexts/SharedContext";

const AddNewVendor = () => {
  
    const { fields } = useContext(SharedContext);

    const [vendor, setVendor] = useState(
      fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {})
    );
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setVendor((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSave = () => {
      console.log(vendor);
    };
  
    const handleClear = () => {
      const clearFields = fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {});
      setVendor(clearFields);
    };
  
    const handlePrint = () => {
      console.log("Print");
    };
  
    const handleImport = () => {
      console.log("Import");
    };
  
    return (
      <>
        <CustomerVendorForm title={"Add New Vendor"} fields={fields} data={vendor} onChange={handleChange} />
        
        <div className="flex justify-end my-3 space-x-3 text-xs">
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
}

export default AddNewVendor
