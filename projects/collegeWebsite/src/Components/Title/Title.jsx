import React from "react";
import "./Tilte.css";
function Title({ subTitle, title }) {
  return (
    <div className="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default Title;
