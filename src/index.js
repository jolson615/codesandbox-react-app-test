import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./Navbar/Navbar";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hello This is a serious test</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
