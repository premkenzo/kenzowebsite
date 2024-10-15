import React from "react";
import { Link } from "react-router-dom";

function ServiceCard(props) {
  return (
    <div className={`${'single-service'} ${props.layoutClass}`}>
      <span>{props.serviceNumber}</span>
      <div className="icon">
        <img src={`${process.env.PUBLIC_URL}${props.image}`} alt="service icon" />
      </div>
      <h4>{props.title}</h4>
      <p>{props.details}</p>
      <div className="read-btn">
        {/* Using the link prop for dynamic routing */}
        <Link to={props.link}>Read More</Link>
      </div>
    </div>
  );
}

export default ServiceCard;