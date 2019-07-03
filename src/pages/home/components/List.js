import React, { Component } from 'react';
import {ListItem } from "../style"
import {connect} from "react-redux"
class List extends Component{
    render(){
        return (
            <ListItem>
                {
                    this.props.list.map( (v,i)=>(
                        <h3 key={i}>{v.get('title')}</h3>
                    ))
                }
                
            </ListItem>
        )
    }
}
const mapState=(state)=>({
    list:state.getIn(["home","articleList"])
})
export default connect(mapState,null)(List);