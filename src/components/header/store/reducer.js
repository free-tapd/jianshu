import * as constants from "./actionType"
import {fromJS} from "immutable"
const defaultState=fromJS({
	focused:false,
	list:[],
	mouseIn:false,
	page:1,
	totalPage:1
})
// 'https://qfkj.jiankanghebei.com/inquiry-api/'
export default(state=defaultState,action)=>{

	if(action.type==constants.SEARCH_FOCUS){
		return state.set('focused',true)
	}
	if(action.type==constants.SEARCH_BLUR){
		return state.set('focused',false)
	}
	if(action.type===constants.CHANGE_LIST){
		return state.set('list',action.data).set('totalPage',action.totalPage)
	}
	if(action.type===constants.MOUSE_ENTER){
		return state.set('mouseIn',true)
	}
	if(action.type===constants.MOUSE_LEAVE){
		return state.set('mouseIn',false)
	}
	return state;
}