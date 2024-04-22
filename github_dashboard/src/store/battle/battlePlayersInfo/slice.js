import { SLICE } from './constants';
import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';


const initialState = {
    playerName1: '',
    playerName2: '',
    playerInfo1: {},
    playerInfo2: {},
    reposInfo1: {},
    reposInfo2: {},
    notExist1: '',
    notExist2: '',
    reposInfo1: {},
    reposInfo2: {},

    isLoadingPlayerInfo: true
}
const slice = createSlice({
    name: SLICE,
    initialState,
    reducers: {
        setPlayerName1(state, { payload }) {
            state.playerName1 = payload
        },
        setPlayerName2(state, { payload }) {
            state.playerName2 = payload
        },
        cleanPlayerInfo1(state, { payload }) {
            state.playerInfo1 = payload
        },
        cleanPlayerInfo2(state, { payload }) {
            state.playerInfo2 = payload
        },
        cleanNotExist1(state, { payload }) {
            state.notExist1 = payload
        },
        cleanNotExist2(state, { payload }) {
            state.notExist2 = payload
        },
        cleanReposInfo1(state, { payload }) {
            state.reposInfo1 = payload
        },
        cleanReposInfo2(state, { payload }) {
            state.reposInfo2 = payload
        },





    },
    extraReducers: (builder) => {
        builder
            .addCase(thunks.fetchPlayerInfo1.fulfilled, (state, { payload }) => {
                if (!payload.message) state.playerInfo1 = payload
                state.notExist1 = 'Username not exist'
            })
            .addCase(thunks.fetchPlayerInfo1.rejected, (state, { payload }) => {

                state.error = payload
            })
            .addCase(thunks.fetchPlayerInfo2.fulfilled, (state, { payload }) => {
                if (!payload.message) state.playerInfo2 = payload
                state.notExist2 = 'Username not exist'
            })
            .addCase(thunks.fetchRepoInfo1.fulfilled, (state, { payload }) => {
                state.reposInfo1 = payload
            })
            .addCase(thunks.fetchRepoInfo2.fulfilled, (state, { payload }) => {
                state.reposInfo2 = payload
            })



    }
});
export const { ...actionsBattlePlayerInfo } = slice.actions;
export default slice.reducer;