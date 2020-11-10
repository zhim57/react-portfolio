import React from 'react';
import './card.css';


const email = String.fromCodePoint(0x2709) 
const phone = String.fromCodePoint(0x260f)


function Contacts () {

return(
    <div className="contacts">
   <p > {email} zhim57@yahoo.com</p>
   <p > {phone} 908-472-0799</p>
  
   </div>
)
}

export default Contacts; 