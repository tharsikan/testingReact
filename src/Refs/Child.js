import React, { Component } from 'react'

class Child extends Component {
    constructor(props) {
        super(props)
    
        this.myRef = React.createRef();
    }
    clickHandil = ()=>{
        this.myRef.current.focus()
    }
    anyMethod = () =>{
        alert("HELLO");
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myRef}/>
                {/* <button type="submit" onClick={this.clickHandil}>ok</button> */}
            </div>
        )
    }
}

export default Child
