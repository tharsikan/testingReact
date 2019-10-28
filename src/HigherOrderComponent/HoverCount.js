import React, { Component } from 'react'

class HoverCount extends Component {
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
                <h3 onMouseOver={this.countMe}>Hovered {count} Times</h3>
            </div>
        )
    }
}

export default HoverCount
