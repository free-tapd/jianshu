import React,{Component} from "react";
import {getIn } from "immutable"
import {HeaderWrapper,Logo,Nav,NavItem,Search,Container,
	SearchInfo,SearchBox,Register,
	CodeArticle,
	HotSearch,
	TagSearch

} from "./style"
import {connect} from "react-redux"
import * as actionCreators from "./store/actionCreator"
const getListArea=(show,props)=>{
	let {mouseIn} =props
		if(show ||mouseIn){
			return (
				<SearchInfo onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave}>
					<HotSearch> 热门搜索</HotSearch>
					<HotSearch className="right"> 换一批</HotSearch>
					{
						props.list.map((val,index)=>(<TagSearch key={val}>{val}</TagSearch>))
					}
					
					
				</SearchInfo>

				)
		}else{
			return null
		}
	}
class Header extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return (
			<HeaderWrapper>
			<Container>
			<Logo/>
				<Nav>
					<NavItem className="left"> 首页</NavItem>
					<NavItem className="left"> 下载</NavItem>
					<SearchBox>
						<Search onFocus={this.props.handleFocus} focus={this.props.focused} onBlur={this.props.handleBlur}/>
						{
							getListArea(this.props.focused,this.props)
						}
					</SearchBox>
					<NavItem className="right"> 登录</NavItem>
					<NavItem className="right"> Aa</NavItem>
					
				</Nav>
					<Register>注册</Register>
					<CodeArticle>写文章</CodeArticle>
				</Container>
			</HeaderWrapper>	
			)
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		handleFocus(){
			dispatch(actionCreators.getList())
			const action=actionCreators.searchFocus();
			dispatch(action)
		},
		handleBlur(){
			dispatch(actionCreators.searchBlur())
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave())
		}
	}
}

const mapStateToProps=(state)=>{
	return{
		focused:state.get('header').get('focused'),
		list:state.get('header').get('list'),
		mouseIn:state.get('header').get('mouseIn')
		// list:state.getIn ('header','list')
	} 
}

export default connect(mapStateToProps,mapDispatchToProps)(Header) 