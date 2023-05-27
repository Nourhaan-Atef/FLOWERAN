import { createAsyncThunk } from '@reduxjs/toolkit';

interface FetchError {
    errorMessage: string | undefined;
}

export const fetchAllFlowers = createAsyncThunk<any, undefined,
    { rejectValue: FetchError }>('flowers/getAllFlowers', async (params, { rejectWithValue }) => {
        try {
            const response = await fetch('https://flowers-api.onrender.com/all');
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message as FetchError);
        }
    });