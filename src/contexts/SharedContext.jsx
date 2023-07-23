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

      const customerFields = [
        { label: "GST No.", name: "gstNo", type: "text" },
        { label: "Name", name: "name", type: "text" },
        { label: "Code", name: "code", type: "text" },
        { label: "Email", name: "email", type: "email" },
        { label: "Phone No", name: "phone", type: "text" },
        { label: "PAN No", name: "panNo", type: "text" },
        { label: "Billing Address", name: "billingAddress", type: "textarea" },
        { label: "City", name: "city", type: "select", options: ["City 1", "City 2"] },
        { label: "State", name: "state", type: "select", options: ["State 1", "State 2"] },
        { label: "Zip", name: "zip", type: "text" },
        { label: "Country", name: "country", type: "select", options: ["Country 1", "Country 2"] },
        { label: "Notes", name: "notes", type: "textarea" },
      ];
    const value = {
        sidebarMenus,
        customerFields
    };

    return <SharedContext.Provider value={value}>{children}</SharedContext.Provider>;
}

export default SharedContext;