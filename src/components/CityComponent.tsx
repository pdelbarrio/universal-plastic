import { City } from "@/types/types";
import data from "../data/test_locations.json";
import { useState, useEffect } from "react";

export default function CityComponent() {
  const [city, setCity] = useState<City["city"]>("");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";

  useEffect(() => {
    if (city) {
      const selectedCity = data.find((item) => item.city === city);
      if (selectedCity) {
        const [lon, lat] = selectedCity.location.coordinates;
        const url = `${baseUrl}lat=${lat}&lon=${lon}&appid=${apiKey}`;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setWeatherData(data);
            console.log(data);
          });
      }
    }
  }, [city]);

  console.log(weatherData);

  return (
    <div>
      <h4 className="scroll-m-20 text-xl font-bold tracking-tight text-plastic-blue-dark text-left py-5">
        City
      </h4>
      <div>
        <select
          className="bg-plastic-green-back rounded-lg p-2 text-plastic-blue-green border-plastic-blue-light w-full"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        >
          <option value="">Select a city</option>
          {data.map((city) => (
            <option key={city.id} value={city.city}>
              {city.city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
