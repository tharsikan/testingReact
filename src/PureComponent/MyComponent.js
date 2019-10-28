import React, { Component } from 'react'

class MyComponent extends Component {
    render() {
        console.log("compo rerender");
        return (
            <div>
                Component<br/>
                {this.props.name}
            </div>
        )
    }
}

export default MyComponent
