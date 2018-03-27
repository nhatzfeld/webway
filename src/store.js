import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userReducer from "./reducers/userReducer.js";

const store = createStore(
  combineReducers({ userReducer }),
  applyMiddleware(promiseMiddleware())
);

export default store;

// const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
// export function makeStore() {
//   return createStoreWithMiddleware(userReducer);
// }
