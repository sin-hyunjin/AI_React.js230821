import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
  },
  reducers: {},
});

export const ContactReducerActions = contactSlice.actions;

export default contactSlice.reducer;
