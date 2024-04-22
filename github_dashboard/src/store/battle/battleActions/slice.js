import { createSlice } from '@reduxjs/toolkit';
import { SLICE } from './constants';

const initialState = {
    startBattle: false,
    showButtonBattle: false,
    showButtonReset: false,
}
const slice = createSlice({
    name: SLICE,
    initialState,
    reducers: {


        setShowButtonBatle(state, { payload }) {
            state.showButtonBattle = payload
        },
        setStartBattle(state, { payload }) {
            state.startBattle = payload
        },
        setShowButtonReset(state, { payload }) {
            state.showButtonReset = payload
        },

    }
});
export const { ...actionsBattle } = slice.actions;
export default slice.reducer;