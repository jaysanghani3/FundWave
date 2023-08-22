import React from "react";
import AddNewCustomer from "../pages/sales/AddNewCustomer"; // Path to your AddNewCustomer component

const AddEditCustomerVendorPage = ({ match }) => {
  const entityType = match.params.entityType; // Extract the entity type from the route parameter
  const entityId = match.params.id; // Extract the entity ID from the route parameter

  return (
    <div>
      <h2>{entityId ? `Edit ${entityType}` : `Add New ${entityType}`}</h2>
      <AddNewCustomer entityType={entityType} entityId={entityId} />
      {/* ... (other components or logic) */}
    </div>
  );
};

export default AddEditCustomerVendorPage;
