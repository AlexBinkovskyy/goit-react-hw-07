import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, removeContact } from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: false,
    errorMsg: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = false;
        state.errorMsg = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload;
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(removeContact.rejected, (state, { payload }) => {
        state.error = true;
        state.errorMsg = payload;
      }),
});

export const contactReducer = contactSlice.reducer;
