import { createSlice } from "@reduxjs/toolkit";

const valueOfParamSwingSlice = createSlice({
  name: "valueOfParamSwing",
  initialState: null,
  reducers: {
    setValueOfParamSwing: (state, action) => {
      return action.payload;
    },
  },
});

export const { setValueOfParamSwing } = valueOfParamSwingSlice.actions;
export default valueOfParamSwingSlice.reducer;
