import React, { useState } from "react";
import logo from "../assets/logo.png";
import mii from "../assets/make_in_india.png";
import { Link } from "react-router-dom";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import git from "../assets/git.png";
import linkdin from "../assets/linkdin.png";
import wp from "../assets/wp.png";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "jay" && password === "123") {
      onLogin(username);
    } else {
      alert("Invalid credentials");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="p-3 border rounded-md shadow-md w-1/3">
        <div className="border rounded-md ">
          <div className="flex items-center m-4">
            <img src={logo} alt="FundWave" className="w-20 h-20" />
            <div className="flex flex-col p-2 text-gray-700">
              <span className="text-2xl font-semibold">FundWave</span>
              <span className="text-[10px]">Cloudbase Accounting System</span>
            </div>
            <img src={mii} alt="MadeInIndia" className="w-16 h-16 ms-auto" />
          </div>

          {/* <h2 className="text-sm bg-[#1D5B79] text-white p-2 mb-4 rounded-br-xl rounded-tl-xl mx-auto text-center w-9/12 font-semibold">Log in</h2> */}

          <div className="m-4 text-xs">
            <input type="email" className="w-full border p-2 rounded-md" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="m-4 text-xs">
            <input type="password" className="w-full border p-2 rounded-md" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="flex items-center justify-end m-4">
            <button className="bg-[#1D5B79] text-white py-2 px-5 rounded-md text-xs" onClick={handleLogin}>
              Login
            </button>
          </div>

          <div className="flex items-center m-4">
            <button className="text-xs text-[#1D5B79]">Forgot Password?</button>
          </div>

          <div className="flex items-center m-4">
            <span className="text-xs">Need help?</span>
            <button className="text-xs text-[#1D5B79] ml-2">Contact Us</button>
          </div>

          <div className="flex items-center p-3 text-white bg-[#1D5B79]">
            <span className="text-xs">Terms of Service</span>
            <span className="text-xs mx-2">|</span>
            <span className="text-xs">Privacy Policy</span>
            <span className="text-xs ms-auto">© 2023 FundWave. All rights reserved</span>
          </div>
        </div>

        <p className="text-gray-700 text-center border-b mb-3">Social Media</p>
        <div className="flex items-center justify-center">
          <a href="https://github.com/jaysanghani3" target="_blank">
            <img src={fb} alt="fb" className="w-6 h-6 mx-2" />
          </a>
          <a href="https://github.com/jaysanghani3" target="_blank">
            <img src={wp} alt="wp" className="w-6 h-6 mx-2" />
          </a>
          <a href="https://github.com/jaysanghani3" target="_blank">
            <img src={ig} alt="ig" className="w-6 h-6 mx-2" />
          </a>
          <a href="https://github.com/jaysanghani3" target="_blank">
            <img src={git} alt="git" className="w-6 h-6 mx-2" />
          </a>
          <a href="https://github.com/jaysanghani3" target="_blank">
            <img src={linkdin} alt="linkdin" className="w-6 h-6 mx-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
