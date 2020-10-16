/* eslint-disable default-case */
import produce, { Draft } from 'immer'

import { DogActionsUnion } from './action-creators'
import { DogActionType } from './action-types'
import { DogLoadingState, DogState } from './contracts/state'

const dogInitialState: DogState = {
  loadingState: DogLoadingState.NEVER,
}

export const dogReducer = produce((draft: Draft<DogState>, action: DogActionsUnion): void => {
  switch (action.type) {
    case DogActionType.SET_ERROR:
      draft.error = action.payload
      break

    case DogActionType.SET_DOG:
      draft.dog = action.payload
      break

    case DogActionType.SET_LOADING_STATE:
      draft.loadingState = action.payload
      break
  }
}, dogInitialState)
