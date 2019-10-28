import React from 'react';
import './Person.css';
const person = (props) => {
    return (
    <div className="Person">
        {/*  <p>hello im a person {Math.floor(Math.random() * 69)} years old</p>  */}
        <p onClick={props.click}>I'm {props.name} and i'm {props.age} years old </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.eventChange} value={props.name}/>
    </div>
    
    );
}
export default person;