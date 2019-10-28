import React, { Component } from 'react'
import ClickCount from './HigherOrderComponent/ClickCount'
import HoverCount from './HigherOrderComponent/HoverCount'
export class HighApp extends Component {
    render() {
        return (
             <div>
                <ClickCount/> 
                <HoverCount/>
             </div>
        )
    }
}

export default HighApp