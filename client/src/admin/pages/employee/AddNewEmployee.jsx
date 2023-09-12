import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast'
import { NavLink } from 'react-router-dom';

const AddNewEmployee = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3000/user/store',
        {
          name,
          email,
          phone,
          password,
          confirmPassword,
        }
      );
      toast.success("Registration successfully.");
      // history.push('/login');
    }
    catch (error) {
      if (error.response.status === 422) {
        toast.error("Email address already registered !");
        setError('email');
        emailRef.current.focus();

      }
      else {
        if (error.response && error.response.data && error.response.data.errors) {
          const errors = error.response.data.errors;
          toast.error(errors);
          console.log(errors);
          setError('password');
          passwordRef.current.focus();
        } else {
          console.error('Employee error:', error);
        }
      }
    }

  };
  return (
    <>
      <h1 className="text-sm font-bold bg-[#1d5e7e] text-white px-3 py-1">Add New Employee</h1>
      <Toaster />
      <div className="grid grid-cols-3 gap-6 border p-3 pl-9 my-2 text-[13px]">
        <form className="flex flex-col col-span-2 gap-y-2 w-10/12 mx-auto" onSubmit={handleRegistration}>
          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="name">
              Name
            </label>
            <input className="border ms-auto pl-1 w-10/12" id="name" name="name" type="text" value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="email">
              Email
            </label>
            <input className={`border ms-auto pl-1 w-10/12 ${error === 'email' ? 'border-red-500' : 'focus:border-blue-300'
              }`} id="email" name="email" type="text" ref={emailRef} // Add the ref here
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="phone">
              Phone
            </label>
            <input className="border ms-auto pl-1 w-10/12" id="phone" name="phone" type="text" value={phone}
              onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="password">
              Password
            </label>
            <input id="password" name="password" type="password" ref={passwordRef} className={`border ms-auto pl-1 w-10/12 ${error === 'password' ? 'border-red-500' : 'focus:border-blue-300'
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="flex flex-row">
            <label className="w-1/3" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input className="border ms-auto pl-1 w-10/12" id="confirmPassword" name="confirmPassword" type="password" value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1d5e7e] text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Register
          </button>
        </form>


      </div>
    </>
  )
}

export default AddNewEmployee
