import { createContext } from "react";
import { TbFileInvoice, TbReportAnalytics } from "react-icons/tb";
import { PiHandCoinsBold } from "react-icons/pi";
import { MdOutlineInventory2 } from "react-icons/md";
import custorJson from "./Customer.json";

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

  const vcTableData = {
    tableHeader: [
      { name: "S.No", width: "w-7" },
      { name: "Action", width: "w-10" },
      { name: "Name", width: "w-4/12" },
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
        name: dashboardTable[2].data[0][0],
        customer_code: "CUST001",
        phone: "123-456-7890",
        email:dashboardTable[2].data[0][0].split(' ')[0]+"@gmail.com",
        city: "New York",
        gst_no: "GST123456",
        created_on_date: "2023-07-25",
      },
      {
        srno: 2,
        name: dashboardTable[2].data[1][0],
        customer_code: "CUST002",
        phone: "987-654-3210",
        email:dashboardTable[2].data[1][0].split(' ')[0]+"@gmail.com",
        city: "Los Angeles",
        gst_no: "GST987654",
        created_on_date: "2023-07-25",
      },
      {
        srno: 3,
        name: dashboardTable[2].data[2][0],
        customer_code: "CUST003",
        phone: "555-123-4567",
        email:dashboardTable[2].data[2][0].split(' ')[0]+"@gmail.com",
        city: "Chicago",
        gst_no: "GST555555",
        created_on_date: "2023-07-25",
      },
      {
        srno: 4,
        name: dashboardTable[2].data[3][0],
        customer_code: "CUST004",
        phone: "555-123-4567",
        email:dashboardTable[2].data[3][0].split(' ')[0]+"@gmail.com",
        city: "Chicago",
        gst_no: "GST333555",
        created_on_date: "2023-07-25",
      },
      {
        srno: 5,
        name: dashboardTable[2].data[4][0],
        customer_code: "CUST005",
        phone: "555-123-4567",
        email:dashboardTable[2].data[4][0].split(' ')[0]+"@gmail.com",
        city: "Chicago",
        gst_no: "GST5554444",
        created_on_date: "2023-07-25",
      },
    ],
    vendorData: [
      {
        srno: 1,
        name: dashboardTable[2].data[0][0],
        customer_code: "VEND001",
        phone: "111-111-1111",
        email:dashboardTable[2].data[0][0].split(' ')[0]+"@gmail.com",
        city: "City A",
        gst_no: "GST111111",
        created_on_date: "2023-07-01",
      },
      {
        srno: 2,
        name: dashboardTable[2].data[1][0],
        customer_code: "VEND002",
        phone: "222-222-2222",
        email:dashboardTable[2].data[1][0].split(' ')[0]+"@gmail.com",
        city: "City B",
        gst_no: "GST222222",
        created_on_date: "2023-07-02",
      },
      {
        srno: 3,
        name: dashboardTable[2].data[2][0],
        customer_code: "VEND003",
        phone: "101-010-1010",
        email:dashboardTable[2].data[2][0].split(' ')[0]+"@gmail.com",
        city: "City J",
        gst_no: "GST101010",
        created_on_date: "2023-07-10",
      },
      {
        srno: 4,
        name: dashboardTable[2].data[3][0],
        customer_code: "VEND004",
        phone: "101-010-1010",
        email:dashboardTable[2].data[3][0].split(' ')[0]+"@gmail.com",
        city: "City J",
        gst_no: "GST101010",
        created_on_date: "2023-07-10",
      },
      {
        srno: 5,
        name: dashboardTable[2].data[4][0],
        customer_code: "VEND005",
        phone: "101-010-1010",
        email:dashboardTable[2].data[4][0].split(' ')[0]+"@gmail.com",
        city: "City J",
        gst_no: "GST101010",
        created_on_date: "2023-07-10",
      },
    ],
  };

  const itemTableData = {
    itemTableHeader: [
      { name: "S.No", width: "w-7" },
      { name: "Action", width: "w-10" },
      { name: "Name", width: "w-4/12" },
      { name: "Code", width: "" },
      { name: "Category", width: "" },
      { name: "Group", width: "" },
      { name: "Type", width: "" },
      { name: "HSN Code", width: "" },
      { name: "Unit", width: "" },
      { name: "Tax Rate", width: "" },
      { name: "Created on", width: "" },
    ],
    itemData: [
      {
        srno: 1,
        name: "Item 1",
        code: "A123",
        category: "Category A",
        group: "Group X",
        type: "Type 1",
        hsnCode: "1234",
        unit: "pcs",
        taxRate: "5%",
        createdOn: "2023-07-27",
      },
      {
        srno: 2,
        name: "Item 2",
        code: "B456",
        category: "Category B",
        group: "Group Y",
        type: "Type 2",
        hsnCode: "5678",
        unit: "kg",
        taxRate: "12%",
        createdOn: "2023-07-26",
      },
      {
        srno: 3,
        name: "Item 3",
        code: "C789",
        category: "Category C",
        group: "Group Z",
        type: "Type 3",
        hsnCode: "9101",
        unit: "m",
        taxRate: "18%",
        createdOn: "2023-07-25",
      },
      {
        srno: 4,
        name: "Item 4",
        code: "D012",
        category: "Category A",
        group: "Group X",
        type: "Type 1",
        hsnCode: "1112",
        unit: "pcs",
        taxRate: "5%",
        createdOn: "2023-07-24",
      },
      {
        srno: 5,
        name: "Item 5",
        code: "E345",
        category: "Category B",
        group: "Group Y",
        type: "Type 2",
        hsnCode: "1314",
        unit: "kg",
        taxRate: "12%",
        createdOn: "2023-07-23",
      },
    ],
  };

  const value = {
    sidebarMenus,
    fields,
    vcTableData,
    itemTableData,
    dashboardTable,
    custorJson,
  };

  return <SharedContext.Provider value={value}>{children}</SharedContext.Provider>;
}

export default SharedContext;
