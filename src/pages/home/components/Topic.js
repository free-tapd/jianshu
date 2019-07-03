import React, { PureComponent } from 'react'
import {connect} from "react-redux"
 class Topic extends PureComponent{
    render(){
        return (
            <div>
                {
                    this.props.list.map((v,i)=>(
                        <span key={i}>{v.get('title')}</span>
                    )
                )
                }
            </div>
        )
    }
}

const mapState=(state)=>({
    list:state.getIn(['home','topicList'])
})

export default connect(mapState,null)(Topic)