import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  inistialState: "",
  reducers: {
    change: {
      reducer(state, action) {
        return action.payload;
      },
      prepare(text) {
        return {
          payload: text,
        };
      },
    },
  },
});
export const { change } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
