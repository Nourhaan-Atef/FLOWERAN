import { configureStore } from "@reduxjs/toolkit";
import { FlowerReducer } from "../slices/flowers";

const store = configureStore({
    reducer: { flower: FlowerReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store