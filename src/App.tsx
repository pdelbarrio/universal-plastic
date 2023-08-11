import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AreaSelector from "./components/AreaSelector";
import WeatherCity from "./components/WeatherCity";
import FooterNav from "./components/FooterNav";
import { LocationProvider } from "./context/Location.context";

function App() {
  return (
    <div className="max-w-screen-sm mx-auto px-4">
      <LocationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AreaSelector />} />
            <Route path="/weather" element={<WeatherCity />} />
          </Routes>
          <FooterNav />
        </BrowserRouter>
      </LocationProvider>
    </div>
  );
}

export default App;
