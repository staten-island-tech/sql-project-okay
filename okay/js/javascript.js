import axios from 'axios';

const API_URL = 'https://data.cityofnewyork.us/resource/f9bf-2cp4.json';

const fetchData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}
