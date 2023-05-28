import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFlowers } from "../models/flowers";
interface FetchError {
    errorMessage: string | undefined;
}

export const getCertainFlower = createAsyncThunk<IFlowers, { id: number },
    { rejectValue: FetchError }>('flowers/getCertainFlower', async (params, { rejectWithValue }) => {
        try {
            const res = await fetch(`https://flowers-api.onrender.com/flower/${params.id}`);
            const data: IFlowers = await res.json();
            console.log(res)
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message as FetchError);
        }
    }
    );
