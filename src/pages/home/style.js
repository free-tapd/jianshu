import styled from "styled-components"
export const HomeLeft=styled.div`
    width:640px;
    background-color:#f00;
    height:400px;
`
export const HomeWarpper=styled.div`
	width:960px;
	min-height:500px;
	margin:0 auto;
	padding :30px 0 0 15px;
	box-sizing:border-box;
`
export const TopicWapper=styled.div`
	background-color:green;
	
`
export const SlierWapper=styled.div`
	width:66.7%;
	.slider-img{
		width:100%;
		height:270px;
		border-radius:5px;
	}
	
`
export const ListItem=styled.div`
width:66.7%;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    h3{
	    margin: -7px 0 4px;
	    display: inherit;
	    font-size: 18px;
	    font-weight: 700;
	    line-height: 1.5;
	    color:#333;
    }
    .article-content{
    	height:100px;
    }
    .article-content p{
    	width: ${(props)=>props.hasimg=='1'?"66.7%":"100%"} ;
    	float:left;
    	color:#969696;
    }
    .article-content img{
    	width:150px;
    	height:100px;
    	float:right;
    }

`
