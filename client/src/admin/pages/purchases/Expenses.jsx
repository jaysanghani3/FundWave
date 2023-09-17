import React, { useEffect,useContext, useState } from 'react';
import noData from '../../../assets/no-data-6.png';
import axios from 'axios';
import { toast, Toaster } from "react-hot-toast";
import  SharedContext from '../../../contexts/SharedContext';
import { format } from "date-fns";
import { MdOutlineDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const Expenses = () => {

  const { expenseData } = useContext(SharedContext);

  const [expenseItems, setExpenseItems] = useState(expenseData);

  const [expense, setExpense] = useState({
    name: '',
    details: '',
    amount: '',
    date: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/expense/store', expense);
      console.log(res);
        toast.success(res.data.message);
        setExpense({
          name: '',
          details: '',
          amount: '',
          date: new Date().toISOString().slice(0, 10),
        });
      
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setExpenseItems(expenseData);
    console.log(expenseData);
  }, [expenseData, expenseItems,]);

  const handleDeleteExpense = async (id) => {
    try {
      console.log(id);
      const res = await axios.delete(`http://localhost:3000/expense/${id}`);
      console.log(id);
      console.log(res);
      toast.success(res.data.message);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div className="border border-gray-300 text-gray-600">
      <h1 className="text-md font-bold bg-[#1d5e7e] text-white py-1 text-center">Expense</h1>
      <Toaster />
      <div className="p-3 mt-4">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <input
              placeholder='Expense Name'
              type="text"
              id="name"
              name="name"
              value={expense.name}
              onChange={handleChange}
              className="border rounded px-3 w-2/12 py-1"
            />

            <input
              placeholder='Expense Details'
              type="text"
              id="details"
              name="details"
              value={expense.details}
              onChange={handleChange}
              className="border rounded px-3 w-4/12 py-1 "
            />

            <input
              placeholder='Expense Amount'
              type="number"
              id="amount"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
              className="border rounded px-3 w-2/12 py-1 "
            />

            <input
              placeholder='Expense Date'
              type="date"
              className="px-3 border-gray-300 border rounded-md w-2/12 py-1"
              value={expense.date}
              onChange={handleChange}
              required
            />
          
            <button type="submit px-3 "
              className="bg-[#1d5e7e] text-white px-4 py-2 text-xs rounded hover:bg-[#1d5e7ee7]">
              Add Expense
            </button>
          </div>
        </form>
        <hr className="my-3" />

        <table className="table-auto w-full mt-3">
          <thead>
            <tr className="bg-[#1d5e7e] text-white">
              <td className='px-2 py-1 border-r w-6'>#</td>
              <td className='px-2 py-1 border-r '>Actions</td>
              <td className='px-2 py-1 border-r w-2/12'>Expense Name</td>
              <td className='px-2 py-1 border-r w-5/12'>Expense Description</td>
              <td className='px-2 py-1 border-r w-2/12 text-right pr-6'>Expense Amount</td>
              <td className='px-2 py-1 border-r w-2/12  text-center'>Expense Date</td>
            </tr>
          </thead>
          {/* {expense.length > 0 ? ( */}
            <tbody>
              {expenseItems.map((expense, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className='px-2 py-1 border-r'>{index + 1}</td>
                  <td className="flex px-2 py-1 border-r justify-evenly items-center">

                    <Link to={`/expenses/${expense._id}`}>
                      <MdEdit className="text-blue-500 mr-2" />
                    </Link>
                    <button onClick={() => handleDeleteExpense(expense._id)}>
                      <MdOutlineDelete className="text-red-500 ml-2" />
                    </button></td>
                  <td className='px-2 py-1 border-r'>{expense.name}</td>
                  <td className='px-2 py-1 border-r'>{expense.details}</td>
                  <td className='px-2 py-1 border-r text-right pr-6'>{expense.amount}</td>
                  <td className='px-2 py-1 border-r text-center'>{format(new Date(expense.date), "dd MMM yyyy")}</td>
                </tr>
              ))}
            </tbody>
          {/* ) : (
            <tbody>
              <tr className='h-40'>
                <td className='px-2 py-1 border text-center' colSpan='4'>
                  <img src={noData} alt='No Expense Added' className='h-40 mx-auto' />
                  No Expense Added
                </td>
              </tr> */}
            {/* </tbody>
          )} */}
        </table>
      </div>
    </div>
  );
};

export default Expenses;
