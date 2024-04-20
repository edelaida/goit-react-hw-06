import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  users: [],
  filter: "",
};
const listSlice = createSlice({
  // Ім'я слайсу
  name: "contact", // Початковий стан редюсера слайсу
  initialState: INITAL_STATE, // Об'єкт редюсерів
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    deleteUser(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { addUser, deleteUser, setFilter } = contactsSlice.actions;

// Редюсер слайсу
export const contactsSlice = listSlice.reducer;
