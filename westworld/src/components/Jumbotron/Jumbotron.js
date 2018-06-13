import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h2 className="display-4">Welcome to West World!</h2>
      <p className="lead">
        Life without limits. Create your own narrative by clicking on a host.
        Just don't meet the same host twice.
      </p>
      <hr />
      <div className="message-div">{props.message}</div>
      <div className="score-div">{`Score: ${props.score}   | Top Score: ${
        props.topScore
      }`}</div>
    </div>
  </div>
);

export default Jumbotron;
