import React, { useState,  useContext, useEffect } from "react";
import ImageUpload from "../../components/ImageUpload";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import SharedContext from "../../contexts/SharedContext";

const CreateItem = () => {
  const {  getItemData } = useContext(SharedContext);

  const [item, setItem] = useState({
    name: "",
    group: "",
    category: "",
    code: "",
    type: "",
    description: "",
    stockUnit: "",
    quantity: "",
    reorderLevel: "",
    expiryDate: "",
    gst: "",
    purchasePrice: "",
    purchaseRateFactor: "",
    mrp: "",
    minimumPrice: "",
    salesPrice: "",
    wholesalePrice: "",
    dealerPrice: "",
    rateFactor: "",
    discount: "",
  });
  const { itemId } = useParams(); // Get the item ID from the route parameters
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Item ID:", itemId)
    if (itemId) {
      // Fetch the item data for editing
      fetchItemData();
    }
  }, [itemId]);

  const fetchItemData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/item/${itemId}`);
      // const updatedItem = fields.reduce((acc, field) => {
      //   acc[field.name] = response.data[field.name] || "";
      //   return acc;
      // }, {});
  
      setItem({
        name: response.data.name || "",
      group: response.data.group || "",
      category: response.data.category || "",
      code: response.data.code || "",
      type: response.data.type || "",
      description: response.data.description || "",
      stockUnit: response.data.stockUnit || "",
      quantity: response.data.quantity || "",
      reorderLevel: response.data.reorderLevel || "",
      expiryDate: response.data.expiryDate || "",
      gst: response.data.gst || "",
      purchasePrice: response.data.purchasePrice || "",
      purchaseRateFactor: response.data.purchaseRateFactor || "",
      mrp: response.data.mrp || "",
      minimumPrice: response.data.minimumPrice || "",
      salesPrice: response.data.salesPrice || "",
      wholesalePrice: response.data.wholesalePrice || "",
      dealerPrice: response.data.dealerPrice || "",
      rateFactor: response.data.rateFactor || "",
      discount: response.data.discount || "",
      });
    } catch (error) {
      console.error('Error fetching item data:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSave = async (e) => {
    // console.log(item);
    try {
      if (itemId) {
        // Update the item
        const response = await axios.put(`http://localhost:3000/item/${itemId}`, item);
        console.log('Response:', response.data);
        getItemData();
        alert("Item updated successfully.");
        navigate("/item-master");
      } else {
        // Create a new item
        const response = await axios.post('http://localhost:3000/item/store', item);
        console.log('Response:', response.data);
        alert("Item saved successfully.");
      }
      // Handle success or any other action here
    } catch (error) {
      console.error('Error:', error.response.data.error);

    }
  };

  const handleClear = () => {
    setItem({
      name: "",
      group: "",
      category: "",
      code: "",
      type: "",
      description: "",
      stockUnit: "",
      quantity: "",
      reorderLevel: "",
      expiryDate: "",
      gst: "",
      purchasePrice: "",
      purchaseRateFactor: "",
      mrp: "",
      minimumPrice: "",
      salesPrice: "",
      wholesalePrice: "",
      dealerPrice: "",
      rateFactor: "",
      discount: "",
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
            <input onChange={handleChange} value={item.name} type="text" name="name" id="name" autoComplete="given-name" className="border ms-auto pl-1 w-10/12" />
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700 ">Group</label>
            <input onChange={handleChange} value={item.group} type="text" name="group" id="group" autoComplete="given-name" className="border ms-auto pl-1 w-10/12" />
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700 ">Category</label>
            <input onChange={handleChange} value={item.category} type="text" name="category" id="category" autoComplete="given-name" className="border ms-auto pl-1 w-10/12" />
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700 ">Item Code</label>
            <input onChange={handleChange} value={item.code} type="text" name="code" id="code" autoComplete="given-name" className="border ms-auto pl-1 w-10/12" />
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700 ">Item Type</label>
            <select onChange={handleChange} value={item.type} name="type" id="type" className="border ms-auto pl-1 w-10/12">
              {itemTypes.map((itemType) => (
                <option key={itemType.id} value={itemType.name}>
                  {itemType.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-row">
            <label className="text-gray-700 ">Description</label>
            <textarea onChange={handleChange} value={item.description} name="description" id="description" autoComplete="given-name" className="border h-16 ms-auto pl-1 w-10/12 resize-none " />
          </div>

          <div className="flex flex-row mt-10 justify-between">
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-row">
                <label className="text-gray-700 ">Stock Unit</label>
                <select onChange={handleChange} value={item.stockUnit} name="stockUnit" id="stockUnit" className="border ms-auto pl-1 w-6/12">
                  {stockUnits.map((stockUnit) => (
                    <option key={stockUnit.id} value={stockUnit.name}>
                      {stockUnit.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Quantity</label>
                <input onChange={handleChange} value={item.quantity} type="number" name="quantity" id="quantity" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Reorder Level</label>
                <input onChange={handleChange} value={item.reorderLevel} type="number" name="reorderLevel" id="reorderLevel" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Expiry Date</label>
                <input onChange={handleChange} value={item.expiryDate} type="date" name="expiryDate" id="expiryDate" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">GST</label>
                <input onChange={handleChange} value={item.gst} type="number" name="gst" id="gst" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>
              <div className="flex flex-row">
                <label className="text-gray-700 ">Purchase Price</label>
                <input onChange={handleChange} value={item.purchasePrice} type="number" name="purchasePrice" id="purchasePrice" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>
              <div className="flex flex-row">
                <label className="text-gray-700 ">Purchase Rate Factor</label>
                <input onChange={handleChange} value={item.purchaseRateFactor} type="number" name="purchaseRateFactor" id="purchaseRateFactor" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <div className="flex flex-row">
                <label className="text-gray-700 ">MPR</label>
                <input onChange={handleChange} value={item.mrp} type="number" name="mrp" id="mrp" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Minimum Price</label>
                <input onChange={handleChange} value={item.minimumPrice} type="number" name="minimumPrice" id="minimumPrice" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Sales Price</label>
                <input onChange={handleChange} value={item.salesPrice} type="number" name="salesPrice" id="salesPrice" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Wholesale Price</label>
                <input onChange={handleChange} value={item.wholesalePrice} type="number" name="wholesalePrice" id="wholesalePrice" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Dealer Price</label>
                <input onChange={handleChange} value={item.dealerPrice} type="number" name="dealerPrice" id="dealerPrice" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Rate Factor</label>
                <input onChange={handleChange} value={item.rateFactor} type="number" name="rateFactor" id="rateFactor" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
              </div>

              <div className="flex flex-row">
                <label className="text-gray-700 ">Discount</label>
                <input onChange={handleChange} value={item.discount} type="number" name="discount" id="discount" autoComplete="given-name" className="border ms-auto pl-1 w-6/12" />
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

      <div className="flex flex-row gap-x-3 justify-end my-5">
        <button className="bg-[#1d5e7e] text-white px-3 py-1 text-xs" onClick={handleSave} >Save</button>
        <button className="bg-[#1d5e7e] text-white px-3 py-1 text-xs" onClick={handleClear} >Clear</button>
        <button className="bg-[#1d5e7e] text-white px-3 py-1 text-xs" onClick={handlePrint}>Print</button>
        <button className="bg-[#1d5e7e] text-white px-3 py-1 text-xs" onClick={handleImport}>Import</button>
      </div>
    </>
  );
};

export default CreateItem;
