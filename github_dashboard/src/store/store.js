import { configureStore } from '@reduxjs/toolkit'
import languages from './languages/slice';
import repositories from './repositories/slice';
import repository from './repository/slice';

import battleActions from './battle/battleActions/slice'
import battlePlayersInfo from './battle/battlePlayersInfo/slice';
import battleResult from './battle/battleResult/slice'



export const store = configureStore({
    reducer: {
        languages: languages,
        repositories: repositories,
        repository: repository,

        battleActions: battleActions,
        battlePlayersInfo: battlePlayersInfo,
        battleResult: battleResult


    },
})