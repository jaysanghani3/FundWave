import React, { useState, useContext, useEffect } from "react";
import CustomerVendorForm from "../../components/CustomerVendorForm";
import SharedContext from "../../../contexts/SharedContext";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const AddNewCustomer = () => {
  
  const { fields, getCustomerData } = useContext(SharedContext);
  const { customerId } = useParams(); // Get the customer ID from the route parameters

  const [customer, setCustomer] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Customer ID:", customerId)
    if (customerId) {
      // Fetch the customer data for editing
      fetchCustomerData();
    }
  }, [customerId]);

  const fetchCustomerData = async () => {
    try {
      const response = await axios.get(`https://fundwave-api.vercel.app/customer/${customerId}`);
      const updatedCustomer = fields.reduce((acc, field) => {
        acc[field.name] = response.data[field.name] || "";
        return acc;
      }, {});
  
      setCustomer(updatedCustomer);
    } catch (error) {
      console.error('Error fetching customer data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    try {
      if (customerId) {
        // Update the customer
        const response = await axios.put(`https://fundwave-api.vercel.app/customer/${customerId}`, customer);
        console.log('Response:', response.data);
        getCustomerData();
        toast.success("Customer updated successfully.");
        navigate("/customer");
      } else {
        // Create a new customer
        const response = await axios.post('https://fundwave-api.vercel.app/customer/store', customer);
        console.log('Response:', response.data);
        toast.success("Customer updated successfully.");  getCustomerData();
        navigate("/customer");
      }
    } catch (error) {
      console.error('Error:', error.response.data.error);

    }
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
      <Toaster/>
    
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
