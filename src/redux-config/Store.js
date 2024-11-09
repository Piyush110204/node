import { configureStore } from "@reduxjs/toolkit";
import PendinDoctorSlice from "./PendinDoctorSlice";

const store=configureStore({
    reducer:{
        pendingDoctor:PendinDoctorSlice,
    }
})
export default store;