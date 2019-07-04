import React, { PureComponent } from 'react'
import {connect} from "react-redux"
import {TopicWapper} from "../style"
 class Topic extends PureComponent{
    render(){
        return (
            <TopicWapper>
                {
                    this.props.list.map((v,i)=>(
                        <span key={i}>{v.get('title')}</span>
                    )
                )
                }
            </TopicWapper>
        )
    }
}

const mapState=(state)=>({
    list:state.getIn(['home','topicList'])
})

export default connect(mapState,null)(Topic)