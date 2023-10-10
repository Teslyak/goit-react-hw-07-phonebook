import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addNewContacts,
  delContact,
  fetchDataAll,
} from 'components/Service/ApiService';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (signal, thunkApi) => {
    try {
      const { data } = await fetchDataAll(signal);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await addNewContacts(contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const { data } = await delContact(id);
      return data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
