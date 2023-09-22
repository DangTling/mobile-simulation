import { configureStore } from "@reduxjs/toolkit";
import compReducer from "./compSlice";
import valueOfTempReducer from "./valueOfTempSlice";
import valueOfOn_OffReducer from "./valueOfOn_OffSlice";

import valueOfParamMode from "./valueOfParamMode";
import valueOfParamSwing from "./valueOfParamSwing";
import valueOfParamFan_speed from "./valueOfParamFan_speed";

import itemWantFix from "./itemWantFix";
import indexWantFix from "./indexWantFix";

const store = configureStore({
  reducer: {
    comp: compReducer,
    valueOfTemp: valueOfTempReducer,
    valueOfOn_Off: valueOfOn_OffReducer,
    valueOfParamMode: valueOfParamMode,
    valueOfParamSwing: valueOfParamSwing,
    valueOfParamFan_speed: valueOfParamFan_speed,
    itemWantFix: itemWantFix,
    indexWantFix: indexWantFix,
  },
});

export default store;
