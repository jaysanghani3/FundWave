import FundWave from "./FundWave";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
  <div>
    <BrowserRouter>
      <FundWave />
    </BrowserRouter>
  </div>
  )
}