import React, { useState, useContext } from "react";
import SharedContext from "../contexts/SharedContext";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { sidebarMenus } = useContext(SharedContext);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  return (
    <>
      {sidebarMenus.map((menu, index) => (
        <div key={index} className="border-b border-[#154056] py-1">
          {menu.menuName == "Dashboard" ? (
            <Link to={menu.link} className="flex items-center w-full focus:outline-none hover:bg-[#267399] text-gray-600 border-l-4 border-transparent hover:border-white pr-6 py-1 flex-row">
              <span className="ml-2 inline-flex justify-center items-center">{menu.icon}</span>
              <span className="text-base hidden sm:block tracking-wide truncate mx-2 text-white">{menu.menuName}</span>
            </Link>
          ) : (
            <>
              <button onClick={() => toggleSubMenu(index)} className="flex items-center w-full focus:outline-none hover:bg-[#267399] text-gray-600 border-l-4 border-transparent hover:border-white pr-6 py-1 flex-row">
                <span className="ml-2 inline-flex justify-center items-center">{menu.icon}</span>
                <span className="text-base hidden sm:block tracking-wide truncate mx-2 text-white">{menu.menuName}</span>
                <AiOutlineDown className="text-white ms-auto " />
              </button>

              {openSubMenu === index &&
                menu.subMenus.map((subMenu, subIndex) => (
                  <Link key={subIndex} to={subMenu.link} className="flex flex-col text-white text-sm pl-8 pr-2 hover:bg-[#267399] w-full py-1">
                    {subMenu.name}
                  </Link>
                ))}
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Sidebar;
