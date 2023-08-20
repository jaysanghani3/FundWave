import React from "react";
import CommonBillForm from "../../components/CommonBillForm";

const PurchaseBill = () => {
    const purchaseFields = [
        [
          { label: "Purchase Bill No.", name: "purchaseBillNo", type: "text" },
          { label: "Vendor", name: "vendor", type: "text" },
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
      <CommonBillForm title={"Create New Purchase Bill"} formFields={purchaseFields} />
    </div>
  );
};

export default PurchaseBill;
