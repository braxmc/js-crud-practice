import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layouts/Header'
import AddTodo from './components/AddTodo'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    return (
      <div className="App">
       <div className='container'>
        <Header />
        <AddTodo />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
       </div>
      </div>
    );
  }
}




export default App;
