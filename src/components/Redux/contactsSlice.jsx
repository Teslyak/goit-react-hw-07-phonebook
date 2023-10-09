import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { addContacts, fetchContacts } from './operations';

const initContacts = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initContacts,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items.push(...action.payload);
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.error = action.payload;
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.contacts.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.contacts.isLoading = false;
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.contacts.error = action.payload;
      })
      .addCase(addContacts.pending, (state, action) => {
        state.contacts.isLoading = true;
      });
  },
});

export const { deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
