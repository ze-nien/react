import React, { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      if (data && data.length) setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((d, i) => (
          <section key={i}>
            <li>{d.title}</li>
            <li>{d.body}</li>
          </section>
        ))}
      </ul>
    </div>
  );
};
export default Test;
