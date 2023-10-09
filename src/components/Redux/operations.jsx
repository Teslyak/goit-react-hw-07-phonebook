import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataAll } from 'components/Service/ApiService';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (signal, thunkApi) => {
    try {
      const { data } = await fetchDataAll(signal);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.massage);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
