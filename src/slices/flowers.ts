import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFlowers } from "../models/flowers";
import { fetchAllFlowers } from "../middlewares/FetchAllFlowers";
import { RootState } from "../store";
import { getCertainFlower } from "../middlewares/GetCertainFlower";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
interface FlowerState {
    flowerList: IFlowers[],
    loading: boolean,
    Flower: IFlowers | null,
    FavFlowers: IFlowers[],
    FavCounter: number
}
const initialState: FlowerState = {
    flowerList: [],
    loading: false,
    Flower: null,
    FavFlowers: [],
    FavCounter: 0
}
interface AddToFavPayload {
    FavFlower: IFlowers
}


const flowerSlice = createSlice({
    name: "flower",
    initialState: initialState,
    reducers: {

        addToFavorite: (state, action: PayloadAction<AddToFavPayload>) => {
            state.FavFlowers.push(action.payload.FavFlower)
            state.FavCounter += 1

            toast.success(`${action.payload.FavFlower.flower_name} Added To Favorites Successfuly ✅`, {
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
        removeFromFavorite: (state, action: PayloadAction<AddToFavPayload>) => {
            state.FavFlowers = state.FavFlowers.filter(item => item.index !== action.payload.FavFlower.index)
            state.FavCounter -= 1
            toast.warn(`${action.payload.FavFlower.flower_name} Removed from Favorites Successfuly ✅`, {
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
    },
    extraReducers(builder) {
        // Fetching All Flowers
        builder.addCase(fetchAllFlowers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchAllFlowers.fulfilled, (state, action: PayloadAction<IFlowers[]>) => {
            state.loading = false;
            state.flowerList = action.payload;
        });
        builder.addCase(fetchAllFlowers.rejected, (state) => {
            state.loading = false;
        });
        // Fetching Certain Flower 
        builder.addCase(getCertainFlower.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCertainFlower.fulfilled, (state, action: PayloadAction<IFlowers>) => {
            state.loading = false;
            state.Flower = action.payload;
        });
        builder.addCase(getCertainFlower.rejected, (state) => {
            state.loading = false;
        });
    }
})
export const { addToFavorite, removeFromFavorite } = flowerSlice.actions
export const FlowerReducer = flowerSlice.reducer
export const FlowersState = (state: RootState) => state.flower