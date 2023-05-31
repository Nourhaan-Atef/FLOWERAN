import { configureStore } from "@reduxjs/toolkit";
import { FlowerReducer } from "../slices/flowers";
import { CartReducer } from "../slices/cart";

const store = configureStore({
    reducer: { flower: FlowerReducer, cart: CartReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store