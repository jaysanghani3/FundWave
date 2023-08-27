import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { format } from "date-fns";
import axios from 'axios';
import logo from "../../assets/logo.png";
import "../../print-styles.css"
const ViewInvoice = () => {

    const { invoiceId } = useParams();
    const [invoiceData, setInvoiceData] = useState(null);
    const navigate = useNavigate();

    const getInvoiceData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/invoice/${invoiceId}`);
            setInvoiceData(response.data);
        } catch (error) {
            console.error('Error fetching invoice data:', error);
        }
    }

    useEffect(() => {
        getInvoiceData();
    }
        , [invoiceId]);

    if (!invoiceData) {
        return <div>Loading...</div>;
    }
    const handlePrint = () => {
        window.print();
    }

    return (
        <div className="p-8 bg-gray-100 min-h-screen text-xs">
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    body {
                        margin: 1.6cm;
                    }
                }
            `,
                }}
            />
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-3 print-only">
                <div className='border-2 border-[#538daaab] p-4 rounded-lg'>

                    <div className="flex justify-between mb-6 border-b p-1">
                        <div className="flex">
                            <p className="">{(invoiceData.cashCredit).charAt(0).toUpperCase() + (invoiceData.cashCredit).slice(1)} Memo</p>
                        </div>
                        <div className="flex">
                            <p className="">Tax Invoice</p>
                        </div>
                        <div className="flex">
                            <p className="">Original</p>
                        </div>
                    </div>

                    <div className="flex justify-between mb-6 border-b-2 pb-2">
                        <div className="flex flex-col ">
                            <p className="text-xs py-1 font-semibold">GST IN : 24AABCF1234C1ZV</p>
                            <p className="text-xs py-1">Madhuvan Park-2, Bapa Sitaram Chock, Mavdi,<br />Rajkot - 360004.</p>
                            <p className="text-xs py-1 font-semibold">Email : sanghanijay6353@gmail.com | Mobile no : 6353 123 580</p>
                            <p className="text-xs py-1">StateCode : 24</p>
                        </div>
                        <div className="flex flex-col ">
                            <img src={logo} alt="FundWave" className="w-8 h-8 sm:w-16 sm:h-16 mx-auto" />
                            <p className="text-2xl font-bold text-[#004369]">FundWave</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="col-span-1 w-3/4">
                            <p className="text-xs text-gray-600 mb-2 font-bold">Customer Name & Billing Address</p>
                            <p className="text-xs text-gray-600 mb-1 font-bold">{invoiceData.companyName}</p>
                            <p className="text-xs text-gray-600 mb-1">{invoiceData.gst}</p>
                            <p className="text-xs text-gray-600 mb-1">{invoiceData.address}</p>
                            <p className="text-xs text-gray-600 mb-1">{invoiceData.contactNumber}</p>
                        </div>

                        <div className="col-span-1 ps-6">
                            <p className="text-sm text-gray-600 mb-2 font-bold">Invoice Details</p>

                            <div className="flex justify-start my-1">
                                <div className="flex w-8/12">Invoice</div>
                                <div className="flex w-8/12">{invoiceData.invoiceNo}</div>
                            </div>
                            <div className="flex justify-start my-1">
                                <div className="flex w-8/12">Invoice Date</div>
                                <div className="flex w-8/12">{format(new Date(invoiceData.createdDate), "dd MMM yyyy")}</div>
                            </div>
                            <div className="flex justify-start my-1">
                                <div className="flex w-8/12">Due Date</div>
                                <div className="flex w-8/12">{format(new Date(invoiceData.dueDate), "dd MMM yyyy")}</div>
                            </div>

                            <div className="flex justify-start">

                            </div>
                        </div>
                    </div>

                    <table className="w-full border-collapse mb-8">
                        <thead >
                            <tr className='bg-gray-200'>
                                <th className="p-1 text-center border-b-2 border-gray-300 w-12">Sr No.</th>
                                <th className="p-1 ps-3 text-left border-b-2 border-gray-300">Product Name</th>
                                <th className="p-1 text-right border-b-2 border-gray-300">Qty</th>
                                <th className="p-1 text-right border-b-2 border-gray-300">Price</th>
                                <th className="p-1 text-right border-b-2 border-gray-300">Discount</th>
                                <th className="p-1 text-right border-b-2 border-gray-300">GST %</th>
                                <th className="p-1 text-right border-b-2 border-gray-300">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                invoiceData.items.map((item, index) => (
                                    <tr key={index}>
                                        <td className="py-1 text-center border-b border-gray-300">{index + 1}</td>
                                        <td className="py-1 ps-3 border-b border-gray-300">{item.name}</td>
                                        <td className="py-1 text-right border-b border-gray-300">{item.qty}</td>
                                        <td className="py-1 text-right border-b border-gray-300">{item.rate}</td>
                                        <td className="py-1 text-right border-b border-gray-300">{item.discount}</td>
                                        <td className="py-1 text-right border-b border-gray-300">{item.taxCode}</td>
                                        <td className="py-1 text-right border-b border-gray-300">{item.total}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {/* <div className="flex mt-12"> */}
                    <div className="grid grid-cols-5 gap-10">
                        <div className="col-span-2 mt-auto">
                            <p className="text-sm text-gray-600 mb-2 font-bold">Bank Details</p>
                            <p className="text-xs text-gray-600 mb-1 font-bold">Bank Name : HDFC Bank</p>
                            <p className="text-xs text-gray-600 mb-1">Account No : 1234567890123456</p>
                            <p className="text-xs text-gray-600 mb-1">IFSC Code : HDFC0001234</p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-right my-2">Sub Total</p>
                            <p className="text-right my-2">Discount</p>
                            <p className="text-right my-2">Taxable Value</p>
                            <p className="text-right my-2">CGST</p>
                            <p className="text-right my-2">SGST</p>
                            <p className="text-lg text-right my-2">Total</p>
                        </div>

                        <div className="col-span-1">
                            <p className="text-right my-2">{(invoiceData.subTotal).toFixed(2)}</p>
                            <p className="text-right my-2">{(invoiceData.discount).toFixed(2)}</p>
                            <p className="text-right my-2">{(invoiceData.taxableValue).toFixed(2)}</p>
                            <p className="text-right my-2">{(invoiceData.cgst).toFixed(2)}</p>
                            <p className="text-right my-2">{(invoiceData.sgst).toFixed(2)}</p>
                            <p className="text-lg text-right my-2 font-bold">{(invoiceData.total).toFixed(2)}</p>
                        </div>
                    </div>
                    {/* </div> */}

                    <div className="flex justify-between mt-12">
                        <div className="flex flex-col">
                            <p className="text-[12px] text-gray-600 mb-2 font-bold">Terms & Conditions</p>
                            <p className="text-[10px] text-gray-600 mb-1 font-bold">1. Interest @ 24% will be charged if payment is not made within 30 days.</p>
                            <p className="text-[10px] text-gray-600 mb-1">2. Subject to Rajkot Jurisdiction.</p>
                            {invoiceData.terms ? <p className="text-[10px] text-gray-600 mb-1">3. {invoiceData.terms}</p> : null}
                            {invoiceData.remarks ? <p className="text-[12px] text-gray-600 my-2">{invoiceData.remarks}</p> : null}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center gap-x-6 m-4">
                <button className="bg-[#1d5e7e] text-white px-3 py-1 " onClick={() => navigate("/sales-invoice-master")}>Back</button>
                <button className="bg-[#1d5e7e] text-white px-3 py-1 " onClick={handlePrint}>Print</button>
                <button className="bg-[#1d5e7e] text-white px-3 py-1 ">Email</button>
            </div>
        </div>
    )
}

export default ViewInvoice
