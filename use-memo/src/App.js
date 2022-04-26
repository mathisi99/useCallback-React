import './App.css';
import React, {useState, useMemo, useEffect} from "react";

function doubleNumber(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
function App() {
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(0);
  const doubleNum = useMemo(() => doubleNumber(number), [number]);
  //useMemo(() => doubleNumber(number), [number]);
  /*
  reference variable will have new address each time render,
  so even we interact with number, it'll re-render, then themeStyles is being re-allocate
  it will count that themStyles have change then run the effect 
  that why we use useMemo to save the object's allocation area to memory, if it not change any thing inside
  then it will not call the useEffect 
  */
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black"
    };
  }, [dark]);

  useEffect(() => {
    console.log("themes change");
    
  }, [themeStyles]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setDark(!dark);
        }}
      >
        Change color
      </button>
      <input
        value={number}
        onChange={(e) => {
          const value = e.target.value;
          setNumber(value);
        }}
      />
      <p style={themeStyles}>Double number: {doubleNum}</p>
    </div>
  );
}

export default App;
