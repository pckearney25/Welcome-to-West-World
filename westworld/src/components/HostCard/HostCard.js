import React from "react";
import "./HostCard.css";

const HostCard = props => (
  <div
    onClick={() => props.createNarrative(props.id, props.message)}
    className="card hvr-grow"
  >
    <div className="img-container">
      <h6>{props.name}</h6>
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default HostCard;
