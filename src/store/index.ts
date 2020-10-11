import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { createStore } from './createStore'

// create a makeStore function
const makeStore: MakeStore<any> = (context: Context) => createStore()

// export an assembled wrapper
export const wrapper = createWrapper<any>(makeStore, {debug: true});