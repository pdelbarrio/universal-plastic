import { City, Weather } from "@/types/types";
import data from "../data/test_locations.json";
import { timestampToTime, formatTemperature, isDayTime } from "@/utils/utils";
import { useState, useEffect } from "react";
import { Progress } from "./ui/progress";
import { LocationIcon } from "./Icons";

export default function CityComponent() {
  const [city, setCity] = useState<City["city"]>("");
  const [weatherData, setWeatherData] = useState<Weather>();
  const [longitude, setLongitude] = useState<number>(0);
  const [latitude, setLatitude] = useState<number>(0);

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
        setLongitude(lon);
        setLatitude(lat);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  const isDay = isDayTime();

  const iconCode = weatherData?.weather[0].icon;
  const finalIconCode = isDay ? iconCode : iconCode?.slice(0, -1) + "n";

  return (
    <div>
      <h4 className="text-xl font-bold tracking-tight text-plastic-blue-dark text-left py-5">
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
        <div className="flex flex-row gap-5 md:gap-20 border-b border-plastic-blue-light pb-3">
          <div>
            <img
              src={
                weatherData?.weather[0].icon
                  ? `${baseIconUrl}${finalIconCode}.png`
                  : "https://res.cloudinary.com/dl5hp1axh/image/upload/v1691750008/utils/question-mark_nihtia.png"
              }
              alt={weatherData?.weather[0].description}
              className="border border-gray-200 rounded-full"
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
        <div className="flex flex-row gap-10 md:gap-24 py-2">
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
            <div className="text-plastic-blue-thin flex items-center">
              <LocationIcon />

              <p className="text-plastic-blue-dark font-semibold">
                {city ? (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {city}
                  </a>
                ) : (
                  "No data"
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10 md:gap-32">
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
          <div className="flex flex-col">
            <span className="text-plastic-blue-thin text-xs p-2 font-normal text-end">
              {weatherData?.main.humidity} % humidity
            </span>
            <Progress value={weatherData?.main.humidity} />
          </div>
        </div>
      </div>
    </div>
  );
}
