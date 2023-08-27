import FundWave from "./FundWave";
import { BrowserRouter } from "react-router-dom";
import { SharedContextProvider } from "./contexts/SharedContext";
import RegistrationForm from "./pages/RegLog/RegistrationForm";
import LoginPage from "./pages/RegLog/LoginPage";
export default function App() {
  return (
    <SharedContextProvider>
      <BrowserRouter>
        <FundWave />
      </BrowserRouter>
    </SharedContextProvider>
  );
}
