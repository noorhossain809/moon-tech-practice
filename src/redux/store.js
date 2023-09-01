import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import cartCounter from "./middlewere/cartCounter";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, cartCounter)));

export default store;