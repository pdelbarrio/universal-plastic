export type CoordinateType = number | null;

export type LocationContextType = {
  latitude?: CoordinateType;
  longitude?: CoordinateType;
  updateCoordinates: (
    newLatitude: CoordinateType,
    newLongitude: CoordinateType
  ) => void;
};

export interface City {
  id: number;
  city: string;
  timezone: string;
  location: {
    type: string;
    coordinates: number[];
  };
}
