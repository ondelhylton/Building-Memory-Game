import React from "react";
import "./scorecard.css";


//stateless component
const Scorecard = props => (
  <div className="gameScore">
    <h3 className="score">Your Score: {props.total}</h3>
    <h4 className="status">{props.status}</h4>
    
  </div>
);

export default Scorecard;
