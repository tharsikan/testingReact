import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
        console.log("constructor B");
        this.state = {
            name:"tharsikan"
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps B");
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount B");
    }
    

    render() {
        console.log("render B");
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
