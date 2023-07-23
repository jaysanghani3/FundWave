import React, { useState } from "react";
import ImageUpload from "../../components/ImageUpload";

const CreateItem = () => {
  const [item, setItem] = useState({
    ItemName: "",
    Group: "",
    Category: "",
    ItemCode: "",
    ItemType: "",
    Description: "",
    StockUnit: "",
    Quantity: "",
    ReorderLevel: "",
    ExpiryDate: "",
    GST: "",
    PurchasePrice: "",
    PurchaseRateFactor: "",
    MPR: "",
    MinimumPrice: "",
    SalesPrice: "",
    WholesalePrice: "",
    DealerPrice: "",
    RateFactor: "",
    Discount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSave = () => {   
    console.log(item);
  };

    const handleClear = () => {
      setItem({
        ItemName: "",
        Group: "",  
        Category: "",
        ItemCode: "",
        ItemType: "", 
        Description: "",
        StockUnit: "",
        Quantity: "",
        ReorderLevel: "",
        ExpiryDate: "",
        GST: "",
        PurchasePrice: "",
        PurchaseRateFactor: "",
        MPR: "",
        MinimumPrice: "",
        SalesPrice: "",
        WholesalePrice: "",
        DealerPrice: "",
        RateFactor: "",
        Discount: "",
      });
    };

  const handlePrint = () => {
    console.log("Print");
  };

  const handleImport = () => {
    console.log("Import");
  };

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
    { id: 1, name: "Kg", symbol: "kg" },
    { id: 2, name: "Gram", symbol: "g" },
    { id: 3, name: "Litre", symbol: "l" },
    { id: 4, name: "Millilitre", symbol: "ml" },
    { id: 5, name: "Metre", symbol: "m" },
    { id: 6, name: "Centimetre", symbol: "cm" },
    { id: 7, name: "Inch", symbol: "in" },
    { id: 8, name: "Foot", symbol: "ft" },
    { id: 9, name: "Square Metre", symbol: "m2" },
    { id: 10, name: "Square Foot", symbol: "ft2" },
    { id: 11, name: "Cubic Metre", symbol: "m3" },
    { id: 12, name: "Cubic Foot", symbol: "ft3" },
    { id: 13, name: "Unit", symbol: "unit" },
    { id: 14, name: "Dozen", symbol: "dozen" },
    { id: 15, name: "Box", symbol: "box" },
    { id: 16, name: "Packet", symbol: "packet" },
    { id: 17, name: "Bottle", symbol: "bottle" },
    { id: 18, name: "Can", symbol: "can" },
    { id: 19, name: "Bag", symbol: "bag" },
    { id: 20, name: "Drum", symbol: "drum" },
    { id: 21, name: "Pail", symbol: "pail" },
    { id: 22, name: "Barrel", symbol: "barrel" },
    { id: 23, name: "Piece", symbol: "piece" },
    { id: 24, name: "Pair", symbol: "pair" },
    { id: 25, name: "Set", symbol: "set" },
    { id: 26, name: "Roll", symbol: "roll" },
    { id: 27, name: "Sheet", symbol: "sheet" },
    { id: 28, name: "Bundle", symbol: "bundle" },
    { id: 29, name: "Carton", symbol: "carton" },
    { id: 30, name: "Pallet", symbol: "pallet" },
    { id: 31, name: "Ream", symbol: "ream" },
    { id: 32, name: "Sack", symbol: "sack" },
    { id: 33, name: "Tonne", symbol: "tonne" },
  ];

  return (
    <>
      <h1 className="text-sm font-bold bg-[#1d5e7e] text-white px-3 py-1">Create Item</h1>

      <div className="grid grid-cols-3 gap-6 border p-3 pl-9 my-2 text-[13px]">
        <div className="flex flex-col col-span-2 gap-y-2">
          <div className="flex flex-row">
            <label className="text-gray-700 ">Item Name</label>
            <input onChange={handleChange} value={item.ItemName} type="text" name="ItemName" id="ItemName" autoComplete="given-name" className="border ms-auto pl-1 w-10/12"/>
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700 ">Group</label>
            <input onChange={handleChange} value={item.Group} type="text" name="Group" id="Group" autoComplete="given-name" className="border ms-auto pl-1 w-10/12" />
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700 ">Category</label>
            <input onChange={handleChange} value={item.Category} type="text" name="Category" id="Category" autoComplete="given-name" className="border ms-auto pl-1 w-10/12" />
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700 ">Item Code</label>
            <input onChange={handleChange} value={item.ItemCode} type="text" name="ItemCode" id="ItemCode" autoComplete="given-name" className="border ms-auto pl-1 w-10/12" />
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700 ">Item Type</label>
            <select onChange={handleChange} value={item.ItemType} name="ItemType" id="ItemType" className="border ms-auto pl-1 w-10/12">
              {itemTypes.map((itemType) => (
                <option key={itemType.id} value={itemType.name}>
                  {itemType.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700 ">Description</label>
            <textarea onChange={handleChange} value={item.Description} name="Description" id="Description" autoComplete="given-name" className="border h-16 ms-auto pl-1 w-10/12 resize-none " />
          </div>

          <div className="flex flex-row mt-10 justify-between">
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-row">
                <label className="text-gray-700 ">Stock Unit</label>
                <select onChange={handleChange} value={item.StockUnit} name="StockUnit" id="StockUnit" className="border ms-auto pl-1 w-6/12">
                  {stockUnits.map((stockUnit) => (
                    <option key={stockUnit.id} value={stockUnit.name}>
                      {stockUnit.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Quantity</label>
                <input onChange={handleChange} value={item.Quantity} type="number" name="Quantity" id="Quantity" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Reorder Level</label>
                <input onChange={handleChange} value={item.ReorderLevel} type="number" name="ReorderLevel" id="ReorderLevel" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Expiry Date</label>
                <input onChange={handleChange} value={item.ExpiryDate} type="date" name="ExpiryDate" id="ExpiryDate" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">GST</label>
                <input onChange={handleChange} value={item.GST} type="number" name="GST" id="GST" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>
              <div className="flex flex-row">
                <label className="text-gray-700 ">Purchase Price</label>
                <input onChange={handleChange} value={item.PurchasePrice} type="number" name="PurchasePrice" id="PurchasePrice" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>
              <div className="flex flex-row">
                <label className="text-gray-700 ">Purchase Rate Factor</label>
                <input onChange={handleChange} value={item.PurchaseRateFactor} type="number" name="PurchaseRateFactor" id="PurchaseRateFactor" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <div className="flex flex-row">
                <label className="text-gray-700 ">MPR</label>
                <input onChange={handleChange} value={item.MPR} type="number" name="MPR" id="MPR" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Minimum Price</label>
                <input onChange={handleChange} value={item.MinimumPrice} type="number" name="MinimumPrice" id="MinimumPrice" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Sales Price</label>
                <input onChange={handleChange} value={item.SalesPrice} type="number" name="SalesPrice" id="SalesPrice" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Wholesale Price</label>
                <input onChange={handleChange} value={item.WholesalePrice} type="number" name="WholesalePrice" id="WholesalePrice" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Dealer Price</label>
                <input onChange={handleChange} value={item.DealerPrice} type="number" name="DealerPrice" id="DealerPrice" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Rate Factor</label>
                <input onChange={handleChange} value={item.RateFactor} type="number" name="RateFactor" id="RateFactor" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Discount</label>
                <input onChange={handleChange} value={item.Discount} type="number" name="Discount" id="Discount" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row">
            <ImageUpload />
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-x-3 justify-end mt-5">
        <button className="bg-[#1d5e7e] text-white px-3 py-1 text-xs" onClick={handleSave} >Save</button>
        <button className="bg-[#1d5e7e] text-white px-3 py-1 text-xs" onClick={handleClear} >Clear</button>
        <button className="bg-[#1d5e7e] text-white px-3 py-1 text-xs" onClick={handlePrint}>Print</button>
        <button className="bg-[#1d5e7e] text-white px-3 py-1 text-xs" onClick={handleImport}>Import</button>
      </div>
    </>
  );
};

export default CreateItem;
