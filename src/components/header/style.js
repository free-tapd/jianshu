import styled from "styled-components"
export const HeaderWrapper=styled.div`
	height:58px;
	background:#fff;
	border:1px solid #f0f0f0;
	width:100%;
`
export const Container=styled.div`
	min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
    position:relative;
}
`
export const Logo =styled.a`
	background-image:url('${require('../../static/images/logo.png')}');
	height:58px;
	background-repeat:no-repeat;
	background-size:contain;
	position:absolute;
	width:100px;
	display:block;

`
export const  Nav=styled.div`
	width:960px;
	line-height:58px;
    margin: 0 auto;
	box-sizing:border-box;
	padding-right:100px;

` 
export const NavItem=styled.a`
box-sizing:border-box;
	padding: 0 15px ;
	&.left{
		float:left;
	}
	&.right{
		float:right;
	}
`
export const Search=styled.input.attrs({
	  type: 'text',
  	length: props => props.length || 10 ,
  	placeholder:"搜索"
})`
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    transition: width .5s;
    -moz-transition: width .5s;
    -webkit-transition: width .5s;
    -o-transition: width .5s;
    transition-delay: .1s;
    -moz-transition-delay: .1s;
    -webkit-transition-delay: .1s;
    -o-transition-delay: .1s;
    outline:none;
`

export const  Register=styled.div`
	float: right;
    width: 80px;
    height: 38px;
    line-height: 24px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
   	line-height:38px;
   	text-align:center;
    position:absolute;
    right:150px;
    top:0;
`

export const CodeArticle=styled.div`
	    float: right;
    width: 100px;
    height: 40px;
    line-height: 24px;
    margin: 8px 12px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    line-height:38px;
   	text-align:center;
    background-color: #ea6f5a;
     position:absolute;
    right:0;
    top:0;

`
export const SearchBox=styled.div`
    min-width:200px;
    display:inline-block;
    position:relative;
`
export const SearchInfo=styled.div`
    height:200px;
    width:250px;
    border-radius:5px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    box-sizing:border-box;
    padding:15px;
    overflow:auto;
`

export const TagSearch=styled.span`
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-bottom:5px;
    &:not(:first-child){
        margin-left:5px;
    }
`
export const HotSearch=styled.div`
    float: left;
    font-size: 14px;
    color: #969696;
    line-height:1;
    &.right{
        float:right;
    }
`