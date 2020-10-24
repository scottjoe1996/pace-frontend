import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(previousState => {
      const newTodos = previousState.todos.map(item => {
        if(item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      })

      return {
          todos: newTodos
      }
    })
  }

  render() {
    const todoItemComponents = this.state.todos.map(item => {
      return <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>
    })
    return (
      <div>
        {todoItemComponents}
      </div>
    )
  }
}

export default App;