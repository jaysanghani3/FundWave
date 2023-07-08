import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { TbFileInvoice, TbReportAnalytics } from "react-icons/tb";
import { PiHandCoinsBold } from "react-icons/pi";
import { MdOutlineInventory2, MdSettings } from "react-icons/md";

const Sidebar = () => {
  const sidebarMenu = [
    { title: "Dashboard", icon: <HiOutlineHome className="w-8 h-8 sm:w-4 sm:h-4 text-white" /> },
    { title: "Sales", icon: <TbFileInvoice className="w-8 h-8 sm:w-4 sm:h-4 text-white" /> },
    { title: "Purchases", icon: <PiHandCoinsBold className="w-8 h-8 sm:w-4 sm:h-4 text-white" /> },
    { title: "Inventory", icon: <MdOutlineInventory2 className="w-8 h-8 sm:w-4 sm:h-4 text-white" /> },
    { title: "Reports", icon: <TbReportAnalytics className="w-8 h-8 sm:w-4 sm:h-4 text-white" /> },
    { title: "Settings", icon: <MdSettings className="w-8 h-8 sm:w-4 sm:h-4 text-white" /> },
  ];

  return (
    <div className="fixed flex flex-col top-0 left-0 w-2/12 bg-[#1D5B79] h-full border-r">
      <div className="items-center hidden sm:block justify-center p-1 border-b mb-1">
          <span className="text-xl font-semibold text-white  tracking-widest	">Fund Wave</span>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col ">
            {sidebarMenu.map((item, index) => (
              <li key={index}>
                <Link to={`/${item.title.toLowerCase()}`} className="relative flex flex-row items-center p-[6px] focus:outline-none hover:bg-[#267399] text-gray-600 border-l-4 border-transparent hover:border-white pr-6">
                  <span className="inline-flex justify-center items-center">{item.icon}</span>
                  <span className="text-sm hidden sm:block tracking-wide truncate ml-2 text-white">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Sidebar;
