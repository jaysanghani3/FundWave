import React, { useState } from "react";
import logo from "../assets/logo.png";
import mii from "../assets/make_in_india.png";
import { BsInstagram, BsWhatsapp, BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";

const Login = ({ onLogin }) => {

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e.target.username);
    if (e.target.username.value === "jay" && e.target.password.value === "123") {
      onLogin(e.target.username.value);
    } else {
      alert("Invalid credentials");
      e.target.username.value = "";
      e.target.password.value = "";
      // setUsername("");
      // setPassword("");
    }
  }

  const handleLoginOld = (e) => {
    // e.preventDefault();
    // if (username === "jay" && password === "123") {
    //   onLogin(username);
    // } else {
    //   alert("Invalid credentials");
    //   setUsername("");
    //   setPassword("");
    // }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-[#FDF4EE] to-[#EAF9F2]">
      <div className="p-3 border rounded-md shadow-2xl w-1/4 bg-white">
        <div className="border rounded-md ">
          <div className="flex items-center m-4">
            <img src={logo} alt="FundWave" className="w-16 h-16" />
            <div className="flex flex-col p-2 text-gray-700">
              <span className="text-2xl font-semibold">FundWave</span>
              <span className="text-[10px]">Cloudbase Accounting System</span>
            </div>
            <img src={mii} alt="MadeInIndia" className="w-16 h-16 ms-auto" />
          </div>

          {/* <h2 className="text-sm bg-[#1D5B79] text-white p-2 mb-4 rounded-br-xl rounded-tl-xl mx-auto text-center w-9/12 font-semibold">Log in</h2> */}
          <form onSubmit={handleLogin}>
            <div className="m-4 text-xs">
              <input className="w-full border p-2 rounded-md" placeholder="Email" name="username"  />
            </div>
            <div className="m-4 text-xs">
              <input type="password" className="w-full border p-2 rounded-md" placeholder="Password" name="password" />
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

export default Login;
