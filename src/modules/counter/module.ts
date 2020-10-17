import { CountAwareState } from './contracts/state'
import { COUNT_MODULE_NAME } from './constants'
import { countReducer } from './reducer'
import { countWatcher } from './saga'
import { ISagaModule } from '../../store/saga-modular/Contracts'

export const CountModule: ISagaModule<CountAwareState> = {
    id: COUNT_MODULE_NAME,
    reducerMap: {
      [COUNT_MODULE_NAME]: countReducer,
    },
    sagas: [countWatcher],
}
