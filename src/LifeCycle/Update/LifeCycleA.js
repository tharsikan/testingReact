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

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate A");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate A");
        return null;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate A");
    }


    componentDidMount(){
        console.log("componentDidMount A");
    }
    
    changeState = (event) =>{
        this.setState({
            name:"the Rock"
        })
    }

    render() {
        console.log("render A");
        return (
            <div>
                LifeCycleA
                <Lsb/>
                <button onClick={this.changeState}>ok</button>
            </div>
        )
    }
}

export default LifeCycleA
