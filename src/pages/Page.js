import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
// import "../styles/page.css";
import "tailwindcss";

const Page = () => {
  const [query, setQuery] = useState(""); //關鍵字
  const [user, setUser] = useState(""); //user資料

  const buttonHandler = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${query}`);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search">
      <h1>GitHUb search</h1>
      <input
        type="text"
        vlaue={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={buttonHandler}>search</button>
      <div className="res">
        <table className="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
          {Object.entries(user).map(([key, value]) => (
            <tr>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Page;
