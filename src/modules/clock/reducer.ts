import { Draft, produce } from "immer"
import { ClockActionType } from "./action-types"
import { ClockState } from "./state"
import { ClockActionsUnion } from './action-creators'

const clockInitialState = {
    lastUpdate: 0,
}

// export const clockReducer = produce((draft: Draft<ClockState>, action: ClockActionsUnion): void => {
//     switch (action.type) {
//         case ClockActionType.TICK_CLOCK:
//             draft.lastUpdate = action.payload
//             break
//     }
// }, clockInitialState)

export const clockReducer = (state: ClockState | undefined, action: ClockActionsUnion): ClockState => {
    // return produce(clockInitialState, draft => {
        switch (action.type) {
            case ClockActionType.TICK_CLOCK:
                // draft.lastUpdate = action.payload
                return {
                    ...state,
                    lastUpdate: action.payload
                }
                break
        }
        return state ?? clockInitialState
    // })
}
