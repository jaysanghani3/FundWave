import React, { useState } from "react";

const CreateItem = () => {
  const itemTypes = [
    { id: 1, name: "Raw Material" },
    { id: 2, name: "Finished Goods" },
    { id: 3, name: "Semi Finished Goods" },
    { id: 4, name: "Packaging Material" },
    { id: 5, name: "Service" },
    { id: 6, name: "Sub Assembly" },
    { id: 7, name: "Tools" },
    { id: 8, name: "Consumables" },
    { id: 9, name: "Capital Goods" },
    { id: 10, name: "Spares" },
    { id: 11, name: "Others" },
  ];

  const stockUnits = [
    { id: 1, name: "Kg" , symbol: "kg"},
    { id: 2, name: "Gram" , symbol: "g"},
    { id: 3, name: "Litre" , symbol: "l"},
    { id: 4, name: "Millilitre" , symbol: "ml"},
    { id: 5, name: "Metre" , symbol: "m"},
    { id: 6, name: "Centimetre" , symbol: "cm"},
    { id: 7, name: "Inch" , symbol: "in"},
    { id: 8, name: "Foot" , symbol: "ft"},
    { id: 9, name: "Square Metre" , symbol: "m2"},
    { id: 10, name: "Square Foot" , symbol: "ft2"},
    { id: 11, name: "Cubic Metre" , symbol: "m3"},
    { id: 12, name: "Cubic Foot" , symbol: "ft3"},
    { id: 13, name: "Unit" , symbol: "unit"},
    { id: 14, name: "Dozen" , symbol: "dozen"},
    { id: 15, name: "Box" , symbol: "box"},
    { id: 16, name: "Packet" , symbol: "packet"},
    { id: 17, name: "Bottle" , symbol: "bottle"},
    { id: 18, name: "Can" , symbol: "can"},
    { id: 19, name: "Bag" , symbol: "bag"},
    { id: 20, name: "Drum" , symbol: "drum"},
    { id: 21, name: "Pail" , symbol: "pail"},
    { id: 22, name: "Barrel" , symbol: "barrel"},
    { id: 23, name: "Piece" , symbol: "piece"},
    { id: 24, name: "Pair" , symbol: "pair"},
    { id: 25, name: "Set" , symbol: "set"},
    { id: 26, name: "Roll" , symbol: "roll"},
    { id: 27, name: "Sheet" , symbol: "sheet"},
    { id: 28, name: "Bundle" , symbol: "bundle"},
    { id: 29, name: "Carton" , symbol: "carton"},
    { id: 30, name: "Pallet" , symbol: "pallet"},
    { id: 31, name: "Ream" , symbol: "ream"},
    { id: 32, name: "Sack" , symbol: "sack"},
    { id: 33, name: "Tonne" , symbol: "tonne"},
    
  ];

  return (
    <div className="text-[13px]">
      
      <h1 className="text-sm font-bold bg-[#1d5e7e] text-white px-3 py-1">Create Item</h1>
      
      {/* col-span-2 for 2 columns */}
      
      <div className="grid grid-cols-3 gap-6 border p-2 my-2">
        <div className="flex flex-col gap-y-2"> 
          
          <div className="flex flex-row">
            <label className="text-gray-700">Item Name</label>
            <input type="text" name="ItemName" id="ItemName" autoComplete="given-name" className="border ms-auto pl-1 w-9/12" />
          </div>
          
          <div className="flex flex-row">
            <label className="text-gray-700">Group</label>
            <input type="text" name="Group" id="Group" autoComplete="given-name" className="border ms-auto pl-1 w-9/12" />
          </div>
          
          <div className="flex flex-row">
            <label className="text-gray-700">Category</label>
            <input type="text" name="Category" id="Category" autoComplete="given-name" className="border ms-auto pl-1 w-9/12" />
          </div>
          
          <div  className="flex flex-row">
            <label className="text-gray-700">Item Code</label>
            <input type="text" name="ItemCode" id="ItemCode" autoComplete="given-name" className="border ms-auto pl-1 w-9/12" />
          </div>
          
          <div className="flex flex-row">
            <label className="text-gray-700">Item Type</label>
            <select name="ItemType" id="ItemType" className="border ms-auto pl-1 w-9/12">
              {
                itemTypes.map((itemType) => (
                  <option key={itemType.id} value={itemType.id}>{itemType.name}</option>
                ))
              }
            </select>
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700">Description</label>
            <textarea name="Description" id="Description" autoComplete="given-name" className="border h-16 ms-auto pl-1 w-9/12 resize-none " />
          </div>
        </div>

        <div className="flex flex-col w-6/12 gap-y-2">
          <div className="flex flex-row">
            <label className="text-gray-700">Stock Unit</label>
            <select name="StockUnit" id="StockUnit" className="border ms-auto pl-1 w-6/12">
              {
                stockUnits.map((stockUnit) => (
                  <option key={stockUnit.id} value={stockUnit.id}>{stockUnit.name}</option>
                ))
              }
            </select>
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700">Quantity</label>
            <input type="number" name="Quantity" id="Quantity" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
