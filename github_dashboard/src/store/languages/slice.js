import { createSlice } from '@reduxjs/toolkit';
import { SLICE } from './constants';
import thunks from './thunks';


const initialState = {
    languages: {},
    isLoading: true,
    lang: 'TypeScript'
}

export const slice = createSlice({


    name: SLICE,
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(thunks.fetchLanguages.fulfilled, (state, { payload }) => {

                state.languages = payload
                state.isLoading = false




            })
            .addCase(thunks.fetchLanguages.rejected, (state, { payload }) => {
                state.error = payload;
            })


    },
    reducers: {
        setLang(state, { payload }) {

            state.lang = payload;
        }
    }
})

// Action creators are generated for each case reducer function

export const { setLang } = slice.actions;
export default slice.reducer;