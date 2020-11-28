export const formatTime = (unixTimestamp: number) => {
  const d = new Date(unixTimestamp);
  return d.getDate() + "/" + (d.getMonth() + 1) + "/" + (d.getFullYear() - 18);
};

export const BASE_URL = "192.168.100.20";
