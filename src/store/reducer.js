const defaultState={
	focused:true
}
export default(state=defaultState,action)=>{
	if(action.type=="input_focus"){
		return {
			focused:true
		}
	}
	return state;
}