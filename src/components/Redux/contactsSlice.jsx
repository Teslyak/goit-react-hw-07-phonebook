import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchContacts } from './operations';

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
  // reducers: {
  //   addContacts: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //     },
  //     prepare(value) {
  //       return {
  //         payload: {
  //           ...value,
  //           id: nanoid(5),
  //         },
  //       };
  //     },
  //   },
  //   deleteContacts(state, action) {
  //     return state.filter(el => el.id !== action.payload);
  //   },
  // },
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
      });
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
