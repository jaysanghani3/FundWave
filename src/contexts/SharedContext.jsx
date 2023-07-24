import { createContext } from "react";
import { TbFileInvoice, TbReportAnalytics } from "react-icons/tb";
import { PiHandCoinsBold } from "react-icons/pi";
import { MdOutlineInventory2 } from "react-icons/md";

const SharedContext = createContext();

export function SharedContextProvider({ children }) {

    const sidebarMenus = [
        {
            menuName: "Dashboard",
            icon: <TbFileInvoice className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
            subMenus:[
                {name:"Dashboard", link:"/"},
            ]
        },
        { 
            menuName: "Sales",
            icon: <TbFileInvoice className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
            subMenus:[
                {name:"Customer", link:"/customer"},
                {name:"Estimate", link:"/estimate"},
                {name:"Sales Invoice", link:"/sales-invoice"},
            ]
        },
        { 
            menuName: "Purchases",
            icon: <PiHandCoinsBold className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
            subMenus:[
                {name:"Vendor", link:"/vendor"},
                {name:"Purchase Bill", link:"/purchase-bill"},
                {name:"Bill Payment", link:"/bill-payment"},
            ]
        },
        { 
            menuName: "Inventory",
            icon: <MdOutlineInventory2 className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
            subMenus:[
                {name:"Item Master", link:"/item-master"},
                {name:"Stock Master", link:"/stock-master"},
            ]
        },
        { 
            menuName: "Reports",
            icon: <TbReportAnalytics className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
            subMenus:[
                {name:"All Report", link:"/all-report"},
            ]
        }
      ];

      const fields = [
        { label: "GST No.", name: "gstNo", type: "text" },
        { label: "Name", name: "name", type: "text" },
        { label: "Code", name: "code", type: "text" },
        { label: "Email", name: "email", type: "email" },
        { label: "Phone No", name: "phone", type: "text" },
        { label: "PAN No", name: "panNo", type: "text" },
        { label: "Billing Address", name: "billingAddress", type: "textarea" },
        { label: "Country", name: "country", type: "select", options: ["Country 1", "Country 2"] },
        { label: "State", name: "state", type: "select", options: ["State 1", "State 2"] },
        { label: "City", name: "city", type: "select", options: ["City 1", "City 2"] },
        { label: "Zip", name: "zip", type: "text" },
        { label: "IFSC Code", name: "ifscCode", type: "text" },
        { label: "Bank Name", name: "bankName", type: "text" },
        { label: "Bank Account No", name: "bankAccountNo", type: "text" },
        { label: "Notes", name: "notes", type: "textarea" },
      ];
    const value = {
        sidebarMenus,
        fields
    };

    return <SharedContext.Provider value={value}>{children}</SharedContext.Provider>;
}

export default SharedContext;