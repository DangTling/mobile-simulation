import { createSlice } from "@reduxjs/toolkit";

const valueOfOn_OffSlice = createSlice({
  name: "valueOfOn_Off",
  initialState: true,
  reducers: {
    setValueOfOn_Off: (state, action) => {
      return action.payload;
    },
  },
});

export const { setValueOfOn_Off } = valueOfOn_OffSlice.actions;
export default valueOfOn_OffSlice.reducer;
