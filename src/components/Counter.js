import React from "react";
import { useState, useReducer } from "react";
import { initialState, reducer } from "./counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState(0);

  const handleIn = () => dispatch({ type: "increment" });
  const handleDe = () => dispatch({ type: "decrement" });
  const handleInByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: Number(input) });
    setInput(0);
  };
  const handleDeByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: +input }); //前加"+"可轉換Number型別
    setInput(0);
  };

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={handleDe}>-</button>
      <button onClick={handleIn}>+</button>
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleInByAmount}>+ byAmount</button>
        <button onClick={handleDeByAmount}>- byAmount</button>
      </div>
    </div>
  );
};

export default Counter;
