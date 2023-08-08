import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AreaSelector from "./components/AreaSelector";
import WeatherCity from "./components/WeatherCity";
import FooterNav from "./components/FooterNav";

function App() {
  return (
    <div className="max-w-[375px] max-h-[812px] mx-auto m-2">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AreaSelector />} />
          <Route path="/weather" element={<WeatherCity />} />
        </Routes>
        <FooterNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
