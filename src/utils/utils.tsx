export const timestampToTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const formatTemperature = (temperature: number) => {
  const formatted = parseFloat((temperature / 10).toFixed(4));
  return formatted;
};

export const isDayTime = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  return currentHour >= 6 && currentHour <= 18;
};
