import { configureStore } from "@reduxjs/toolkit";
import compReducer from "./compSlice";
import valueOfTempReducer from "./valueOfTempSlice";
import valueOfOn_OffReducer from "./valueOfOn_OffSlice";

const store = configureStore({
  reducer: {
    comp: compReducer,
    valueOfTemp: valueOfTempReducer,
    valueOfOn_Off: valueOfOn_OffReducer,
  },
});

export default store;
