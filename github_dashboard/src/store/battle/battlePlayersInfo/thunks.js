import { createAsyncThunk } from "@reduxjs/toolkit";
import { SLICE } from "../battlePlayersInfo/constants";
import { service } from "../../../services/service";

const thunks = {
    fetchPlayerInfo1: createAsyncThunk(`${SLICE}/fetchPlayerInfo1`, async (username) => {
        const res = await service.getUserInfo(username)

        return res
    }),
    fetchPlayerInfo2: createAsyncThunk(`${SLICE}/fetchPlayerInfo2`, async (username) => {
        const res = await service.getUserInfo(username)
        return res
    }),
    fetchRepoInfo1: createAsyncThunk(`${SLICE}/fetchRepoInfo1`, async (url) => {
        const res = await service.getRepo(url)
        return res
    }),
    fetchRepoInfo2: createAsyncThunk(`${SLICE}/fetchRepoInfo2`, async (url) => {
        const res = await service.getRepo(url)
        return res
    })
}
export default thunks