import React, { Component } from 'react';
import './App.css';

const TodoItem = ({text}) => (
  <li>{text}</li>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleSubmit(e) {
      e.preventDefault();
      // const todos = [...this.state.todos, this.state.newTodo];
      let todos = this.state.todos.slice();
      todos.push(this.state.newTodo);
      this.setState({todos, newTodo: ''});
  }
  
  render() {
    const {newTodo} = this.state;
    const todos = this.state.todos.map((text, index) => (
      <TodoItem key={index} text={text} />
    ));
    
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            name="newTodo"
            placeholder="Add new todo..."
            value={newTodo}
            // onChange={(e) => this.setState({[e.target.name]: e.target.value})}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="save-button"
          >
          SAVE
          </button>
        </form>
        <div className="todoList">
          <ul>
            {todos}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
