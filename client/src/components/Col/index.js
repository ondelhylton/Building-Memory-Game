import React from "react";
import "./col.css";


function Col(props) {
  const size = props.size.split(" ").map(size => "" + size).join(" ");

  return (
    <div className={size} id="column">
      {props.children}
    </div>
  );
}



export default Col;
