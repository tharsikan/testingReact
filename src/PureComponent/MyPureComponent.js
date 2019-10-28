import React, { PureComponent } from 'react'

class MyPureComponent extends PureComponent {
    render() {
        console.log("pure compo rerender");
        return (
            <div>
                MyPureComponent<br/>
                {this.props.name}
            </div>
        )
    }
}

export default MyPureComponent
