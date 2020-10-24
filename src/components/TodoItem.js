import React from "react";

class App extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <div>
                <input type="checkbox" checked={item.isCompleted} onChange={() => this.props.handleChange(item.id)}></input>
                <p>{this.props.item.description}</p>
            </div>
        )
    }
}

export default App;