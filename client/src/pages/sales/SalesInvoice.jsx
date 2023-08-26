import React, { useState, useContext, useEffect } from "react";
import CommonBillForm from "../../components/CommonBillForm";
import SharedContext from "../../contexts/SharedContext"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SalesInvoice = () => {

  const { fields, getInvoiceData } = useContext(SharedContext);
  // const { invoiceId } = useParams(); // Get the Invoice ID from the route parameters

  const invoiceFields = [
    [
      { label: "Invoice No.", name: "invoiceNo", type: "text" },
      { label: "Customer", name: "companyName", type: "text" },
      { label: "GST No", name: "gstNo", type: "text" },
    ],
    [
      { label: "Cash/Credit", name: "cashCredit", type: "text"},
      { label: "Created Date", name: "createdDate", type: "date" },
      { label: "Due Date", name: "dueDate", type: "date" },
    ],
    [
      { label: "Contact No", name: "contactNumber", type: "number" },
      { label: "Address", name: "address", type: "textarea" },
    ],
  ];

  // const [invoice, setInvoice] = useState(
  //   invoiceFields.reduce((acc, field) => {
  //     acc[field.name] = "";
  //     return acc;
  //   }, {})
  // );

  // useEffect(() => {
  //   console.log("Invoice ID:", invoiceId)
  //   if (invoiceId) {
  //     fetchInvoiceData();    // Fetch the invoice data for editing
  //   }
  // }
  // , []);

  // const fetchInvoiceData = async () => {
  //   const response = await axios.get(`http://localhost:5000/invoice/${invoiceId}`);
  //   const invoiceData = response.data;
  //   console.log("Invoice Data:", invoiceData)
  //   setInvoice(invoiceData);
  // }

  return (
    <div className="h-[98%]">
      <CommonBillForm title={"Sales Invoice"} formFields={invoiceFields} getInvoiceData={getInvoiceData}/>
    </div>
  );
};

export default SalesInvoice;
