import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todosData: todosData
    }
  }

  render() {
    const todoItemComponents = this.state.todosData.map(item => {
      return <TodoItem id={item.id} item={item}/>
    })
    return (
      <div>
        {todoItemComponents}
      </div>
    )
  }
}

export default App;