import React from "react";
import CommonBillForm from "../../components/CommonBillForm";

const EstimateBill = () => {
  const estimateFields = [
    [
      { label: "Estimate No.", name: "estimateNo", type: "text" },
      { label: "Customer", name: "customer", type: "text" },
    ],
    [
      { label: "Estimate Date", name: "estimateDate", type: "date" },
    ],
    [
      { label: "Contact No", name: "contactNo", type: "number" },
      { label: "Address", name: "address", type: "textarea" },
    ],
  ];

  return (
    <div>
      <CommonBillForm title={"Create New Estimate Bill"} formFields={estimateFields} />
    </div>
  );
};

export default EstimateBill;
