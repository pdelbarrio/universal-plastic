import { LocationContext } from "@/context/Location.context";
import { useContext } from "react";

export default function AreaComponent() {
  const { latitude, longitude } = useContext(LocationContext);
  return (
    <div>
      <h4 className="scroll-m-20 text-xl font-bold tracking-tight text-plastic-blue-dark text-left py-5">
        Area
      </h4>
      <p>Latitude {latitude}</p>
      <p>Longitude {longitude}</p>
    </div>
  );
}
