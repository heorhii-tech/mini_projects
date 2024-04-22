import { createSlice } from '@reduxjs/toolkit';

import thunks from './thunks';
import SLICE from './constatns';

const initialState = {
    repositories: {},
    isLoading: true,

}
const slice = createSlice({
    name: SLICE,
    initialState,
    extraReducers: (builder) => {
        builder

            .addCase(thunks.fetchRepositories.fulfilled, (state, { payload }) => {

                state.repositories = payload;
                state.isLoading = false
            })
            .addCase(thunks.fetchRepositories.rejected, (state, { payload }) => {
                state.error = payload;
            })


    }
});

export default slice.reducer;