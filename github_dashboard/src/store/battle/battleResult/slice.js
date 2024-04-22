import SLICE from './constants'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    totalScore1: {},
    totalScore2: {},

    battleResult: {},

    error: '',

    reposStars1: 0,
    reposStars2: 0,
    result1: {},
    result2: {},






};

export const slice = createSlice({


    name: SLICE,
    initialState,

    reducers: {
        setReposStars1(state, { payload }) {
            state.reposStars1 = payload
        },
        setReposStars2(state, { payload }) {
            state.reposStars2 = payload
        },
        setTotalScore1(state, { payload }) {
            state.totalScore1 = payload
        },
        setTotalScore2(state, { payload }) {
            state.totalScore2 = payload
        },
        setBattleResult(state, { payload }) {
            state.battleResult = payload
        },
        setResult1(state, { payload }) {
            state.result1 = payload
        },
        setResult2(state, { payload }) {
            state.result2 = payload
        },
    }
})

// Action creators are generated for each case reducer function

export const { ...actionsBattleResult } = slice.actions;
export default slice.reducer;
