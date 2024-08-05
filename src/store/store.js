import {createStore} from "redux";
import {counterReducer} from "../reducer/countreReducer.js";

const store = createStore(counterReducer)
export default store