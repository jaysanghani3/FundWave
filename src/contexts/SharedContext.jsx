import { createContext } from "react";

import { HiOutlineHome } from "react-icons/hi";
import { TbFileInvoice, TbReportAnalytics } from "react-icons/tb";
import { PiHandCoinsBold } from "react-icons/pi";
import { MdOutlineInventory2, MdSettings } from "react-icons/md";
const SharedContext = createContext();

export function SharedContextProvider({ children }) {

    const sidebarMenu = [
        { title: "Dashboard", icon: <HiOutlineHome className="w-8 h-8 sm:w-4 sm:h-4 text-white" /> },
        { title: "Sales", icon: <TbFileInvoice className="w-8 h-8 sm:w-4 sm:h-4 text-white" /> },
        { title: "Purchases", icon: <PiHandCoinsBold className="w-8 h-8 sm:w-4 sm:h-4 text-white" /> },
        { title: "Inventory", icon: <MdOutlineInventory2 className="w-8 h-8 sm:w-4 sm:h-4 text-white" /> },
        { title: "Reports", icon: <TbReportAnalytics className="w-8 h-8 sm:w-4 sm:h-4 text-white" /> },
        { title: "Settings", icon: <MdSettings className="w-8 h-8 sm:w-4 sm:h-4 text-white" /> },
      ];

    const value = {
        sidebarMenu,
    };

    return <SharedContext.Provider value={value}>{children}</SharedContext.Provider>;
}

export default SharedContext;