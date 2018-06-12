import React from "react";
import "./HostCard.css";

const HostCard = props => (
  <div className="card">
    <div className="img-container">
      <h6>{props.name}</h6>
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default HostCard;
