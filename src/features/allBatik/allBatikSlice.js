import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBatik = createAsyncThunk("list-batik/allBatik", async () => {
        const response = await axios.get("http://batikita.herokuapp.com/index.php/batik/all");
        return response.data;
})
export const allBatikSlice = createSlice({
    name: "allBatik",
    initialState: {
        status: "idle",
        data: [],
    },
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(getAllBatik.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(getAllBatik.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;

        });
    },
});

export default allBatikSlice.reducer;