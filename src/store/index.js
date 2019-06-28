import {createStore, applyMiddleware, compose} from "redux"
import reducer from "./reducer"

const store = createStore(reducer);
export default store