
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [inputValue, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <p>Enter your name:</p>
      <input onChange={handleChange} value={inputValue}></input>
      {inputValue.length > 0 && <p>Hello, {inputValue}!</p>}
    </div>
  );
}

export default App
