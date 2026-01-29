/*---createContext, useContext
 import { UserProvider } from "./components/UserContext";
 import UserProfile from "./components/UserProfile";
 import UpdateUser from "./components/UpdateUser";*/
/*---useId
import UniqueID from "./components/UniqueID";*/
function App() {
  /*---style
  const style = {
  color: "white",
  backgroundColor: "teal",
  padding: "2rem",
  }; */
  /*---copy
  const copyHandler = () => {
    console.log("try to steal this content");
  };
  const moveHandler = () => {
    alert("mouse move on this content");
  };*/
  /*---useReducer
  import { useReducer } from "react";
  import Counter from "./components/Counter";
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);*/
  /*---useRef
    import { useRef } from "react";
    import Timer from "./components/Timer";
    import Timer2 from "./components/Timer2";
    const element = useRef(null);
    const inputElement = () => {
    console.log(element.current);
    element.current.focus();
    element.current.value = "zen";
  };
   */
  /*---custom Use
  import useFetch from "./components/useFetch";
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");*/
  return (
    <div></div>

    /*---useId
    兩者id不同
      <UniqueID />
      <UniqueID /> */

    /*---custom Use
       {data &&
        data.map((d) => {
          return <h1>{d.title}</h1>;
        })} */

    /*---useRef
    <div>
      <h1>useRef</h1>
      <input type="text" ref={element} />
      <button onClick={inputElement}>click</button>
      <Timer />
      <Timer2 />
    </div>*/

    /*---createContext, useContext
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>*/

    /*---useReducer      
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <h1>{state.count}</h1>
    <div>
      <Counter />
    </div>*/
  );
}

export default App;
