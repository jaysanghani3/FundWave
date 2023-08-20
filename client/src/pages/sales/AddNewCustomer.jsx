import React, { useState, useContext } from "react";
import CustomerVendorForm from "../../components/CustomerVendorForm";
import SharedContext from "../../contexts/SharedContext";
import axios from 'axios';

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

  const handleSave = async (e) => {
    console.log(customer);
    try {
      const response = await axios.post('http://localhost:3000/customer/store', customer);
      console.log('Response:', response.data);
      alert("Customer saved successfully.");
      // Handle success or any other action here
    } catch (error) {
      console.error('Error:', error.response.data.error);

    }
    // const response = await fetch("http://localhost:3000/customer/store", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(customer),
    // });

    // const data = await response.json();

    // if(data.status === 422) {
    //   console.log(data.errors);
    //   window.alert("Customer not saved. Please check the console for errors.");
    // }
    // else {
    //   window.alert("Customer saved successfully.");

    //   console.log(data);
    //   console.log("Success - Customer saved successfully.");
    //   // handleClear();
    // }
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
};

export default AddNewCustomer;
