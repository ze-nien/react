import { React, useState, useEffect } from "react";

const search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input onChange={inputHandler} type="text" />
      <button onClick={search}>search</button>
    </div>
  );
};

export default search;
