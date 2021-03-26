import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import productReducer from "./reducers/product";
import themeReducer from "./reducers/theme";
import filteReducer from "./reducers/filter";
import cartReducer from "./reducers/cart";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  theme: themeReducer,
  product: productReducer,
  filter: filteReducer,
  cart: cartReducer,
});
type reducersType = typeof reducers;
export type StateType = ReturnType<reducersType>;

let store = createStore(reducers, applyMiddleware(logger, thunkMiddleware));

store.subscribe(() => console.log(store.getState()));
export default store;
