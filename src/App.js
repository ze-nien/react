import { useState, useEffect } from "react";

function App() {
  let [name, setName] = useState("mike huang");
  const buttonHandler = () => {
    setName("mike");
  };

  useEffect(() => {}, [name]);

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={buttonHandler}>change</button>
    </div>
  );
}

export default App;
