import { Store } from 'redux'
import { createStore as createStoreRedux, IModuleStore } from "redux-dynamic-modules";
import { getSagaExtension } from "./saga-modular";
import { SagaMiddleware, Task } from 'redux-saga';
import { combineReducersWithGlobalActions } from "./hydrate_reducer";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export function createStore() {
    const sagaContext = {}
    // const sagaManager = sagaExtension.middleware.

    const store = createStoreRedux(
        {
          extensions: [getSagaExtension(sagaContext)],
          advancedCombineReducers: combineReducersWithGlobalActions,
        },
        // getUsersModule()
        /* ...any additional modules */
      )
    return store
}

