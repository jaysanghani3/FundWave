import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditCustomer = () => {
  const { customerId } = useParams(); // Extract the dynamic parameter from URL
  const [customer, setCustomer] = useState({});
  
  useEffect(() => {
    fetchCustomerData(customerId);
  }, [customerId]);

  const fetchCustomerData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/customer/${id}`);
      setCustomer(response.data); // Set customer data for editing
    } catch (error) {
      console.error('Error fetching customer data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/customer/${customerId}`, customer);
      console.log('Response:', response.data);
      alert("Customer updated successfully.");
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  return (
    <div>
      <h1>Edit Customer</h1>
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
      <button onClick={handleUpdate}>Update Customer</button>
    </div>
  );
};

export default EditCustomer;
