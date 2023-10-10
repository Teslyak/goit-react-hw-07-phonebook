import { createSlice } from '@reduxjs/toolkit';
import { addContacts, fetchContacts, deleteContact } from './operations';

export const initContacts = {
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
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.contacts.items.findIndex(
          el => el.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.error = action.payload;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.contacts.isLoading = true;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
