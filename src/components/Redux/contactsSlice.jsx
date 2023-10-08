import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initContacts,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            ...value,
            id: nanoid(5),
          },
        };
      },
    },
    deleteContacts(state, action) {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
