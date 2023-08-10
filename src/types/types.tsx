export type CoordinateType = number | null;

export type LocationContextType = {
  latitude?: CoordinateType;
  longitude?: CoordinateType;
  updateCoordinates: (
    newLatitude: CoordinateType,
    newLongitude: CoordinateType
  ) => void;
};
