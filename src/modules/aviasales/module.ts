import { AviasalesAwareState } from "./state";
import { AVIASALES_MODULE_NAME } from "./index";
import { aviasalesReducer } from "./reducer";
import { aviasalesSaga } from "./saga";
import { IModule } from "redux-dynamic-modules";

export const AviasalesModule: IModule<AviasalesAwareState> = {
  id: AVIASALES_MODULE_NAME,
  reducerMap: {
    [AVIASALES_MODULE_NAME]: aviasalesReducer,
  },
  sagas: [aviasalesSaga],
};
