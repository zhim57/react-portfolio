import React from 'react';
import cardinfos from'../cardinfos.js';
import Card from './Card'
import './portfolio.css'
import '../pages/style.css'

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
        <div className="container col-md-12 col-lg-10 col-sm-8">
            <h1>Portfolio</h1>
            <div className="row">
                {cardinfos.map(createCard)}
            </div>
        </div>
    );
}

export default PortfolioGrid;