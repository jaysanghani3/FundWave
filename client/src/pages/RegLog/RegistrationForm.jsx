// src/components/RegistrationForm.js
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast'
import { NavLink } from 'react-router-dom';
// import useHistory from 'react-router-dom';

const RegistrationForm = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    // const history = useHistory();

    const handleRegistration = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:3000/registration/store',
                {
                    userName,
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
                    console.error('Registration error:', error);
                }
            }
        }

    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <Toaster />
                <h2 className="text-2xl mb-6 font-semibold text-center">Register</h2>
                <form onSubmit={handleRegistration}>
                    <div className="mb-4">
                        <label htmlFor="userName" className="block font-medium mb-1">
                            User Name
                        </label>
                        <input
                            type="text"
                            id="userName"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef} // Add the ref here
                            className={`w-full p-2 border rounded-md focus:outline-none ${error === 'email' ? 'border-red-500' : 'focus:border-blue-300'
                                }`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block font-medium mb-1">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password" 
                            ref={passwordRef} // Add the ref here
                            className={`w-full p-2 border rounded-md focus:outline-none ${error === 'password' ? 'border-red-500' : 'focus:border-blue-300'
                                }`}
                                value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block font-medium mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-center">
                    Already have an account?{' '}
                    <NavLink to="/login" className="text-blue-500 hover:text-blue-600">
                        Login
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default RegistrationForm;
