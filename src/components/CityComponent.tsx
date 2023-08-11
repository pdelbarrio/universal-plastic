import { City, Weather } from "@/types/types";
import data from "../data/test_locations.json";
import { timestampToTime, formatTemperature, isDayTime } from "@/utils/utils";
import { useState, useEffect } from "react";

export default function CityComponent() {
  const [city, setCity] = useState<City["city"]>("");
  const [weatherData, setWeatherData] = useState<Weather>();

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
  const baseIconUrl = "https://openweathermap.org/img/wn/";

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
          });
      }
    }
  }, [city]);

  const isDay = isDayTime();

  const iconCode = weatherData?.weather[0].icon;
  const finalIconCode = isDay ? iconCode : iconCode?.slice(0, -1) + "n";

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
      <div className="border border-plastic-blue rounded-lg p-4 mt-5">
        <div className="flex flex-row justify-evenly">
          <div>
            <img
              src={
                weatherData?.weather[0].icon
                  ? `${baseIconUrl}${finalIconCode}.png`
                  : "../../public/question-mark-is-small-16.png"
              }
              alt={weatherData?.weather[0].description}
              className=""
            />
          </div>
          <div>
            <span className="text-left uppercase text-plastic-blue-thin text-xs font-medium pb-2">
              Weather
            </span>
            <p className="text-plastic-blue-dark font-semibold">
              {weatherData?.weather[0].main
                ? weatherData?.weather[0].main
                : "No data"}
            </p>
          </div>
          <div>
            <span className="text-left uppercase text-plastic-blue-thin text-xs font-medium pb-2">
              Description
            </span>
            <p className="text-plastic-blue-dark font-semibold">
              {weatherData?.weather[0].description
                ? weatherData?.weather[0].description
                : "No data"}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-evenly">
          <div>
            <span className="text-left uppercase text-plastic-blue-thin text-xs font-medium pb-2">
              Sunset
            </span>
            <p className="text-plastic-blue-dark font-semibold">
              {weatherData?.sys.sunset
                ? timestampToTime(weatherData?.sys.sunset)
                : "No data"}
            </p>
          </div>
          <div>
            <span className="text-left uppercase text-plastic-blue-thin text-xs font-medium pb-2">
              Sunrise
            </span>
            <p className="text-plastic-blue-dark font-semibold">
              {weatherData?.sys.sunrise
                ? timestampToTime(weatherData?.sys.sunrise)
                : "No data"}
            </p>
          </div>
          <div>
            <span className="text-left uppercase text-plastic-blue-thin text-xs font-medium pb-2">
              Location
            </span>
            <p className="text-plastic-blue-dark font-semibold">
              {city ? city : "No data"}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-evenly">
          <div>
            <span className="text-left uppercase text-plastic-blue-thin text-xs font-medium pb-2">
              Temperature
            </span>
            <p className="text-plastic-blue-dark font-semibold">
              {weatherData?.main.temp
                ? formatTemperature(weatherData?.main.temp)
                : "No data"}
            </p>
          </div>
          <div>
            <span className="text-left uppercase text-plastic-blue-thin text-xs font-medium pb-2">
              Feels like
            </span>
            <p className="text-plastic-blue-dark font-semibold">
              {weatherData?.main.feels_like
                ? formatTemperature(weatherData?.main.feels_like)
                : "No data"}
            </p>
          </div>
        </div>
        <div>
          <div>4</div>
        </div>
      </div>
    </div>
  );
}
