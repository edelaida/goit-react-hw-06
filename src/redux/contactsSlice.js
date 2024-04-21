import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};
const listSlice = createSlice({
  name: "contacts",
  initialState: INITAL_STATE.contacts,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = listSlice.actions;

export const contactsSlice = listSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
