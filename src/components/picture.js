import React from "react";

const picture = ({ data }) => {
  return (
    <div>
      <p>{data.photographer}</p>
      <img src={data.src.large} />
    </div>
  );
};

export default picture;
