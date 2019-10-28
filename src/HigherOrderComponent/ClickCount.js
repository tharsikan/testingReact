import React, { Component } from 'react'
import WithCounert from './WithCounter'

class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    countMe = () =>{
        this.setState((prevState)=>
        {
            return {count: prevState.count+1}
        })
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={this.countMe}>Clikced {count} Times</button>
            </div>
        )
    }
}

export default WithCounert(ClickCounter)
