import React, { useState } from "react";

const Create = () => {
  const [input, setInput] = useState("");
  const buttonHandler = (e) => {
    e.preventDefault();
    setInput("");
  };
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <form action="">
      <input onChange={inputHandler} value={input} type="text" />
      <button onClick={buttonHandler}>submit</button>
    </form>
  );
};

export default Create;
