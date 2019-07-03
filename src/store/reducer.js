
import {combineReducers} from "redux-immutable";
import HeaderReducer from "../components/header/store/reducer";
import {reducer as HomeReducer} from "../pages/home/store"
const reducer= combineReducers({
	header:HeaderReducer,
	home:HomeReducer
})
export default reducer