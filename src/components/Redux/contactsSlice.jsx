import { createSlice } from '@reduxjs/toolkit';
import { addContacts, fetchContacts, deleteContact } from './operations';

export const initContacts = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.error = action.payload;
};

const handleAddContactsFulfilled = (state, action) => {
  state.contacts.items.push(action.payload);
  state.contacts.isLoading = false;
};

const handleFetchContactsFulfilled = (state, action) => {
  state.contacts.items.push(...action.payload);
  state.contacts.isLoading = false;
};
const handleDeleteContactsFulfilled = (state, action) => {
  const index = state.contacts.items.findIndex(
    el => el.id === action.payload.id
  );
  state.contacts.items.splice(index, 1);
  state.contacts.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initContacts,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, handleAddContactsFulfilled)
      .addCase(addContacts.rejected, handleRejected)
      .addCase(addContacts.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContactsFulfilled)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending);
  },
});

export const contactsReducer = contactsSlice.reducer;
