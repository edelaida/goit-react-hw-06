import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  filter: "",
};

const searchSlice = createSlice({
  name: "fltr",
  initialState: INITAL_STATE,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = searchSlice.actions;

// Редюсер слайсу
export const filtersSlice = searchSlice.reducer;
