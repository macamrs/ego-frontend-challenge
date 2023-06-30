import axios from "axios";

const BASE_URL = "https://challenge.egodesign.dev/api/models/";

export const fetchAPIdata = async () => {
  const { data } = await axios.get(`${BASE_URL}?format=json`);
  return data;
};

export const fetchCarAPIdata = async (id) => {
  const { data } = await axios.get(`${BASE_URL}${id}/?format=json`);
  return data;
};
