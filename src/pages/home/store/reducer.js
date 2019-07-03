import {fromJS} from "immutable"
const defaultState=fromJS({
	topicList:[],
    articleList:[]
})
export default(state=defaultState,action)=>{


	switch(action.type){
        case "change_home_data":
           return state.merge({
                topicList:fromJS(action.topicList),
                articleList:fromJS(action.articleList)
            })
        default:
            return state;
    }
}