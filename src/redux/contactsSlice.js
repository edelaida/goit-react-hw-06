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
  name: "contact",
  initialState: INITAL_STATE.contacts,
  reducers: {
    addUser(state, action) {
      state.items.push(action.payload);
    },
    deleteUser(state, action) {
      state.items = state.items.filter((user) => user.id !== action.payload);
    },
  },
});

// Генератори екшенів
export const { addUser, deleteUser } = listSlice.actions;

// Редюсер слайсу
export const contactsSlice = listSlice.reducer;
//export const selectContacts = (state) => state.contacts.items;
