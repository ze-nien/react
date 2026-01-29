import { useRef, useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const autoTimer = () => {
    //Ref有計時器就清除Ref值
    if (intervalRef.current) clearInterval(intervalRef.current);
    //設置計時器
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const handleReset = () => {
    setCount(0); //重設秒數
    autoTimer();
  };

  useEffect(() => {
    autoTimer();
    //組件消失後須清除計時器避免背景繼續執行
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Timer;
