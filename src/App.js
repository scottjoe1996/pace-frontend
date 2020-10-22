import React from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="johnSmith123"/>
        <Greeting />
      </div>
    )
  }
}

export default App;