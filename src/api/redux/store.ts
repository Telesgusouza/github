import { combineReducers, createStore } from "redux";

import useListRepo from "./useListRepo/reducer";

const rootReducer = combineReducers({ useListRepo });
const store = createStore(rootReducer);

export default store;
