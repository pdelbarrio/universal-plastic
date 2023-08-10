import { createContext, useState } from "react";
import { CoordinateType, LocationContextType } from "@/types/types";

const LocationContext = createContext<LocationContextType>({
  latitude: null,
  longitude: null,
  updateCoordinates: () => {},
});

const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [latitude, setLatitude] = useState<CoordinateType>(null);
  const [longitude, setLongitude] = useState<CoordinateType>(null);

  const updateCoordinates = (
    newLatitude: CoordinateType,
    newLongitude: CoordinateType
  ) => {
    setLatitude(newLatitude);
    setLongitude(newLongitude);
  };

  return (
    <LocationContext.Provider
      value={{ latitude, longitude, updateCoordinates }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };
