// import { Slider } from "@radix-ui/react-slider";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import { LocationContext } from "@/context/Location.context";
import { useContext, useState, useEffect } from "react";

export default function AreaComponent() {
  const { latitude, longitude } = useContext(LocationContext);
  const [numericLatitude, setNumericLatitude] = useState<number | null>(null);
  const [numericLongitude, setNumericLongitude] = useState<number | null>(null);
  // const [selectedArea, setSelectedArea] = useState<number>(1);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      setNumericLatitude(latitude!);
      setNumericLongitude(longitude!);
    }
  }, [latitude, longitude]);

  if (numericLatitude === null || numericLongitude === null) {
    return <p>Invalid data...</p>;
  }

  // const handleAreaChange = (newValue) => {
  //   setSelectedArea(newValue);
  // };

  console.log("numericLatitude", typeof numericLatitude, numericLatitude);
  console.log("numericLongitude", typeof numericLongitude, numericLongitude);

  return (
    <div>
      <div className="flex justify-between">
        <h4 className="text-xl font-bold text-plastic-blue-dark py-5">Area</h4>
        <p className="text-plastic-blue-dark font-thin py-5">max 20 km</p>
      </div>
      <div>
        <p>Slider</p>
        <MapContainer
          center={[numericLatitude!, numericLongitude!]}
          zoom={13}
          scrollWheelZoom={false}
          style={{
            width: "343px",
            height: "180px",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <TileLayer
            attribution=""
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Circle center={[numericLatitude!, numericLongitude!]} radius={1000}>
            <Marker position={[numericLatitude!, numericLongitude!]} />
            <Popup>You are here.</Popup>
          </Circle>
        </MapContainer>
      </div>
    </div>
  );
}
