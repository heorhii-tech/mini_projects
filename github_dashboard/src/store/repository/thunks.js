import { createAsyncThunk } from "@reduxjs/toolkit";
import { SLICE } from './constatnts'
import { service } from "../../services/service";

const thunks = ({
    fetchRepository: createAsyncThunk(`${SLICE}/fetchRepository`, async (id) => {
        const res = await service.getRepoInfo(id)
        return res;
    })
});
export default thunks;

