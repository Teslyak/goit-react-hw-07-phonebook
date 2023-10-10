import axios from 'axios';

const BASE_URL = 'https://6523cab7ea560a22a4e8d9dd.mockapi.io';

axios.defaults.baseURL = BASE_URL;

export const fetchDataAll = signal => {
  return axios.get('contacts', { signal });
};

export const addNewContacts = contact => {
  return axios.post('contacts', contact);
};

export const delContact = id => {
  return axios.delete(`contacts/${id}`);
};
