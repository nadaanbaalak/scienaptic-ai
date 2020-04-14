import { createStore } from "redux";
import chart from "../src/reducers/chartData";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(chart, composeWithDevTools());

export default store;
