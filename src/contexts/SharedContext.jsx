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
        { name: "Bill Payment", link: "/bill-payment" },
      ],
    },
    {
      menuName: "Inventory",
      icon: <MdOutlineInventory2 className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
      subMenus: [
        { name: "Item Master", link: "/item-master" },
        { name: "Stock Master", link: "/stock-master" },
      ],
    },
    {
      menuName: "Reports",
      icon: <TbReportAnalytics className="w-8 h-8 sm:w-4 sm:h-4 text-white" />,
      subMenus: [{ name: "All Report", link: "/all-report" }],
    },
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

  const tableData = {
    tableHeader: [
      { name: "S.No", width: "w-7" },
      { name: "Action", width: "w-10" },
      { name: "Name", width: "w-72" },
      { name: "Code", width: "" },
      { name: "Phone", width: "" },
      { name: "Email", width: "" },
      { name: "City", width: "" },
      { name: "GST no", width: "" },
      { name: "Created on", width: "" },
    ],
    customerData: [
      {
        srno: 1,
        name: "John Doe",
        customer_code: "CUST001",
        phone: "123-456-7890",
        email: "john.doe@example.com",
        city: "New York",
        gst_no: "GST123456",
        created_on_date: "2023-07-25",
      },
      {
        srno: 2,
        name: "Jane Smith",
        customer_code: "CUST002",
        phone: "987-654-3210",
        email: "jane.smith@example.com",
        city: "Los Angeles",
        gst_no: "GST987654",
        created_on_date: "2023-07-25",
      },
      {
        srno: 3,
        name: "Bob Johnson",
        customer_code: "CUST003",
        phone: "555-123-4567",
        email: "bob.johnson@example.com",
        city: "Chicago",
        gst_no: "GST555555",
        created_on_date: "2023-07-25",
      },
    ],
    vendorData : [
      {
        srno: 1,
        name: "Vendor 1",
        customer_code: "VEND001",
        phone: "111-111-1111",
        email: "vendor1@example.com",
        city: "City A",
        gst_no: "GST111111",
        created_on_date: "2023-07-01",
      },
      {
        srno: 2,
        name: "Vendor 2",
        customer_code: "VEND002",
        phone: "222-222-2222",
        email: "vendor2@example.com",
        city: "City B",
        gst_no: "GST222222",
        created_on_date: "2023-07-02",
      },
      {
        srno: 3,
        name: "Vendor 3",
        customer_code: "VEND003",
        phone: "101-010-1010",
        email: "vendor10@example.com",
        city: "City J",
        gst_no: "GST101010",
        created_on_date: "2023-07-10",
      },
    ]
  };

  const value = {
    sidebarMenus,
    fields,
    tableData,
  };

  return <SharedContext.Provider value={value}>{children}</SharedContext.Provider>;
}

export default SharedContext;
