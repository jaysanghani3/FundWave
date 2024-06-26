import React from "react";
import ImageUpload from "../components/ImageUpload";

const CustomerVendorForm = ({ title, fields, data, onChange }) => {
  return (
    <>
      <h1 className="text-sm font-bold bg-[#1d5e7e] text-white px-3 py-1">{title}</h1>

      <div className="grid grid-cols-3 gap-6 border p-3 pl-9 my-2 text-[13px]">
        <div className="flex flex-col col-span-2 gap-y-2 w-10/12 mx-auto">
          {fields.map((field) => (
            <div key={field.name} className="flex flex-row">
              <label className="w-1/3" htmlFor={field.name}>
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea onChange={onChange} value={data[field.name]} className="border h-16 ms-auto px-2 w-10/12 resize-none" id={field.name} name={field.name}></textarea>
              ) : (
                <input
                autoComplete="off" 
                onChange={onChange} value={data[field.name]} className="border ms-auto pl-1 w-10/12" id={field.name} name={field.name} type={field.type} />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row">
            <ImageUpload />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerVendorForm;
