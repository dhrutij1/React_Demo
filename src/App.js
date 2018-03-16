import React, { Component } from 'react';

import './App.css';
import './Person/Person.css'
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
     {id : '1' ,name :'Max' , age : '28'},
     {id : '2' ,name : 'manu',   age : '29'},
     {id : '3',name : 'stephani' , age : '30'}
    ],
    otherState: 'some other state',
    showPersons: false
  }


  nameChangeHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(p => {
         return p.id === index ;

    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    person[personIndex] = person;
 this.state.persons[0].name = 'Max';
   this.setState({persons:[
     {name :'Max' , age : '28'},
     {name : event.target.value,   age : '29'},
     {name : 'dhruti' , age : '50'}
    ]})

  }
  deletePersonHandler = (personIndex) => {
    const persons  = this.state.persons;
    persons.splice(personIndex, 1);
    this.state({persons : persons});
  }
  togglePersonHandler = () => {
        const  doesShow = this.state.showPersons;
        this.setState({showPersons : ! doesShow});

  }

  render() {
   const style = {
        backgroundColor: 'white',
        font : 'inherit',
        border : '1px solid blue',
        padding : '8px',
        cursor : 'pointer'
   };
   let persons = null;
   if(this.state.showPersons)
   {
    persons = (
       <div>
       {
        this.state.persons.map((person, index)=> {
            return <Person click = {() => this.deletePersonHandler(index)} 
                           name = {person.name}
                           age  = {person.age} 
                            key = {index}
                            changed = {(event) => this.nameChangeHandler(event, person.id)} />
        })
       }

      </div> 

      )

   }

    return (
      <div className="App">
      <h1>Hi, i am react APP</h1>
      <p>This is really Working!!</p>
      <button style = {style} onClick={this.togglePersonHandler}>Switch Name</button>
      {persons}
       
    
      </div>
      
    );
    
  }
}

export default App;
