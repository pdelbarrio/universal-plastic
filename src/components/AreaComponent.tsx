// import { Slider } from "@radix-ui/react-slider";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Marker,
  Popup,
} from "react-leaflet";
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
      <h4 className="scroll-m-20 text-xl font-bold tracking-tight text-plastic-blue-dark text-left py-5">
        Area
      </h4>
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
          <CircleMarker
            center={[numericLatitude!, numericLongitude!]}
            radius={100}
          >
            <Marker position={[numericLatitude!, numericLongitude!]} />
            <Popup>You are here.</Popup>
          </CircleMarker>
        </MapContainer>
      </div>
    </div>
  );
}
