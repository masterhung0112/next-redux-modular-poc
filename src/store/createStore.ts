import { createStore as createStoreRedux, IModuleStore } from "redux-dynamic-modules";
import { getSagaExtension } from "redux-dynamic-modules-saga/lib/SagaExtension";

export function createStore() {
    const store = createStoreRedux(
        {
          initialState: {},
          enhancers: [],
          extensions: [getSagaExtension({} /* saga context */)],
        },
        // getUsersModule()
        /* ...any additional modules */
      )
    return store
}

