import { Immutable } from "immer";
import { CLOCK_MODULE_NAME } from ".";

// This is the state for the module,
// It extends from ISettingsAwareState to indicate that the order module depends on Settings Module from state perspective
// This way any code loading order module can call selectors from both order and settings module
export interface ClockAwareState {
    [CLOCK_MODULE_NAME]: ClockState
}

export type ClockState = Immutable<{
    lastUpdate: number
}>