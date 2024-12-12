import { createSlice } from "@reduxjs/toolkit";

const reloadSlice = createSlice({
  name: "reload",
  initialState: {
    deleteReload: false,
    categoryReload: false,
    orderReload: false,
  },
  reducers: {
    toggleDelete(state, action) {
      state.deleteReload = action.payload;
    },
  },
});

export const { toggleDelete } = reloadSlice.actions;
export default reloadSlice.reducer;
