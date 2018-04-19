import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    
    setTimeout(() => {
      const randomInstructor = Math.floor(
        Math.random()
        * (this.state.instructors.length)
        );

      const randomHobbie = Math.floor(
        Math.random()
        * (this.state.instructors[randomInstructor].hobbies.length)
        );

      const instructors = this.state.instructors.map((inst, i) => {
        if (i === randomInstructor) {
          const hobbies = [...inst.hobbies];
          hobbies.splice(randomHobbie, 1);
          return {
            ...inst,
            hobbies
          };
        }
        return inst;
      });
      
      // antother solution:
      // const instructors = this.state.instructors.slice();
      // instructors[randomInstructor] = Object.assign({}, instructors[randomInstructor]);
      // instructors[randomInstructor].hobbies = instructors[randomInstructor].hobbies.slice();
      // instructors[randomInstructor].hobbies.splice(randomHobbie, 1);
      
      this.setState({instructors});
      
    }, 3000);
  }
  
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;