import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { SharedContextProvider } from "./contexts/SharedContext";
import FundWave from "./admin/FundWave";
import Employee from "./employee/Employee";
import LoginPage from "./LoginPage";

export default function App() {

  const user = localStorage.getItem('token');

  return (
    <SharedContextProvider>
      <BrowserRouter>
      {
        !user ? <LoginPage /> :
          user === 'admin' ? <FundWave/> :  
          user === 'employee' ? <Employee/> :<LoginPage />  
      }
      </BrowserRouter>
    </SharedContextProvider>
  );
}
