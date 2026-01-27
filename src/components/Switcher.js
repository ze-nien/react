import React, { useState } from "react";

const Switcher = () => {
  const [sw, setSw] = useState(false);
  return (
    <div>
      {sw ? <span>light</span> : <span>dark</span>}
      <br />
      <input type="text" key={sw ? "light" : "dark"} />
      <button onClick={() => setSw((s) => !s)}>switch</button>
    </div>
  );
};

export default Switcher;
