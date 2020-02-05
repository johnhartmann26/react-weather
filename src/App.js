import React from "react";
import TodayView from "./components/TodayView";
import Header from "./components/Header";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props); //
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TodayView />
      </div>
    );
  }
}

export default App;
