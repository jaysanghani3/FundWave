import React from "react";
import CommonForm from "../components/CommonForm";

const SalesInvoice = () => {
  const invoiceFields = [
    // column1
    [
      { label: "Invoice No.", name: "invoiceNo", type: "text" },
      { label: "Customer", name: "customer", type: "text" },
      { label: "GST No", name: "gstNo", type: "text" },
    ],
    [
      { label: "Cash/Credit", name: "cashCredit", type: "select", options: ["Cash", "Credit"] },
      { label: "Date", name: "date", type: "date" },
      { label: "Due Date", name: "dueDate", type: "date" },
    ],
    [
      { label: "Contact No", name: "contactNo", type: "number" },
      { label: "Address", name: "address", type: "textarea" },
    ],
  ];

  return (
    <div>
      <CommonForm formFields={invoiceFields} />
    </div>
  );
};

export default SalesInvoice;
