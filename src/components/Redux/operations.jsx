import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewContacts, fetchDataAll } from 'components/Service/ApiService';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (signal, thunkApi) => {
    try {
      const { data } = await fetchDataAll(signal);
      return data;
    } catch (error) {
      console.log(error.massage);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await addNewContacts(contact);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.massage);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
