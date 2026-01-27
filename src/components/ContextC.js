import React from "react";
import { useContext } from "react";
import { Data, Data1 } from "../App";

const ContextC = () => {
  const username = useContext(Data);
  const age = useContext(Data1);
  return (
    <div>
      <h2>
        {username} {age}
      </h2>
    </div>
  );
};

export default ContextC;
