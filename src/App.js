import React, { Component } from 'react';
import logos from './logo.svg';
import './App.css';
import Hello from './Hello';
import Person from './Person/Person'
import Lsa from './LifeCycle/Mount/LifeCycleA'
import Form from './Form/Form'
class Apps extends Component {
  state={
    persons:[
      {id:"th1", name:"thasikan", age:26},
      {id:"th2", name:"thulasikan", age:23},
      {id:"th3", name:"ragunathan", age:34}
    ],
    another:"how is it!!!",
    showPerson: false               // all veriables will be in state 
  }
  methRef = (newName) => {
    //console.log('im clicked :)');
    this.setState({
      persons:[
        {id:"th1", name:newName, age:26},
        {id:"th2", name:"thulasikan", age:23},
        {id:"th3", name:"hesoyam", age:30}
      ]
    });
  }
  show = () => {
    this.setState({
      showPerson: !this.state.showPerson
    });
    
  }
  eventHandil = (event,personId) => {
    
    const personIndex = this.state.persons.findIndex(person=> {return person.id === personId ;} );  // it will return index of element in array return ikka conditions 
    // const myPerson = this.state.persons[personId]; you cant directly edit it
    // console.log(personIndex+" "+personId);
    const myPerson = {
      ...this.state.persons[personIndex]
    }                                                 // create new person obiject 

    myPerson.name = event.target.value;
    
    const myPersons = [...this.state.persons];         // create new persons array

    myPersons[personIndex] = myPerson;
    
    this.setState({
      persons:myPersons
    });
  }
  deletePerson = (personIndx) => {
    //const myPersons = this.state.persons.slice();    // make coppy of an persons
    const myPersons = [...this.state.persons];         // ... => array to parameter(split) or parameter to array(rest)
                                                      // but here makes array's coppy ... how just split then you put in in an array []
    myPersons.splice(personIndx,1);
    this.setState({
      persons:myPersons
    });
  }
  render() {
    const stle = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let classes = [] // .join(' ') convert to String 'blue bold'

    if(this.state.persons.length <= 2){
      classes.push('blue');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    
    // console.log(""hello""); enna ondu nadanthalum rander aakuthu
    
    
    let person = null;
    if(this.state.showPerson){
      person = (
      <div>
        <p className={classes.join(' ')}>helloooooooooooo</p>
        {this.state.persons.map((person,personIndx) => {
          return (<Person name={person.name} age={person.age} click={() => this.deletePerson(personIndx)} key={person.id} eventChange={(event) => this.eventHandil(event,person.id)}/>);
        })}
      </div>);
      stle.backgroundColor="red";
    }
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logos} className="App-logo" alt="logo" />
          <h1 className="App-title">I am a React Developer</h1>
        </header>
        <Hello />
        <button onClick={this.methRef.bind(this,"HELLO")} className='btn1'>clickme</button><br/>

        <button onClick={this.show}
        style={stle}>showPersons</button> */}
       
       {/* {this.state.showPerson ? 
        <div>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} eventChange={this.eventHandil} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >hello child</Person>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} myClick={this.methRef.bind(this,"MyHELLO")} />        
        <Person name="satha" age="53" /> </div> : null } */}

        {/* {person} */}

        {/* <Form/> */}

        <Lsa/>
      </div>
    );
  }
}

export default Apps;