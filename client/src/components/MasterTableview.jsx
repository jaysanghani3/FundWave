import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDelete, MdEdit, MdOutlineRemoveRedEye } from "react-icons/md";
import axios from "axios";
import { format } from "date-fns";
import { toast,Toaster } from "react-hot-toast";

const MasterTableview = ({ title, tableHeader, tableBody, getCustomerData, getItemData, getVendorData, getInvoiceData }) => {

  const [searchValue, setSearchValue] = useState("");
  const [filteredTableBody, setFilteredTableBody] = useState(tableBody);

  const deleteToast = () => toast("Item deleted successfully",{
    icon: <MdOutlineDelete size={20} className="text-red-500 ml-2" />,
  });

  const fetchData = () => {
    if (searchValue) {
      const filteredData = tableBody.filter((item) =>
        item.companyName?.toLowerCase().includes(searchValue?.toLowerCase()) ||
        item.name?.toLowerCase().includes(searchValue?.toLowerCase())
      );
      setFilteredTableBody(filteredData);
    } else {
      setFilteredTableBody(tableBody);
    }
  }

  useEffect(() => {
    fetchData();
  }, [searchValue, tableBody,]);

  const handleDeleteVC = async (id) => {
    if (title === "Customer") {
      if (window.confirm("Are you sure you want to delete this customer?")) {
        try {
          await axios.delete(`https://fundwave-qvuy.onrender.com/customer/${id}`);
          getCustomerData(); // to refrsh page and render data
          deleteToast();
        } catch (error) {
          console.error('Error deleting item:', error);
        }
      }

    } else if (title === "Vendor") {
      if (window.confirm("Are you sure you want to delete this vendor?")) {
        try {
          await axios.delete(`https://fundwave-qvuy.onrender.com/vendor/${id}`);
          getVendorData();deleteToast();
        } catch (error) {
          console.error('Error deleting item:', error);
        }
      }
    }
  };

  const handleDeleteItem = async (id) => {
    if (window.confirm("Are you sure you want to delete this Item?")) {
      try {
        await axios.delete(`https://fundwave-qvuy.onrender.com/item/${id}`);
        getItemData();deleteToast();
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }

  };

  const handleDeleteInvoice = async (id) => {
    if (window.confirm("Are you sure you want to delete this Item?")) {
      try {
        await axios.delete(`https://fundwave-qvuy.onrender.com/invoice/${id}`);
    deleteToast();
    getInvoiceData();
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };

  return (
    <div className="text-xs">
      <h1 className="text-sm font-bold bg-[#1d5e7e] text-white py-1 text-center">{title} Master</h1>
      <Toaster position="top-right"
  reverseOrder={false}/>
      <div className="px-3">
        <div className="flex justify-end items-center space-x-2 mt-3">
          <input
            type="text"
            placeholder="Search by name"
            className="border px-2 py-1"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button className="bg-[#1d5e7e] text-white px-3 py-1">Export</button>
          <button className="bg-[#1d5e7e] text-white px-3 py-1">Print</button>
          <Link to={title === "Sales Invoice" ?`/sales-invoice` : `/add-new-${title.toLowerCase()}`}>
            <button className="bg-[#1d5e7e] text-white px-3 py-1">Add New {title}</button>
          </Link>
        </div>

        <table className="table-auto w-full mt-3">
          <thead>
            <tr className="bg-[#1d5e7e] text-white">
              {tableHeader.map((item, index) => (
                <td key={index} className={`px-2 py-1 border-r ${item.width}`}>
                  {item.name}
                </td>
              ))}
            </tr>
          </thead>

          <tbody>
            {title === "Item"
              ? filteredTableBody.map((item, index) => (
                <tr key={index} className="bg-white border hover:bg-gray-200">
                  <td className="px-2 py-1 border-r text-center">{index + 1}</td>
                  <td className="flex px-2 py-1 border-r justify-between items-center text-sm">
                    <Link to={`/edit-item/${item._id}`}>
                      <MdEdit className="text-blue-500 mr-2" />
                    </Link>
                    <button onClick={() => handleDeleteItem(item._id)}>
                      <MdOutlineDelete className="text-red-500 ml-2" />
                    </button>
                  </td>
                  <td className="px-2 border-r">{item.code}</td>
                  <td className="px-2 border-r">{item.name}</td>
                  <td className="px-2 border-r">{item.category}</td>
                  <td className="px-2 border-r">{item.group}</td>
                  <td className="px-2 border-r">{item.type}</td>
                  <td className="px-2 border-r">{item.quantity}</td>
                  <td className="px-2 border-r">{item.stockUnit}</td>
                  <td className="px-2 border-r text-end">{item.gst}</td>
                  {/* <td className="px-2 border-r">{item.createdOn}</td> */}
                </tr>
              ))
              : filteredTableBody.map((item, index) => (
                <tr key={index} className="bg-white border hover:bg-gray-200">
                  <td className="px-2 py-1 border-r">{index + 1}</td>
                  {
                    title === "Sales Invoice" ?
                    (
                      <td className="flex px-2 py-1 border-r justify-between items-center text-sm">
                    <Link to={`/view-invoice/${item._id}`}> {/* target="_blank"*/}
                      <MdOutlineRemoveRedEye className="text-blue-500 mr-2" />
                    </Link>
                    <button onClick={() => handleDeleteInvoice(item._id)}>
                      <MdOutlineDelete className="text-red-500 ml-2" />
                    </button>
                  </td>
                    ):(
                      <td className="flex px-2 py-1 border-r justify-between items-center text-sm">
                    <Link to={`/edit-${title.toLowerCase()}/${item._id}`}>
                      <MdEdit className="text-blue-500 mr-2" />
                    </Link>
                    <button onClick={() => handleDeleteVC(item._id)}>
                      <MdOutlineDelete className="text-red-500 ml-2" />
                    </button>
                  </td>
                    )
                  }
                  <td className="px-2 border-r">{item.code?item.code:item.invoiceNo}</td>
                  <td className="px-2 border-r">{item.companyName}</td>
                  <td className="px-2 border-r">{item.contactNumber}</td>
                  <td className="px-2 border-r">{item.email?item.email:item.gst}</td>
                  <td className="px-2 border-r text-right">{item.city?item.city:(item.total).toFixed(2)}</td>
                  <td className="px-2 border-r text-center">{item.gst?item.gst:format(new Date(item.createdDate), "dd MMM yyyy")}</td>
                  {/* <td className="px-2    ">{item.created_on_date}</td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-2">
        <hr className="my-3" />
        <span>
          Total {title} : {tableBody.length}
        </span>
      </div>
    </div>
  );
};

export default MasterTableview;
