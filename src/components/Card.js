import React from "react";
import "./card.css";

function Card({ title, description, imageUrl, projectUrl, githubUrl, linkText }) {
  return (
    <div className="card col-sm-10 col-md-6 col-lg-4 col-xl-3 py-2 card2 card-ja h-100">
      <div className="card-content">
        <span className="card-title ">
          {title}
      <span className="magic-text">
        <p>Hover for more...</p>
        <span className="magic-text-text">"{description}"</span>
      </span>
        </span>
      <div className="card-image waves-effect waves-block waves-light">
        <img className=" card-image-ja" src={imageUrl} alt={title} />
      </div>
        <p>
          <a className="link-ja" href={projectUrl} target="_blank" rel="noreferrer">
            "{linkText}"
          </a>
        </p>
        <p>
          <a className="link-ja" href={githubUrl} target="_blank" rel="noreferrer">
            github repository link
          </a>
        </p>
      </div>
    </div>
  );
}

export default Card;
