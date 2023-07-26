import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[75%]">
        <p className="text-8xl font-extrabold text-[#14425a]">404</p>
        <p className="text-xl">Page Not Found</p>
        <Link to="/" className="px-4 py-2 mt-4 rounded-lg bg-[#14425a] text-white hover:bg-[#14425aaf] hover:font-bold">Go to Dashboard</Link>
    </div>
  );
};

export default PageNotFound;
