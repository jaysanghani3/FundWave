import { createContext } from "react";
import { TbFileInvoice, TbReportAnalytics } from "react-icons/tb";
import { PiHandCoinsBold } from "react-icons/pi";
import { MdOutlineInventory2 } from "react-icons/md";
const SharedContext = createContext();

export function SharedContextProvider({ children }) {

    const sidebarMenus = [
        { 
            menuName: "Sales",
            icon: <TbFileInvoice className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
            subMenus:["Customer","Estimate","Sales Invoice"]
        },
        { 
            menuName: "Purchases",
            icon: <PiHandCoinsBold className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
            subMenus:["Vendor","Purchase Bill","Bill Payment"]
        },
        { 
            menuName: "Inventory",
            icon: <MdOutlineInventory2 className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
            subMenus:["Item Master","Stock Master"]
        },
        { 
            menuName: "Reports",
            icon: <TbReportAnalytics className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
            subMenus:["All Report"]
        },
        // { 
        //     menuName: "Settings",
        //     icon: <MdSettings className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
        //     subMenus:["","",""]
        // },
      ];

    const value = {
        sidebarMenus,
    };

    return <SharedContext.Provider value={value}>{children}</SharedContext.Provider>;
}

export default SharedContext;