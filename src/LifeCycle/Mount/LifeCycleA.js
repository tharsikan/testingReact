import React, { Component } from 'react'
import Lsb from './LifeCycleB'
class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        console.log("constructor A");
        this.state = {
            name:"tharsikan"
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps A");
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount A");
    }
    

    render() {
        console.log("render A");
        return (
            <div>
                LifeCycleA
                <Lsb/>
            </div>
        )
    }
}

export default LifeCycleA
