import React, { useState, useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import CommonBillForm from "../../components/CommonBillForm";
import SharedContext from "../../contexts/SharedContext"

const SalesInvoice = () => {

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
      { label: "Contact No", name: "contactNo", type: "number" },
      { label: "Address", name: "address", type: "textarea" },
    ],
  ];

  return (
    <div className="h-[98%]">
      <CommonBillForm title={"Sales Invoice"} formFields={invoiceFields}/>
      
    </div>
  );
};

export default SalesInvoice;
