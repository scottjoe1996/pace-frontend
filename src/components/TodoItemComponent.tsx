import React from "react";
import TodoItem from "../types/TodoItem"


class TodoItemComponent extends React.Component<{todoItem: TodoItem, handleChange(id: number): void}> {
    render() {
        const item = this.props.todoItem;
        const paragraphStyle = item.isCompleted ? 
        {
            color: 'grey',
            fontStyle: 'italic',
            textDecoration: 'line-through'
        } : 
        {}

        return (
            <div>
                <input 
                    type="checkbox" 
                    checked={item.isCompleted} 
                    onChange={() => this.props.handleChange(item.id)}
                />
                <p style={paragraphStyle}>{this.props.todoItem.description}</p>
            </div>
        )
    }
}

export default TodoItemComponent;