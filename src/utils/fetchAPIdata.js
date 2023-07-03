import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchAPIdata = async () => {
  const { data } = await axios.get(`${BASE_URL}?format=json`);
  return data;
};

export const fetchCarAPIdata = async (id) => {
  const { data } = await axios.get(`${BASE_URL}${id}/?format=json`);
  return data;
};
