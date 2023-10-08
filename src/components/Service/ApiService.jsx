import { axios } from 'axios';

const BASE_URL = 'https://65229e30f43b17938414b4a4.mockapi.io/api/contacts/';

axios.defaults.BASE_URL = BASE_URL;

export const fetchData = () => {
  return axios.fetch();
};
