import React, { Component } from 'react'
import PCom from './MyPureComponent'
import Com from './MyComponent'
import MemoCom from './MemoComponent'
class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'tharik'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'taric'
            })
        },2000);
    }
    
    render() {
        console.log("********Parent Render********");
        return (
            <div>
                <PCom name={this.state.name}/>
                <Com name={this.state.name}/>
                <MemoCom name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent
