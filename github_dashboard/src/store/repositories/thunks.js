import { createAsyncThunk } from "@reduxjs/toolkit";
import SLICE from "./constatns";
import { service } from "../../services/service";
import { useSelector } from "react-redux";


const thunks = {
    fetchRepositories: createAsyncThunk(`${SLICE}/fetchRepositories`, async (lang) => {
        const res = await service.getRepos(lang)

        return res;


    }),

};
export default thunks

