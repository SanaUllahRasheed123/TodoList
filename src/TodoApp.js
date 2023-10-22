// import React, { Component } from "react";
// import "./TodoApp.css";

// class TodoApp extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [],
//       task: "",
//     };
//   }

//   handleTaskChange = (event) => {
//     this.setState({ task: event.target.value });
//   };

//   addTask = () => {
//     if (this.state.task) {
//       this.setState((prevState) => ({
//         todos: [...prevState.todos, prevState.task],
//         task: "",
//       }));
//     }
//   };

//   render() {
//     return (
//       <div className="todo-app">
//         <h1>Todo List</h1>
//         <div className="todo-input">
//           <input
//             type="text"
//             placeholder="Enter a task"
//             value={this.state.task}
//             onChange={this.handleTaskChange}
//           />
//           <button onClick={this.addTask}>Add</button>
//         </div>
//         <ul>
//           {this.state.todos.map((todo, index) => (
//             <li key={index}>{todo}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TodoApp;



// import React, { Component } from "react";
// import "./TodoApp.css";

// class TodoApp extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [],
//       task: "",
//     };
//   }

//   handleTaskChange = (event) => {
//     this.setState({ task: event.target.value });
//   };

//   addTask = () => {
//     if (this.state.task) {
//       this.setState((prevState) => ({
//         todos: [...prevState.todos, prevState.task],
//         task: "",
//       }));
//     }
//   };

//   removeTask = (index) => {
//     const updatedTodos = this.state.todos.filter((_, i) => i !== index);
//     this.setState({ todos: updatedTodos });
//   };

//   removeAllTasks = () => {
//     this.setState({ todos: [] });
//   };

//   render() {
//     return (
//       <div className="todo-app">
//         <h1>Todo List</h1>
//         <div className="todo-input">
//           <input
//             type="text"
//             placeholder="Enter a task"
//             value={this.state.task}
//             onChange={this.handleTaskChange}
//           />
//           <button onClick={this.addTask}>Add</button>
//         </div>
//         <ul>
//           {this.state.todos.map((todo, index) => (
//             <li key={index}>
//               {todo}
//               <button onClick={() => this.removeTask(index)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//         {this.state.todos.length > 0 && (
//           <button onClick={this.removeAllTasks}>Remove All</button>
//         )}
//       </div>
//     );
//   }
// }

// export default TodoApp;


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
        todos: [...prevState.todos, { task: prevState.task, isCompleted: false }],
        task: "",
      }));
    }
  };

  removeTask = (index) => {
    const updatedTodos = this.state.todos.filter((_, i) => i !== index);
    this.setState({ todos: updatedTodos });
  };

  updateTask = (index) => {
    const updatedTodos = this.state.todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  removeAllTasks = () => {
    this.setState({ todos: [] });
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
            <li key={index} className={todo.isCompleted ? "completed" : ""}>
              {todo.task}
              <button onClick={() => this.removeTask(index)}>Remove</button>
              <button
                onClick={() => this.updateTask(index)}
                className="update-button"
              >
                {todo.isCompleted ? "Unmark" : "Mark"}
              </button>
            </li>
          ))}
        </ul>
        {this.state.todos.length > 0 && (
          <button onClick={this.removeAllTasks}>Remove All</button>
        )}
      </div>
    );
  }
}

export default TodoApp;