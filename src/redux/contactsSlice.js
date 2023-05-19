import Notiflix from 'notiflix';
import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['numbers'],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { numbers: [] },
  reducers: {
    addContact(state, { payload }) {
      for (const contact of state.numbers) {
        if (payload.name.toLowerCase() === contact.name.toLowerCase()) {
          return Notiflix.Notify.failure(
            `${payload.name} is already in contact`
          );
        } else if (
          payload.number.toLowerCase() === contact.number.toLowerCase()
        ) {
          return Notiflix.Notify.failure(
            `${payload.number} is already in contact`
          );
        }
      }

      state.numbers.push({ ...payload, id: nanoid() });
    },
    deleteContact(state, action) {
      const index = state.numbers.findIndex(
        contact => contact.id === action.payload
      );
      state.numbers.splice(index, 1);
    },
  },
});

export const numbersReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

export const getContacts = state => state.contacts;
