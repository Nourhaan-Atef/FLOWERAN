import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IFlowers } from "../models/flowers"
import { RootState } from "../store";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface CartState {
    cartList: IFlowers[];
    cartCounter: number;
}
interface AddToCartPayload {
    cartItem: IFlowers
}
interface DeleteFromCartPayload {
    cartItem: IFlowers
}

interface IncrementItemCount {
    cartItem: IFlowers
}
const initialState: CartState = {
    cartList: [],
    cartCounter: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {

        addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
            state.cartList.push(action.payload.cartItem)
            state.cartCounter += 1
            console.log(state.cartList)
            toast.success(`${action.payload.cartItem.flower_name} Added To Cart Successfuly ✅`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        },
        removeFromCart: (state, action: PayloadAction<DeleteFromCartPayload>) => {
            state.cartList = state.cartList.filter(item => item.index !== action.payload.cartItem.index)
            state.cartCounter -= 1

            toast.warn(`${action.payload.cartItem.flower_name} Removed from Cart Successfuly ✅`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        },
        incrementItemCount: (state, action: PayloadAction<IncrementItemCount>) => {
            const { index } = action.payload.cartItem
            const cartItemCount = state.cartList.find(item => {
                return item.index === index
            })
            if (cartItemCount) {
                cartItemCount.itemCount += 1
                state.cartCounter += 1;
            }
        },
        decrementItemCount: (state, action: PayloadAction<IncrementItemCount>) => {
            const { index } = action.payload.cartItem
            const cartItemCount = state.cartList.find(item => {
                return item.index === index
            })
            if (cartItemCount && cartItemCount.itemCount > 0) {
                cartItemCount.itemCount -= 1
                state.cartCounter -= 1;
            }
        },

    }
})
export const { addToCart, removeFromCart, incrementItemCount, decrementItemCount } = cartSlice.actions
export const CartReducer = cartSlice.reducer
export const CartsState = (state: RootState) => state.cart
