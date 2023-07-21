import React, { useState } from "react";
import ImageUpload from "../components/ImageUpload";

const AddNewCustomer = () => {
  const [customer, setCustomer] = useState({
    gstNo: "",
    name: "",
    customerCode: "",
    email: "",
    phone: "",
    panNo: "",
    billingAddress: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    notes: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };


  const handleSave = () => {
    console.log(customer);
  };

  const handleClear = () => {
    setCustomer({
      gstNo: "",
      name: "",
      customerCode: "",
      email: "",
      phone: "",
      panNo: "",
      billingAddress: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      notes: "",
      image: "",
    });
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

      <div className="grid grid-cols-3 gap-6 border p-3 pl-9 my-2 text-[13px]">
        <div className="flex flex-col col-span-2 gap-y-2">
          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="gstNo">
              GST No.
            </label>
            <input onChange={handleChange} value={customer.gstNo} className="border ms-auto pl-1 w-10/12" id="gstNo" name="gstNo" type="text" />
          </div>

          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="name">
              Name
            </label>
            <input onChange={handleChange} value={customer.name} className="border ms-auto pl-1 w-10/12" id="name" name="name" type="text" />
          </div>

          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="customerCode">
              Customer Code
            </label>
            <input onChange={handleChange} value={customer.customerCode} className="border ms-auto pl-1 w-10/12" id="customerCode" name="customerCode" type="text" />
          </div>

          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="email">
              Email
            </label>
            <input onChange={handleChange} value={customer.email} className="border ms-auto pl-1 w-10/12" id="email" name="email" type="email" />
          </div>

          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="phone">
              Phone No
            </label>
            <input onChange={handleChange} value={customer.phone} className="border ms-auto pl-1 w-10/12" id="phone" name="phone" type="text" />
          </div>

          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="panNo">
              PAN No
            </label>
            <input onChange={handleChange} value={customer.panNo} className="border ms-auto pl-1 w-10/12" id="panNo" name="panNo" type="text" />
          </div>

          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="billingAddress">
              Billing Address
            </label>
            <textarea onChange={handleChange} value={customer.billingAddress} className="border h-16 ms-auto px-2 w-10/12 resize-none" id="billingAddress" name="billingAddress"></textarea>
          </div>

          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="city">
              City
            </label>
            <select onChange={handleChange} value={customer.city} className="border ms-auto pl-1 w-10/12" id="city" name="city">
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
            </select>
          </div>

          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="state">
              State
            </label>
            <select onChange={handleChange} value={customer.state} className="border ms-auto pl-1 w-10/12" id="state" name="state">
              <option value="state1">State 1</option>
              <option value="state2">State 2</option>
            </select>
          </div>

          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="zip">
              Zip
            </label>
            <input onChange={handleChange} value={customer.zip} className="border ms-auto pl-1 w-10/12" id="zip" name="zip" type="text" />
          </div>

          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="country">
              Country
            </label>
            <select onChange={handleChange} value={customer.country} className="border ms-auto pl-1 w-10/12" id="country" name="country">
              <option value="country1">Country 1</option>
              <option value="country2">Country 2</option>
            </select>
          </div>

          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="notes">
              Notes
            </label>
            <textarea onChange={handleChange} value={customer.notes} className="border h-16 ms-auto px-2 w-10/12 resize-none" id="notes" name="notes"></textarea>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row">
            <ImageUpload />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-x-3 justify-end mt-5">
        <button className="bg-[#1d5e7e] text-white px-3 py-1 text-xs" onClick={handleSave}>
          Save
        </button>
        <button className="bg-[#1d5e7e] text-white px-3 py-1 text-xs" onClick={handleClear}>
          Clear
        </button>
        <button className="bg-[#1d5e7e] text-white px-3 py-1 text-xs" onClick={handlePrint}>
          Print
        </button>
        <button className="bg-[#1d5e7e] text-white px-3 py-1 text-xs" onClick={handleImport}>
          Import
        </button>
      </div>
    </>
  );
};

export default AddNewCustomer;
