import React from 'react';
import cardinfos from'../cardinfos.js';
import Card from './Card'
import Navbar from './Navbar'
import './portfolio.css'
import '../pages/style.css'



function PortfolioGrid() {
    function createCard(cardinfo) {
        return <Card 
        
        key={cardinfo.key} 
        name={cardinfo.title} 
        img={cardinfo.linkPro}
        img1={cardinfo.linkDep}
        pic={cardinfo.pic}
        text ={cardinfo.linkProText}
        description ={cardinfo.description}
        
        />
        
        }
 
    return (
        <div className="first-row">
<Navbar />
        <div className="container col-md-12 col-lg-10 col-sm-8">
        <h1>Portfolio</h1>
        <div className="row">
{/* <Portfolio
test="white"/> */}
{cardinfos.map(createCard) }
</div>
</div>
</div>

        )

    
     }

 
export default PortfolioGrid;