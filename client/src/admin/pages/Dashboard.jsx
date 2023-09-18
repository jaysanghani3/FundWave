import React from "react";
import { Link } from "react-router-dom";
import { FcSalesPerformance } from "react-icons/fc";
import { GiPayMoney, GiReceiveMoney, GiProfit, GiExpense, GiTakeMyMoney } from "react-icons/gi";
import SharedContext from "../../contexts/SharedContext";

const Dashboard = () => {

  const { dashboardTable, customerData, vendorData, expenseData } = React.useContext(SharedContext);

  let totalInvoicesAmount = 0;  
  let totalPurchasesAmount = 0;
  let totalExpensesAmount = 0;
  let totalReceivableAmount = 0;
  let totalPayableAmount = 0;

  for (const item of customerData) {
    totalInvoicesAmount += item.totalInvoicesAmount;
    totalReceivableAmount += item.totalReceivableAmount;
  }
  for (const item of vendorData) {
    totalPurchasesAmount += item.totalPurchasesAmount;
    totalPayableAmount += item.totalPayableAmount;
  }
  for (const item of expenseData) {
    totalExpensesAmount += item.amount;
  }
  
  const list = [
    { name: "Sales", value: "₹ " +totalInvoicesAmount.toFixed(2), color: "text-black", icon: <FcSalesPerformance size={70} /> },
    { name: "Purchase", value: "₹ "+totalPurchasesAmount.toFixed(2), color: "text-black", icon: <GiTakeMyMoney size={70} /> },
    { name: "Expenses", value: "₹ "+totalExpensesAmount.toFixed(2), color: "text-red-500", icon: <GiExpense size={70} /> },
    { name: "Net Profit", value: "₹ "+(totalInvoicesAmount - totalPurchasesAmount - totalExpensesAmount).toFixed(2), color: "text-green-500", icon: <GiProfit size={70} /> },
    { name: "Receivable", value: "₹ "+totalReceivableAmount, color: "text-black", icon: <GiReceiveMoney size={70} /> },
    { name: "Payable", value: "₹ "+totalPayableAmount, color: "text-black", icon: <GiPayMoney size={70} /> },
  ];

  return (
    <div className="mx-auto">
      <div className="flex flex-row items-center">
        <Link to="/sales-invoice">
          <button className="bg-[#1D5B79] text-sm text-white px-4 py-2 rounded-md font-semibold me-3">Sales Invoice</button>
        </Link>
        <Link to="/purchase-bill">
          <button className="bg-[#1D5B79] text-sm text-white px-4 py-2 rounded-md font-semibold mx-3">Purchase Bill</button>
        </Link>
        <Link to="/add-new-customer">
          <button className="bg-[#1D5B79] text-sm text-white px-4 py-2 rounded-md font-semibold mx-3">Add New Customer</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {list.map((item, index) => (
          <div className="flex flex-row bg-white p-3 rounded-lg h-36 shadow-lg" key={index}>
            <div className={`w-5/12 ps-9 py-4 border-r ${item.color}`}>{item.icon}</div>
            <div className="flex flex-col ml-6" key={index}>
              <span className="text-[14] text-gray-700 ">{item.name}</span>
              <span className={`text-3xl mt-3 font-bold text-center ${item.color}`}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 text-xs">
        {
          dashboardTable.map((table, index) => (
            <div className="bg-white p-3 rounded-lg" key={index}>
              <span className="text-xl font-semibold">{table.name}</span>
              <div className="overflow-x-auto mt-4">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="bg-[#1D5B79] text-white">
                      {table.columns.map((column, index) => (
                        <th key={index} className="px-4 py-2">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-end">
                    {table.data.map((data, index) => (
                      <tr key={index}>
                        {data.map((item, index) => (
                          <td key={index} className="border-b px-4 py-2">
                            {item}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Dashboard;
