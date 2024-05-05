import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDelete, MdEdit, MdOutlineRemoveRedEye } from "react-icons/md";
import axios from "axios";
import { format } from "date-fns";
import { toast, Toaster } from "react-hot-toast";

const EmployeeMaster = () => {

  const [employeeData, setEmployeeData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredTableBody, setFilteredTableBody] = useState(employeeData);

  const tableHeader = [
    { name: "S.No", width: "w-1/12" },
    { name: "Action", width: "" },
    { name: "Name", width: "w-3/12" },
    { name: "Email", width: "w-4/12" },
    { name: "Contact Number", width: "w-2/12" },
    { name: "Created At", width: "w-2/12" },
  ];
  useEffect(() => {
    const getEmployeeData = async () => {
      const response = await axios.get("https://fundwave-jaysanghani3s-projects.vercel.app/user/getall");
      setEmployeeData(response?.data);
    };
    getEmployeeData();
  }, []);

  const fetchData = () => {
    if (searchValue) {
      const filteredData = employeeData.filter((item) =>
        item.name?.toLowerCase().includes(searchValue?.toLowerCase()) ||
        item.email?.toLowerCase().includes(searchValue?.toLowerCase())
      );
      setFilteredTableBody(filteredData);
    } else {
      setFilteredTableBody(employeeData);
    }
  }

  useEffect(() => {
    fetchData();
  }, [searchValue, employeeData,]);

  const handleDeleteEmployee = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await axios.delete(`https://fundwave-jaysanghani3s-projects.vercel.app/user/${id}`);
        window.location.reload();
        toast("Deleted successfully", {
          icon: <MdOutlineDelete size={20} className="text-red-500 ml-2" />,
        })
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };


  return (
    <div className="text-xs">
      <h1 className="text-sm font-bold bg-[#1d5e7e] text-white py-1 text-center">Employee Master</h1>
      <Toaster position="top-right"
        reverseOrder={false} />
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
          <Link to='/add-new-employee'>
            <button className="bg-[#1d5e7e] text-white px-3 py-1">Add New Employee</button>
          </Link>
        </div>

        <table className="table-auto w-full mt-3">
          <thead>
            <tr className="bg-[#1d5e7e] text-white font-semibold text-sm">
              {tableHeader.map((item, index) => (
                <td key={index} className={`px-2 py-1 border-r ${item.width}`}>
                  {item.name}
                </td>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredTableBody.map((item, index) => (
                <tr key={index} className="bg-white border hover:bg-gray-200">
                  <td className="px-2 py-1 border-r text-center">{index + 1}</td>
                  <td className="flex px-2 py-1 border-r justify-between items-center text-sm">
                    <button onClick={() => handleDeleteEmployee(item._id)}>
                      <MdOutlineDelete className="text-red-500 ml-2" />
                    </button>
                  </td>
                  <td className="px-2 border-r">{item.name}</td>
                  <td className="px-2 border-r">{item.email}</td>
                  <td className="px-2 border-r">{item.phone}</td>
                  <td className="px-2 border-r">{format(new Date(item.createdAt), "dd MMM yyyy")}</td>
                </tr>
              ))
              }
          </tbody>
        </table>
      </div>
      <div className="px-4 py-2">
        <hr className="my-3" />
        <span>
          Total Employee : {employeeData.length}
        </span>
      </div>
      
    </div>
  )
}

export default EmployeeMaster
