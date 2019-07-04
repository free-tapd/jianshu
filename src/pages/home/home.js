import React,{PureComponent} from "react"
import {HomeLeft,HomeWarpper} from "./style"
import Topic from "./components/Topic"
import List from "./components/List"
import SliderImg from "./components/SliderImg"
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
		return(<HomeWarpper> 
			<SliderImg/>
			<HomeLeft>
							
			</HomeLeft>
			<Topic></Topic>
			<List></List>
		</HomeWarpper> )
	}
}
const mapDispatch=(dispatch)=>({
	changeHomeData(action){
		dispatch(action)
	}
})
export default connect(null,mapDispatch) (Home)