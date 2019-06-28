import React,{Component} from "react";
import {HeaderWrapper,Logo,Nav,NavItem,Search,Container,Register,CodeArticle} from "./style"
import {connect} from "react-redux"
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

					<Search onFocus={this.props.handleFocus} focus={this.props.focused}/>
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
			const action={
			type:"input_focus"
			}
			dispatch(action)
		}
		
	}
}

const mapStateToProps=(state)=>{
	return{
		focused:state.focused
	} 
}

export default connect(mapStateToProps,mapDispatchToProps)(Header) 