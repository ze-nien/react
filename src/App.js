//import "./style.css";

/*---createContext
 import { createContext } from "react";
 import ContextA from "./components/ContextA";
 export const Data = createContext();
 export const Data1 = createContext(); */

//---createContext, useContext
import { UserProvider } from "./components/UserContext";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";

function App() {
  /*---style
  const style = {
  color: "white",
  backgroundColor: "teal",
  padding: "2rem",
  }; */

  //---copy
  // const copyHandler = () => {
  //   console.log("try to steal this content");
  // };
  // const moveHandler = () => {
  //   alert("mouse move on this content");
  // };

  //---createContext
  // const name = "aaz";
  // const age = 22;

  return (
    //---createContext, useContext
    //UserProvider是UserContext.js中設置之外殼
    //UserProfile(取父件user物件)與UpdateUser(取父件updateUser function)
    <div>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </div>

    /*---createContext
       <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ContextA />
        </Data1.Provider>
      </Data.Provider> */

    /*---style 
      <h1 style={style}>app.js practice</h1>
      <h2 style={{ color: "red" }}>inline style</h2> */

    /*---copy
      <p onCopy={copyHandler} onMouseMove={moveHandler}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
        rerum.
      </p> */
  );
}

export default App;
