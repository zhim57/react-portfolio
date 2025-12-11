import React from 'react';
import cardinfos from'../cardinfos.js';
import Card from './Card'
import './portfolio.css'

function PortfolioGrid() {
    function createCard(cardinfo) {
        return (
            <Card
                key={cardinfo.key}
                title={cardinfo.title}
                projectUrl={cardinfo.linkPro}
                githubUrl={cardinfo.linkDep}
                imageUrl={cardinfo.pic}
                linkText={cardinfo.linkProText}
                description={cardinfo.description}
            />
        );
    }

    return (
        <section className="portfolio-section">
            <h1 className="portfolio-title">My Portfolio</h1>
            <p className="portfolio-subtitle">Check out some of my recent projects</p>
            <div className="portfolio-grid">
                {cardinfos.map(createCard)}
            </div>
        </section>
    );
}

export default PortfolioGrid;