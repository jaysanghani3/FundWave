import { createContext } from "react";
import { TbFileInvoice, TbReportAnalytics } from "react-icons/tb";
import { PiHandCoinsBold } from "react-icons/pi";
import { MdOutlineInventory2 } from "react-icons/md";
import custorJson from "./Customer.json";
import axios from "axios";
import { useEffect, useState } from "react";

const SharedContext = createContext();

export function SharedContextProvider({ children }) {
  
    const [customerData, setCustomerData] = useState([]);
    const [vendorData, setVendorData] = useState([]);
    const [itemData, setItemData] = useState([]);

  useEffect(() =>{
    getCustomerData();
    getVendorData();
    getItemData();
  }, []);

  const getCustomerData = async () => {
    const response = await axios.get("http://localhost:3000/customer/getall");
    setCustomerData(response?.data);
  };

  const getVendorData = async () => {
    const response = await axios.get("http://localhost:3000/vendor/getall");
    setVendorData(response?.data);
  };

  const getItemData = async () => {
    const response = await axios.get("http://localhost:3000/item/getall");
    setItemData(response?.data);
  };

  const sidebarMenus = [
    {
      menuName: "Dashboard",
      icon: <TbFileInvoice className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
      link: "/",
    },
    {
      menuName: "Sales",
      icon: <TbFileInvoice className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
      subMenus: [
        { name: "Customer", link: "/customer" },
        { name: "Estimate", link: "/estimate" },
        { name: "Sales Invoice", link: "/sales-invoice" },
      ],
    },
    {
      menuName: "Purchases",
      icon: <PiHandCoinsBold className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
      subMenus: [
        { name: "Vendor", link: "/vendor" },
        { name: "Purchase Bill", link: "/purchase-bill" },
        // { name: "Bill Payment", link: "/bill-payment" },
      ],
    },
    {
      menuName: "Inventory",
      icon: <MdOutlineInventory2 className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
      subMenus: [
        { name: "Item Master", link: "/item-master" },
        // { name: "Stock Master", link: "/stock-master" },
      ],
    },
    // {
    //   menuName: "Reports",
    //   icon: <TbReportAnalytics className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
    //   subMenus: [{ name: "All Report", link: "/all-report" }],
    // },
  ];

  const fields = [
    { label: "GST No.", name: "gst", type: "text" },
    { label: "Comapny Name", name: "companyName", type: "text" },
    { label: "Contact Person", name: "contactPerson", type: "text" },
    { label: "Code", name: "code", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Phone No", name: "contactNumber", type: "number" },
    { label: "PAN No", name: "pan", type: "text" },
    { label: "Billing Address", name: "billingAddress", type: "textarea" },
    { label: "Country", name: "country", type: "select", options: ["Country 1", "Country 2"] },
    { label: "State", name: "state", type: "select", options: ["State 1", "State 2"] },
    { label: "City", name: "city", type: "select", options: ["City 1", "City 2"] },
    { label: "Zip", name: "pincode", type: "text" },
    { label: "IFSC Code", name: "ifsc", type: "text" },
    { label: "Bank Name", name: "bankName", type: "text" },
    { label: "Bank Account No", name: "accountNumber", type: "text" },
    { label: "Notes", name: "notes", type: "textarea" },
  ];

  const dashboardTable = [
    { 
      name: "Recent Invoices",
      columns: ["Invoice No", "Customer Name", "Amount", "Status"],
      data: [
        ["GT-0001", "Jay Sanghani", "₹ 2,00,000.00", "Paid"],
        ["GT-0002", "Savan Sagapariya", "₹ 1,000.00", "Paid"],
        ["GT-0003", "Dhruhit Akbari", "₹ 1,20,000.00", "Unpaid"],
        ["GT-0004", "Arth Daraniya", "₹ 20,000.00", "Paid"],
        ["GT-0005", "Karan Bhuva", "₹ 8000.00", "Paid"],
      ],
    },
    {
      name: "Recent Purchase Bills",
      columns: ["Vendor Name", "Amount", "Status"],
      data: [
        ["Jay Sanghani", "₹ 1000.00", "Paid"],
        ["Savan Sagapariya", "₹ 8900.00", "Paid"],
        ["Dhruhit Akbari", "₹ 20,000.00", "Unpaid"],
        ["Arth Daraniya", "₹ 20,000.00", "Paid"],
        ["Karan Bhuva", "₹ 96,000.00", "Paid"],
      ],
    },
    {
      name: "Top 5 Customers",
      columns: ["Customer Name", "Amount","Joining Duration"],
      data: [
        ["Jay Sanghani", "₹ 1,00,000.00", "100 days"],
        ["Savan Sagapariya", "₹ 89,000.00","90 days"],
        ["Dhruhit Akbari", "₹ 1,020.00","2 days"],
        ["Arth Daraniya", "₹ 20,000.00","30 days"],
        ["Karan Bhuva", "₹ 96,000.00","45 days"],
      ],
    },
    {
      name: "Top 5 Vendors",
      columns: ["Vendor Name", "Amount","Joining Duration"],
      data: [
        ["Jay Patel", "₹ 1,00,000.00","150 days"],
        ["Savan Patel", "₹ 89,000.00","95 days"],
        ["Dhruhit Patel", "₹ 10,20,000.00","3 days"],
        ["Arth Patel", "₹ 20,000.00","90 days"],
        ["Karan Patel", "₹ 96,000.00","60 days"],
      ],
    },
  ];

  const vcHeader = [{ name: "S.No", width: "w-7" },
  { name: "Action", width: "w-10" },
  { name: "Code", width: "" },
  { name: "Name", width: "w-4/12" },
  { name: "Phone", width: "" },
  { name: "Email", width: "" },
  { name: "City", width: "" },
  { name: "GST no", width: "" },
  // { name: "Created on", width: "" },
];

  const itemTableHeader= [
    { name: "S.No", width: "w-7" },
    { name: "Action", width: "w-10" },
    { name: "Code", width: "" },
    { name: "Name", width: "w-4/12" },
    { name: "Category", width: "" },
    { name: "Group", width: "" },
    { name: "Type", width: "" },
    { name: "QTY", width: "" },
    { name: "Unit", width: "" },
    { name: "Tax Rate", width: "" },
    // { name: "Created on", width: "" },
  ];
  const value = {
    sidebarMenus,
    fields,
    dashboardTable,
    custorJson,
    vcHeader,
    itemTableHeader,
    customerData,
    vendorData,
    itemData,


  };

  return <SharedContext.Provider value={value}>{children}</SharedContext.Provider>;
}

export default SharedContext;
