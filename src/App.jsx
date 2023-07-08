import FundWave from "./FundWave";
import { BrowserRouter } from "react-router-dom";
import { SharedContextProvider } from "./contexts/SharedContext";

export default function App() {
  return (
    <SharedContextProvider>
      <BrowserRouter>
        <FundWave />
      </BrowserRouter>
    </SharedContextProvider>
  );
}
