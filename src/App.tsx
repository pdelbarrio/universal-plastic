import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AreaSelector from "./components/AreaSelector";
import WeatherCity from "./components/WeatherCity";

function App() {
  return (
    <div className="max-w-[375px] max-h-[812px] mx-auto bg-red-600">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AreaSelector />} />
          <Route path="/weather" element={<WeatherCity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
