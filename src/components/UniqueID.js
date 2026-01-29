import React from "react";
import { useId } from "react";

const UniqueID = () => {
  const Id = useId();
  return (
    <div>
      {" "}
      <label htmlFor={`${Id}_email`}>Email</label>
      <input type="Email" id={`${Id}_email`} />
      <label htmlFor={`${Id}_pw`}>Password</label>
      <input type="password" id={`${Id}_pw`} />
    </div>
  );
};

export default UniqueID;
