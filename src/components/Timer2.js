import { useState, useEffect, useRef } from "react";

import React from "react";

const Timer2 = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current) return; //如果已經有計時器就跳出函數不再重設計時器
    //設置計時器
    intervalRef.current = setInterval(() => {
      setCount((pre) => pre + 1);
    }, 1000);
  };

  const handleStop = () => {
    //如果已經有計時器
    if (intervalRef.current) {
      clearInterval(intervalRef.current); //停止計時工作
      intervalRef.current = null; //清除Ref值
    }
  };

  const handleReset = () => {
    handleStop(); //停止計時器
    setCount(0); //重設秒數
  };

  useEffect(() => {
    //組件消失後須清除計時器避免背景繼續執行
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
};

export default Timer2;
