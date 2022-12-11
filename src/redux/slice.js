import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    remove: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});
export const { add, remove } = contactsSlice.actions;


export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        change: (state, action) => (state = action.payload),
    },
});
export const { change } = filterSlice.actions;