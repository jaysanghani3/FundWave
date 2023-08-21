import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDelete, MdEdit } from "react-icons/md";

const MasterTableview = ({ title, tableHeader, tableBody }) => {

  const [searchValue, setSearchValue] = useState("");
   const [filteredTableBody, setFilteredTableBody] = useState(tableBody);
  
   useEffect(() => {
    if (searchValue) {
      const filteredData = tableBody.filter((item) =>
      item.companyName?.toLowerCase().includes(searchValue?.toLowerCase()) ||
      item.name?.toLowerCase().includes(searchValue?.toLowerCase())
      );
      setFilteredTableBody(filteredData);
    } else {
      setFilteredTableBody(tableBody);
    }
  }, [searchValue, tableBody]);

  return (
    <div className="text-xs">
      <h1 className="text-sm font-bold bg-[#1d5e7e] text-white py-1 text-center">{title} Master</h1>

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
          <Link to={`/add-new-${title.toLowerCase()}`}>
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
                  <td className="px-2 py-1 border-r text-center">{index+1}</td>
                  <td className="flex px-2 py-1 border-r justify-between items-center text-sm">
                    <Link to={`/add-new-item`}>
                      <MdEdit className="text-blue-500 mr-2" />
                    </Link>
                    <MdOutlineDelete className="text-red-500 ml-2" />
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
                  <td className="flex px-2 py-1 border-r justify-between items-center text-sm">
                    <MdEdit className="text-blue-500 mr-2" /> |
                    <MdOutlineDelete className="text-red-500 ml-2" />
                  </td>
                  <td className="px-2 border-r">{item.code}</td>
                  <td className="px-2 border-r">{item.companyName}</td>
                  <td className="px-2 border-r">{item.contactNumber}</td>
                  <td className="px-2 border-r">{item.email}</td>
                  <td className="px-2 border-r">{item.city}</td>
                  <td className="px-2 border-r">{item.gst}</td>
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
