import React from "react";

class App extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox" checked={this.props.item.isCompleted}></input>
                <p>{this.props.item.description}</p>
            </div>
        )
    }
}

export default App;