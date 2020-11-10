import React from 'react';

function Footer () {
   const currentYear = new Date().getFullYear();

   return (
   <footer className="fixed-bottom">
   <p> Copyright &copy; {currentYear} Jivko Atanassov   </p> 
   </footer>
   )
}

export default Footer;