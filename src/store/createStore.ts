import { Store } from 'redux'
import { createStore as createStoreRedux } from "redux-dynamic-modules";
import { getSagaExtension, SagaExtensionContext } from "./saga-modular";
import { Task } from 'redux-saga';
import { combineReducersWithGlobalActions } from "./hydrate_reducer";

export interface SagaStore extends Store {
  getSagaTasks?: () => Task[];
}

export function createStore() {
    const sagaContext: SagaExtensionContext = {}
    // const sagaManager = sagaExtension.middleware.

    const store = createStoreRedux(
        {
          extensions: [getSagaExtension(sagaContext)],
          advancedCombineReducers: combineReducersWithGlobalActions,
        }
      )
    
    const sagaStore = store as SagaStore
    sagaStore.getSagaTasks = sagaContext.sagaManager?.getTasks
    return store
}

