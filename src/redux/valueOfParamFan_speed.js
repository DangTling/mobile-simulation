import { createSlice } from "@reduxjs/toolkit";

const valueOfParamFan_speedSlice = createSlice({
  name: "valueOfParamFan_speed",
  initialState: null,
  reducers: {
    setValueOfParamFan_speed: (state, action) => {
      return action.payload;
    },
  },
});

export const { setValueOfParamFan_speed } = valueOfParamFan_speedSlice.actions;
export default valueOfParamFan_speedSlice.reducer;
