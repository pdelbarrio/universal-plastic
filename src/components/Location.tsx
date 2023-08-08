import { useState, useEffect } from "react";

type CoordinateType = number | null | string;

export default function Location() {
  const [latitude, setLatitude] = useState<CoordinateType>(null);
  const [longitude, setLongitude] = useState<CoordinateType>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, []);
  return (
    <div className="">
      <h4 className="scroll-m-20 text-xl font-bold tracking-tight text-plastic-blue-dark text-left py-5">
        Location
      </h4>
      <div className="flex flex-row">
        <div>
          <p className="text-left uppercase text-plastic-blue-thin text-xs font-semibold pb-2">
            Latitude
          </p>
          <input
            type="text"
            value={latitude || ""}
            onChange={(e) => setLatitude(e.target.value)}
            className="bg-plastic-green-back rounded-tl-lg rounded-bl-lg p-2 text-plastic-blue-green  "
          />
        </div>
        <div>
          <p className="text-left uppercase text-plastic-blue-thin text-xs font-semibold pb-2">
            Longitude
          </p>
          <input
            type="text"
            value={longitude || ""}
            onChange={(e) => setLongitude(e.target.value)}
            className="bg-plastic-green-back rounded-tr-lg rounded-br-lg p-2 text-plastic-blue-green border-plastic-blue-light border-l-2"
          />
        </div>
      </div>
    </div>
  );
}
