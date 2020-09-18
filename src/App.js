import React, { Component } from "react";
import Styles from './App.module.css';
import Person from "./Component/Person";

export default class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Ashis", age: 23 },
      { id: 2, name: "Ashwin", age: 25 },
      { id: 3, name: "Mahesh", age: 26 },
    ],
  };
  nameChangeHandler=(event,myid)=>{
    //Search particular object
    const personIndex=this.state.persons.findIndex((per)=>{
      return per.id===myid;
    })
    //get perticular object
    const newperson={
      ...this.state.persons[personIndex]
    }
    //update the particular value
    newperson.name=event.target.value
    //get the root array in new variable
    const newpersons=[...this.state.persons]
    //update the particular object in the array
    newpersons[personIndex]=newperson
    //update the state with new array variable
    this.setState({persons:newpersons})
    
  }
  deletePerson = (personindex) => {
    // const persons=this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personindex, 1);
    this.setState({ persons: persons });
  };
  render() {
    let allPerson = (
      <div>
        {this.state.persons.map((p, i) => {
          return (
            <Person
              key={p.id}
              name={p.name}
              age={p.age}
              changed={(event)=>this.nameChangeHandler(event,p.id)}
              delete={() => this.deletePerson(i)}
            />
          );
        })}
      </div>
    );
    return (
      <div className={Styles.App}>
        <h1>Welcome to UI Team</h1>
        <div>{allPerson}</div>
      </div>
    );
  }
}
