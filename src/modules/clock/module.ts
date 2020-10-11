import { IModule } from "redux-dynamic-modules";
import { CLOCK_MODULE_NAME } from ".";
import { clockReducer } from "./reducer";
import { startClockWatcher } from "./saga";
import { ClockAwareState } from "./state";

export const ClockModule: IModule<ClockAwareState> = {
    id: CLOCK_MODULE_NAME,
    reducerMap: {
        [CLOCK_MODULE_NAME]: clockReducer,
    },
    sagas: [startClockWatcher]
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
};