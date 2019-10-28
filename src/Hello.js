import React, { Component } from 'react';

export class Hello extends Component {
    render() {
        return (
            // <div>
            //     <h2>hello hello hello</h2>
            // </div>
            React.createElement('div',{className: 'App'},React.createElement('h2',null,'Hello hello helooo!!'))
        )
    }
}

export default Hello;