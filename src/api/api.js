import axios from 'axios';

axios.defaults.baseURL = 'https://65ef7128ead08fa78a5074be.mockapi.io';

export const fetchAllContacts = async () => {
  const { data } = await axios('/contacts');
  return data;
};
export const addNewContact = async ({ name, phone }) => {
  const { data } = await axios.post('/contacts', { name, phone });
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
