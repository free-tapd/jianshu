import React,{Component} from "react";
import {HeaderWrapper,Logo} from "./style"
class Header extends Component{
	render(){
		return (
			<HeaderWrapper>
				<Logo/>
				<Nav>
					<NavItem/>
				<Nav>
			</HeaderWrapper>	
			)
	}
}
export default Header