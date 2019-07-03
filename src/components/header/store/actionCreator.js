import * as constants from "./actionType"
import axios from "axios"
import {fromJS} from "immutable"


 const changeList=(data)=>({
	type:constants.CHANGE_LIST,
	data:fromJS(data),//转化为immutable 对象
	totalPage:Math.ceil(data.length/10)
})
export const searchFocus=()=>({
	type:constants.SEARCH_FOCUS
})
export const searchBlur=()=>({
	type:constants.SEARCH_BLUR
})
export const mouseEnter=()=>({
	type:constants.MOUSE_ENTER
})
export const mouseLeave=()=>({
	type:constants.MOUSE_LEAVE
})


// 获取list
export const getList=()=>{
	return (dispatch)=>{
		// console.log(123)
		axios.get('/api/headerList.json').then(res=>{
			console.log(res)
			let a=res.data;
			if(a.code==0){

			dispatch(changeList(a.data))		
			}
		})
	}
}