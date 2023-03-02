import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLakiLaki = createAsyncThunk("list-Laki/lakiLaki", async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        return response.data;
})
export const lakiLakiSlice = createSlice({
    name: "lakiLaki",
    initialState: {
        status: "idle",
        data: [],
    },
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(getLakiLaki.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(getLakiLaki.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;

        });
    },
});

export default lakiLakiSlice.reducer;