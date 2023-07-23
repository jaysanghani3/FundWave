import React from "react";
import CommonForm from "../../components/CommonForm";

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
      <CommonForm title={"Create New Estimate Bill"} formFields={estimateFields} />
    </div>
  );
};

export default EstimateBill;
