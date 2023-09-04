import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { SharedContextProvider } from "./contexts/SharedContext";
import FundWave from "./admin/FundWave";
import Employee from "./employee/Employee";
import LoginPage from "./LoginPage";

export default function App() {

  const user = localStorage.getItem('token');
  const [userStatusCode, setUserStatusCode] = useState(null); 
  
  const handleLogin = (status) => {
    setUserStatusCode(status);
  };

  return (
    <SharedContextProvider>
      <BrowserRouter>
      {
        user ? 
          userStatusCode === 221 ?  <FundWave/>  :  <Employee/>  
          :
          <LoginPage onLogin={handleLogin}/> 
      }
      </BrowserRouter>
    </SharedContextProvider>
  );
}
