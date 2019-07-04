import React, { Component } from 'react';
import {ListItem } from "../style"
import {connect} from "react-redux"
import {toJS} from "immutable"
class List extends Component{
    render(){
        return (
            <ListItem>
                {
                    this.props.list.map( (v,i)=>{

                        return (

                        <div key={i}>
                            <h3> {v.get('title')}</h3>
                            <div className="article-content">
                                
                                <p hasimg={v.get('imgUrl')?'1':'0'}>{v.get('content')}</p>
                                  <img src={v.get('imgUrl')}/>
                            </div>
                        </div>

                    )} )
                }
                
            </ListItem>
        )
    }
}
const mapState=(state)=>({
    list:state.getIn(["home","articleList"])
})
export default connect(mapState,null)(List);