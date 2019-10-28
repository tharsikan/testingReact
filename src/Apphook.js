import React, { useState } from 'react';
import logos from './logo.svg';
import './App.css';
import Hello from './Hello';
import Person from './Person/Person'

const app = props =>{   // () one areg dont need
  const [personsState, setPersonsState] = useState({
    persons:[
      {name:"thasikan", age:26},
      {name:"thulasikan", age:23},
      {name:"ragunathan", age:34}
    ],
  });
  const [otherState, setotherState] = useState({
    another:"how is it!!!!!1"
  });
  const methRef = () => {
    //console.log('im clicked :)');
    setPersonsState({
      persons:[
        {name:"uzumymw", age:26},
        {name:"thulasikan", age:23},
        {name:"hesoyam", age:30}
      ]           // all element shuld be rewrite even if it is not edit, 
                  // so you use another useState 
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logos} className="App-logo" alt="logo" />
        <h1 className="App-title">I am a React Developer</h1>
      </header>
      <Hello />
      <button onClick={methRef}>clickme</button>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} >hello child</Person>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />        
      <Person name="satha" age="53" />
      
    </div>
  );
}

export default app;