import React, { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      task: "",
    };
  }

  handleTaskChange = (event) => {
    this.setState({ task: event.target.value });
  };

  addTask = () => {
    if (this.state.task) {
      this.setState((prevState) => ({
        todos: [...prevState.todos, prevState.task],
        task: "",
      }));
    }
  };

  render() {
    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Enter a task"
            value={this.state.task}
            onChange={this.handleTaskChange}
          />
          <button onClick={this.addTask}>Add</button>
        </div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;