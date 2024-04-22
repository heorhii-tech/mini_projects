import { SLICE } from "./constatnts";
import { createSlice } from '@reduxjs/toolkit';
import thunks from "./thunks";


const initialState = {
    repository: [],
    isLoading: true
}

export const slice = createSlice({
    name: SLICE,
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(thunks.fetchRepository.fulfilled, (state, { payload }) => {
                state.repository = payload,
                    state.isLoading = false
            })

    }
});

export default slice.reducer;
