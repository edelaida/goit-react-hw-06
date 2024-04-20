import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};
const searchSlice = createSlice({
  name: "filters",
  initialState: INITAL_STATE.filters,
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = searchSlice.actions;

// Редюсер слайсу
export const filtersSlice = searchSlice.reducer;
//export const selectNameFilter = (state) => state.filters.name;
