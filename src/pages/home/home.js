import React,{PureComponent} from "react"
import {HomeLeft} from "./style"
import Topic from "./components/Topic"
import List from "./components/List"
import axios from "axios"
import {connect} from "react-redux"
class Home extends PureComponent{
	componentDidMount(){
		axios.get('api/home.json').then(res=>{
			console.log(res);
			const action={
				type:"change_home_data",
				topicList:res.data.data.topicList,
				articleList:res.data.data.articleList
			};
			this.props.changeHomeData(action)
		})
	}
	render(){
		return(<div> 

			<HomeLeft>
				hahah
				
			</HomeLeft>
			<Topic></Topic>
			<List></List>
		</div> )
	}
}
const mapDispatch=(dispatch)=>({
	changeHomeData(action){
		dispatch(action)
	}
})
export default connect(null,mapDispatch) (Home)