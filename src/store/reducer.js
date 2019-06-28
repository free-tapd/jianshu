
import {combineReducers} from "redux-immutable";
import HeaderReducer from "../components/header/store/reducer";
const reducer= combineReducers({
	header:HeaderReducer
})
export default reducer