import { LocationContext } from "@/context/Location.context";
import { useState, useEffect, useContext } from "react";

export default function Location() {
  const [latitudeError, setLatitudeError] = useState<string | null>(null);
  const [longitudeError, setLongitudeError] = useState<string | null>(null);
  const { latitude, longitude, updateCoordinates } =
    useContext(LocationContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        updateCoordinates(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, []);

  const handleLatitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLatitude = parseFloat(e.target.value);
    if (isNaN(newLatitude) || newLatitude < -90 || newLatitude > 90) {
      setLatitudeError("Please enter a valid latitude (-90 to 90 degrees)");
    } else {
      setLatitudeError(null);
      updateCoordinates(newLatitude, longitude!);
    }
  };

  const handleLongitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLongitude = parseFloat(e.target.value);
    if (isNaN(newLongitude) || newLongitude < -180 || newLongitude > 180) {
      setLongitudeError("Please enter a valid longitude (-180 to 180 degrees)");
    } else {
      setLongitudeError(null);
      updateCoordinates(latitude!, newLongitude);
    }
  };

  return (
    <div className="">
      <h4 className="text-xl font-bold tracking-tight text-plastic-blue-dark text-left py-5">
        Location
      </h4>
      <div className="flex flex-row">
        <div className="max-w-screen-sm">
          <p className="text-left uppercase text-plastic-blue-thin text-xs font-semibold pb-2">
            Latitude
          </p>
          <input
            type="text"
            value={latitude || ""}
            onChange={handleLatitudeChange}
            className="w-full bg-plastic-green-back rounded-tl-lg rounded-bl-lg p-2 text-plastic-blue-green"
          />
          {latitudeError && (
            <p className="text-red-600 text-xs">{latitudeError}</p>
          )}
        </div>
        <div>
          <p className="text-left uppercase text-plastic-blue-thin text-xs font-semibold pb-2">
            Longitude
          </p>
          <input
            type="text"
            value={longitude || ""}
            onChange={handleLongitudeChange}
            className="w-full bg-plastic-green-back rounded-tr-lg rounded-br-lg p-2 text-plastic-blue-green border-plastic-blue-light border-l-2"
          />
          {longitudeError && (
            <p className="text-red-600 text-xs">{longitudeError}</p>
          )}
        </div>
      </div>
    </div>
  );
}
