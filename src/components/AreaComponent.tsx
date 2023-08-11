import {
  MapContainer,
  TileLayer,
  Circle,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import { LocationContext } from "@/context/Location.context";
import { useContext, useState, useEffect } from "react";
import { Slider } from "./ui/slider";

const MAX_RADIUS_KM = 20;
const RADIUS_MULTIPLIER = 200;

function MapView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function AreaComponent() {
  const { latitude, longitude } = useContext(LocationContext);
  const [numericLatitude, setNumericLatitude] = useState<number | null>(null);
  const [numericLongitude, setNumericLongitude] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(10);
  const [circleRadius, setCircleRadius] = useState(1000);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      setNumericLatitude(latitude!);
      setNumericLongitude(longitude!);
    }
  }, [latitude, longitude]);

  if (numericLatitude === null || numericLongitude === null) {
    return <p>Invalid data...</p>;
  }

  const handleSliderChange = (values: number[]) => {
    const value = values[0];
    setCircleRadius(value * RADIUS_MULTIPLIER);
    setZoomLevel(value / 5);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h4 className="text-xl font-bold text-plastic-blue-dark py-5">Area</h4>
        <p className="text-plastic-blue-dark font-thin py-5">
          max {MAX_RADIUS_KM} km
        </p>
      </div>
      <div>
        <Slider
          defaultValue={[50]}
          max={100}
          className="pb-5"
          onValueChange={(values) => handleSliderChange(values)}
        />

        <MapContainer
          center={[numericLatitude!, numericLongitude!]}
          zoom={13}
          scrollWheelZoom={false}
          className="responsive-map"
          style={{
            height: "40vh",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <MapView
            center={[numericLatitude, numericLongitude]}
            zoom={zoomLevel}
          />
          <TileLayer
            attribution=""
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Circle
            center={[numericLatitude!, numericLongitude!]}
            radius={circleRadius}
          >
            <Marker position={[numericLatitude!, numericLongitude!]} />
            <Popup>You are here.</Popup>
          </Circle>
        </MapContainer>
      </div>
    </div>
  );
}
