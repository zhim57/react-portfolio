import React from "react";
import "./card.css";

function Card({ title, description, imageUrl, projectUrl, githubUrl, linkText }) {
    return (
        <article className="card col-sm-10 col-md-6 col-lg-4 col-xl-3 card2 card-ja">
            <div className="card-image">
                <img className="card-image-ja" src={imageUrl} alt={title} />
            </div>
            <div className="card-content">
                <h3 className="card-title">
                    {title}
                    <span className="magic-text">
                        <p>Info</p>
                        <span className="magic-text-text">{description}</span>
                    </span>
                </h3>
                <div className="card-links">
                    <a
                        className="link-ja"
                        href={projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${title} live demo`}
                    >
                        {linkText}
                    </a>
                    <a
                        className="link-ja github-link"
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${title} source code on GitHub`}
                    >
                        View Code
                    </a>
                </div>
            </div>
        </article>
    );
}

export default Card;
