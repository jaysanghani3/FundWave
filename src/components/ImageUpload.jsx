import React, { useState } from "react";
import { FcAddImage } from "react-icons/fc";

const ImageUploadPreview = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-7/12 mx-auto">
      <div className="flex justify-center items-center relative h-48 border-2 border-dashed border-[#1D5B79] rounded-md p-2">
        {image ? (
          <img src={image} alt="Uploaded" className="rounded-md" />
        ) : (
            <FcAddImage size={120} className="text-gray-500" />
        )}
      </div>
      <label htmlFor="upload" className="block w-6/12 text-center py-2 mx-auto bg-[#1D5B79] text-white font-bold mt-2">
        Upload Image
      </label>
      <input type="file" id="upload" className="hidden" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImageUploadPreview;
