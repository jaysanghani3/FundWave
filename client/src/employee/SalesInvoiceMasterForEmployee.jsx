import { Link } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { useContext, useEffect, useState } from 'react';
import SharedContext from '../contexts/SharedContext';
import { format } from 'date-fns';
import { Toaster } from 'react-hot-toast';


const SalesInvoiceMasterForEmployee = () => {

    const { invoiceHeader, invoiceData } = useContext(SharedContext);

    const [filteredTableBody, setFilteredTableBody] = useState(invoiceData);
    const [searchValue, setSearchValue] = useState("");

    const fetchData = () => {
        if (searchValue) {
            const filteredData = invoiceData.filter((item) =>
                item.companyName?.toLowerCase().includes(searchValue?.toLowerCase()) ||
                item.name?.toLowerCase().includes(searchValue?.toLowerCase())
            );
            setFilteredTableBody(filteredData);
        } else {
            setFilteredTableBody(invoiceData);
        }
    }

    useEffect(() => {
        fetchData();
    }, [searchValue, invoiceData,]);
    return (
        <div className="text-xs">
            <h1 className="text-sm font-bold bg-[#1d5e7e] text-white py-1 text-center">Sales Invoice Master</h1>
            <Toaster position="top-right"
                reverseOrder={false} />
            <div className="px-3">
                <div className="flex justify-end items-center space-x-2 mt-3">
                    <input
                        type="text"
                        placeholder="Search by name"
                        className="border px-2 py-1"
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                    />
                    <button className="bg-[#1d5e7e] text-white px-3 py-1">Export</button>
                    <button className="bg-[#1d5e7e] text-white px-3 py-1">Print</button>
                    <Link to="/emp/sales-invoice">
                        <button className="bg-[#1d5e7e] text-white px-3 py-1">Add New Sales invoice</button>
                    </Link>
                </div>

                <table className="table-auto w-full mt-3">
                    <thead>
                        <tr className="bg-[#1d5e7e] text-white">
                            {invoiceHeader.map((item, index) => (
                                <td key={index} className={`px-2 py-1 border-r ${item.width}`}>
                                    {item.name}
                                </td>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {filteredTableBody.map((item, index) => (
                            <tr key={index} className="bg-white border hover:bg-gray-200">
                                <td className="px-2 py-1 border-r">{index + 1}</td>
                                <td className="flex px-2 py-1 border-r justify-center items-center text-sm">
                                    <Link to={`/emp/view-invoice/${item._id}`}> {/* target="_blank"*/}
                                        <MdOutlineRemoveRedEye className="text-blue-500" />
                                    </Link>
                                </td>
                                <td className="px-2 border-r">{item.invoiceNo}</td>
                                <td className="px-2 border-r">{item.companyName}</td>
                                <td className="px-2 border-r">{item.contactNumber}</td>
                                <td className="px-2 border-r">{item.gst}</td>
                                <td className="px-2 border-r text-right font-medium">{(item.total).toFixed(2)}</td>
                                <td className="px-2 border-r text-center">{format(new Date(item.createdDate), "dd MMM yyyy")}</td>
                                {/* <td className="px-2    ">{item.created_on_date}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="px-4 py-2">
                <hr className="my-3" />
                <span>
                    Total Sales Invoice : {invoiceData.length}
                </span>
            </div>
        </div>
    )
}

export default SalesInvoiceMasterForEmployee
