import Info from "./info";
import Nav from "./Nav";

function App() {
  let fri = ["a", "b", "C"];
  let fri1 = "a";
  return (
    <div>
      <h1>app.js practice</h1>
      <Nav />
      <Info name={fri1} />
      <Info name={fri[1]} />
      <Info name="c" />
    </div>
  );
}

export default App;
