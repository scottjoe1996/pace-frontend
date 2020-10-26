import React from "react";
import TodoItemComponent from "./components/TodoItemComponent";
import TodoItem from "./types/TodoItem";
import todosData from "./todosData";

type AppProps = {

}

type AppState = {
  todos: TodoItem[]
}

class App extends React.Component<{}, AppState> {
  constructor(appProps: AppProps) {
    super(appProps);
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id: number) {
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
      return <TodoItemComponent key={item.id} todoItem={item} handleChange={this.handleChange}/>
    })
    return (
      <div>
        {todoItemComponents}
      </div>
    )
  }
}

export default App;