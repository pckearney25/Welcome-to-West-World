import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Welcome to West World!</h1>
      <p className="lead">
        Life without limits. Create your own narrative by clicking on a
        character. Just don't click the same character twice.
      </p>
      <hr />
      <div>{props.message}</div>
      <div>{`Score: ${props.score} | Top Score: ${props.topScore}`}</div>
    </div>
  </div>
);

export default Jumbotron;
