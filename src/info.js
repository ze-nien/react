import React from "react";
import "./styles/style.css";

function info({ messages, setMessages }) {
  return (
    <div className="info">
      {messages.map((m, index) => {
        return <p key={index}>{m}</p>;
      })}
    </div>
  );
}

export default info;
