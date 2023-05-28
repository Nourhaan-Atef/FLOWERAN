import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFlowers } from "../models/flowers";
import { fetchAllFlowers } from "../middlewares/FetchAllFlowers";
import { RootState } from "../store";
import { getCertainFlower } from "../middlewares/GetCertainFlower";

interface FlowerState {
    flowerList: IFlowers[],
    loading: boolean,
    Flower: IFlowers | undefined
}

const initialState: FlowerState = {
    flowerList: [],
    loading: false,
    Flower: undefined
}

const flowerSlice = createSlice({
    name: "flower",
    initialState: initialState,
    reducers: {},
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
export const FlowerReducer = flowerSlice.reducer
export const FlowersState = (state: RootState) => state.flower