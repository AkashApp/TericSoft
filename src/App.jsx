import React, { useState } from "react";
import "./App.css";
import Body from "./Components/Body/Body";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
