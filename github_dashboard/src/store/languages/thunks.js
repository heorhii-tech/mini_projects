import { createAsyncThunk } from "@reduxjs/toolkit";
import { SLICE } from "./constants";
import { service } from "../../services/service";

const thunks = {
    fetchLanguages: createAsyncThunk(`${SLICE}/fetchLanguages`, async () => {

        const res = await service.getLangs();
        return res
    })
};
export default thunks;