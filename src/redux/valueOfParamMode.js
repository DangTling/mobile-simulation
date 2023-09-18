import { createSlice } from "@reduxjs/toolkit";

const valueOfParamModeSlice = createSlice({
  name: "valueOfParamMode",
  initialState: null,
  reducers: {
    setValueOfParamMode: (state, action) => {
      return action.payload;
    },
  },
});

export const { setValueOfParamMode } = valueOfParamModeSlice.actions;
export default valueOfParamModeSlice.reducer;
