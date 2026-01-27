import React from "react";
import { createPortal } from "react-dom";

const PopUpContent = ({ copied }) => {
  return createPortal(
    <section>{copied && <div>Copied to Clipboard</div>}</section>,
    document.querySelector("#pop"),
  );
};

export default PopUpContent;
