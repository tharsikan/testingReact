import React, { Component } from 'react'

class RefHere extends Component {
    constructor(props) {
        super(props)
    
        this.myRef = React.createRef();
    }

    componentDidMount(){            // the last lifeCycle 
        console.log(this.myRef);
        this.myRef.current.focus()
    }

    subHandil = (event)=>{
        console.log(this.myRef.current.value);
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.subHandil}>
                <input type="text" ref={this.myRef}/>
                <button type="submit">say Hello</button>
            </form>
        )
    }
}

export default RefHere

