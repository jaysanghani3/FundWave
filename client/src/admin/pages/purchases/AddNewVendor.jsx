import React, { useState, useContext, useEffect } from "react";
import CustomerVendorForm from "../../components/CustomerVendorForm";
import SharedContext from "../../../contexts/SharedContext";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const AddNewVendor = () => {

  const { fields, getVendorData } = useContext(SharedContext);
  const { vendorId } = useParams(); // Get the Vendor ID from the route parameters

  const [vendor, setVendor] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Vendor ID:", vendorId)
    if (vendorId) {
      fetchVendorData();    // Fetch the vendor data for editing
    }
  }, [vendorId]);

  const fetchVendorData = async () => {
    try {
      const response = await axios.get(`https://fundwave-jaysanghani3s-projects.vercel.app/vendor/${vendorId}`);
      const updatedVendor = fields.reduce((acc, field) => {
        acc[field.name] = response.data[field.name] || "";
        return acc;
      }, {});

      setVendor(updatedVendor);
    } catch (error) {
      console.error('Error fetching vendor data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    try {
      if (vendorId) {   // Update the vendor
        const response = await axios.put(`https://fundwave-jaysanghani3s-projects.vercel.app/vendor/${vendorId}`, vendor);
        console.log('Response:', response.data);
        getVendorData();
        toast.success("Vendor updated successfully.");
        navigate("/vendor");
      } else {        // Create a new vendor
        const response = await axios.post('https://fundwave-jaysanghani3s-projects.vercel.app/vendor/store', vendor);
        console.log('Response:', response.data);
        toast.success("Vendor Created successfully.");
        getVendorData();
        navigate("/vendor");
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
}

export default AddNewVendor
