import React, { Component } from 'react'
import Child from './Child'
import FChild from './FChild'
class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.parentRef = React.createRef()
        
    }
    
    // componentDidMount(){
    //     this.parentRef.current.anyMethod();
    // }

    clickHandiler = ()=>{
        // this.parentRef.current.clickHandil();
        // this.parentRef.current.anyMethod();
        this.parentRef.current.focus();
    }

    render() {
        return (
            <div>
                {/* <Child ref={this.parentRef} /> */}
                <FChild ref={this.parentRef} />
                <button type="submit" onClick={this.clickHandiler}>Click my</button>
            </div>
        )
    }
}

export default Parent
