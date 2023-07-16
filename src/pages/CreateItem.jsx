import React, { useState } from "react";

const CreateItem = () => {
  return (
    <div>
      <h1 className="text-sm font-bold bg-[#1d5e7e] text-white px-3 py-1">Create Item</h1>

      <div className="grid grid-cols-3 gap-6 border p-2 my-2">
        <div className="flex flex-col gap-y-1">
          <div className="flex flex-row">
            <label className="text-gray-700">Item Name</label>
            <input type="text" name="ItemName" id="ItemName" autoComplete="given-name" className="border ms-auto w-9/12" />
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700">Price</label>
            <input type="text" name="Price" id="Price" autoComplete="given-name" className="border ms-auto w-9/12" />
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700">Stock Unit</label>
            <input type="text" name="StockUnit" id="StockUnit" autoComplete="given-name" className="border ms-auto w-9/12" />
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700">Quantity</label>
            <input type="number" name="Quantity" id="Quantity" autoComplete="given-name" className="border ms-auto w-9/12" />
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <div className="flex flex-row">
            <label className="text-gray-700">Description</label>
            <textarea name="Description" id="Description" autoComplete="given-name" className="border ms-auto w-9/12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
