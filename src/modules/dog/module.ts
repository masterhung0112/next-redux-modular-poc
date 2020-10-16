import { IModule } from "redux-dynamic-modules";
import { DogPublicAction } from "./action-creators";
import { DogAwareState } from "./contracts/state";
import { DOG_MODULE_NAME } from "./index";
import { dogReducer } from "./reducer";
import { loadDogWatcher } from "./saga";

export const DogModule: IModule<DogAwareState> = {
  id: DOG_MODULE_NAME,
  reducerMap: {
    [DOG_MODULE_NAME]: dogReducer,
  },
  initialActions: [DogPublicAction.loadDog()],
  sagas: [loadDogWatcher],
};
