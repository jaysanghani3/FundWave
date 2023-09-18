import { createContext } from "react";
import { TbFileInvoice } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { PiHandCoinsBold } from "react-icons/pi";
import { MdOutlineInventory2 } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";

const SharedContext = createContext();

export function SharedContextProvider({ children }) {

  const [customerData, setCustomerData] = useState([]);
  const [vendorData, setVendorData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [invoiceData, setInvoiceData] = useState([]);
  const [purchaseData, setPurchaseData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    getCustomerData();
    getVendorData();
    getItemData();
    getInvoiceData();
    getPurchaseData();
    getExpenseData();
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

  const getInvoiceData = async () => {
    const response = await axios.get("http://localhost:3000/invoice/getall");
    setInvoiceData(response?.data);
  }

  const getPurchaseData = async () => {
    const response = await axios.get("http://localhost:3000/purchase/getall");
    setPurchaseData(response?.data);
  }

  const getExpenseData = async () => {
    const response = await axios.get("http://localhost:3000/expense/getall");
    setExpenseData(response?.data);
  }

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
        { name: "Sales Invoice", link: "/sales-invoice" },
        { name: "Invoice Master", link: "/sales-invoice-master" },
      ],
    },
    {
      menuName: "Purchases",
      icon: <PiHandCoinsBold className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
      subMenus: [
        { name: "Vendor", link: "/vendor" },
        { name: "Purchase Bill", link: "/purchase-bill" },
        { name: "Expenses", link: "/expenses" },
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
    {
      menuName: "Employee",
      icon: <FaUsers className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
      subMenus: [
        { name: "Add Employee", link: "/add-new-employee" },
        { name: "Employee Master", link: "/employee-master" }],
    },
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
    { label: "Shipping Address", name: "shippingAddress", type: "textarea" },
    { label: "Country", name: "country", type: "text" },
    { label: "State", name: "state", type: "text" },
    { label: "City", name: "city", type: "text" },
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
        ["GT-0001", "Jay Sanghani", "₹ 2,000.00", "Paid"],
        ["GT-0002", "Savan Sagapariya", "₹ 1,500.00", "Paid"],
        ["GT-0003", "Dhruhit Akbari", "₹ 1,000.00", "Unpaid"],
        ["GT-0004", "Arth Daraniya", "₹ 5,000.00", "Paid"],
        ["GT-0005", "Karan Bhuva", "₹ 3,280.00", "Paid"],
      ],
    },
    {
      name: "Recent Purchase Bills",
      columns: ["Vendor Name", "Amount", "Status"],
      data: [
        ["Jay Sanghani", "₹ 50.00", "Paid"],
        ["Savan Sagapariya", "₹ 20.00", "Paid"],
        ["Dhruhit Akbari", "₹ 10.00", "Unpaid"],
        ["Arth Daraniya", "₹ 50.00", "Paid"],
        ["Karan Bhuva", "₹ 50.00", "Paid"],
      ],
    },
    {
      name: "Top 5 Customers",
      columns: ["Customer Name", "Amount", "Joining Duration"],
      data: [
        ["Jay Sanghani", "₹ 2,000.00", "100 days"],
        ["Savan Sagapariya", "₹ 1,500.00", "90 days"],
        ["Dhruhit Akbari", "₹ 1,000.00", "2 days"],
        ["Arth Daraniya", "₹ 5,000.00", "30 days"],
        ["Karan Bhuva", "₹ 3,280.00", "45 days"],
      ],
    },
    {
      name: "Top 5 Vendors",
      columns: ["Vendor Name", "Amount", "Joining Duration"],
      data: [
        ["Jay Sanghani", "₹ 50.00", "150 days"],
        ["Savan Sagapariya", "₹ 20.00", "95 days"],
        ["Dhruhit Akbari", "₹ 10.00", "3 days"],
        ["Arth Daraniya", "₹ 50.00", "90 days"],
        ["Karan Bhuva", "₹ 50.00", "60 days"],
      ],
    },
  ];

  const vcHeader = [
    { name: "S.No", width: "w-7" },
    { name: "Action", width: "w-10" },
    { name: "Code", width: "" },
    { name: "Name", width: "w-4/12" },
    { name: "Phone", width: "" },
    { name: "GST no", width: "" },
    { name: "City", width: "" },
    { name: "Email", width: "" },
    // { name: "Created on", width: "" },
  ];

  const invoiceHeader = [
    { name: "S.No", width: "w-7" },
    { name: "Action", width: "w-10" },
    { name: "Invoice No.", width: "" },
    { name: "Customer", width: "w-4/12" },
    { name: "Contact No.", width: "" },
    { name: "GST no", width: "" },
    { name: "Total Amount", width: "" },
    { name: "Created Date", width: ""}
  ];

  const itemTableHeader = [
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
    vcHeader,
    itemTableHeader,
    invoiceHeader,
    customerData,
    vendorData,
    itemData,
    invoiceData,
    getCustomerData,
    getVendorData,
    getItemData,
    getInvoiceData,
    expenseData,
    getExpenseData,
    purchaseData,
    getPurchaseData,
    

  };

  return <SharedContext.Provider value={value}>{children}</SharedContext.Provider>;
}

export default SharedContext;
