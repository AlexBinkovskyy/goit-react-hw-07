import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.unshift(action.payload);
    },
    removeContact: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },
  },
});


export const { addContact, removeContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer

