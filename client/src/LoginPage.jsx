import React, { useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import logo from './assets/logo.png'; // Replace with your logo path
import mii from './assets/make_in_india.png'; // Replace with your Made In India logo path
import { BsFacebook, BsWhatsapp, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'; // Import icons
import { NavLink, useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/user/login', { email, password });
            toast.success("Login successfully.");
            localStorage.setItem('token', email);
            onLogin(res.status);
            if (res.status === 221)
                navigate('/');
            else if (res.status === 222)
                navigate('/emp/sales-invoice');
            // navigate('/');
            // window.location.reload()
        }
        catch (error) {
            if (error.response.status === 401) {
                toast.error(error.response.data.message);
                setPassword('');
                setEmail('');
            }
            else
                console.error('Login error:', error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-[#FDF4EE] to-[#EAF9F2]">
            <Toaster />
            <div className="p-3 border rounded-md shadow-2xl w-1/4 bg-white">
                <div className="border rounded-md">
                    <div className="flex items-center m-4">
                        <img src={logo} alt="FundWave" className="w-16 h-16" />
                        <div className="flex flex-col p-2 text-gray-700">
                            <span className="text-2xl font-semibold">FundWave</span>
                            <span className="text-[10px]">Cloudbase Accounting System</span>
                        </div>
                        <img src={mii} alt="MadeInIndia" className="w-16 h-16 ms-auto" />
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="m-4 text-xs">
                            <input
                                className="w-full border p-2 rounded-md"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="m-4 text-xs">
                            <input
                                type="password"
                                className="w-full border p-2 rounded-md"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-end m-4">
                            <button className="bg-[#1D5B79] text-white py-2 px-5 rounded-md text-xs">
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center m-4">
                        <button className="text-xs text-[#1D5B79]">Forgot Password?</button>
                    </div>

                    <div className="flex items-center m-4">
                        <NavLink to="/signup">
                            <span className="text-xs">Don't have an account?</span>
                        </NavLink>
                    </div>

                    <div className="flex items-center m-4">
                        <span className="text-xs">Need help?</span>
                        <button className="text-xs text-[#1D5B79] ml-2">Contact Us</button>
                    </div>

                    <div className="flex items-center m-4">
                        <span className="text-xs">Terms of Service</span>
                        <span className="text-xs mx-2">|</span>
                        <span className="text-xs">Privacy Policy</span>
                    </div>

                    <div className="flex items-center p-2 text-white bg-[#1D5B79]">
                        <span className="text-[10px] ms-auto">© 2023 FundWave. All rights reserved</span>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex flex-col items-center justify-center my-6">
                    <p className="text-gray-700 text-center border-b mb-3">Social Media</p>
                    <div className="flex items-center justify-center">
                        <a href="https://www.facebook.com/jaysanghani03/" target="_blank">
                            <BsFacebook size={20} className="mx-2" />
                        </a>
                        <a href="https://wa.me/6353123580" target="_blank">
                            <BsWhatsapp size={20} className="mx-2" />
                        </a>
                        <a href="https://www.instagram.com/jay_sanghani3/" target="_blank">
                            <BsInstagram size={20} className="mx-2" />
                        </a>
                        <a href="https://github.com/jaysanghani3" target="_blank">
                            <BsGithub size={20} className="mx-2" />
                        </a>
                        <a href="https://www.linkedin.com/in/jay-sanghani-080193194/" target="_blank">
                            <BsLinkedin size={20} className="mx-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
