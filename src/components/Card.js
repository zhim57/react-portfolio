import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card col-sm-10 col-md-6 col-lg-4 col-xl-3 py-2 card2 card-ja h-100">
      <div className="card-content">
        <span className="card-title ">
          {props.name}
      <span className="magic-text">
        <p>Hover for more...</p>
        <span className="magic-text-text">"{props.description}"</span>
      </span>
        </span>
      <div className="card-image waves-effect waves-block waves-light">
        <img className=" card-image-ja" src={props.pic} alt="" />
      </div>
        <p>
          <a className="link-ja" href={props.img} target="_blank" rel="noreferrer">
            "{props.text}"
          </a>
        </p>
        <p>
          <a className="link-ja" href={props.img1} target="_blank" rel="noreferrer">
            github repository link
          </a>
        </p>
      </div>
    </div>
  );
}

export default Card;
