import { createSlice } from "@reduxjs/toolkit";

const counterSlice2 = createSlice ( {
  name: "count2",
  initialState: 0,
  reducers: {
    increment2: (state) => state + 1,
    decrement2: (state) => state - 1,
    reset2: () => 0,
  },
});

export const { increment2, decrement2, reset2 } = counterSlice2.actions;
export default counterSlice2.reducer;
