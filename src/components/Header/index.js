import React, { useState } from 'react';
import Nav from '../Nav'
// import Home from '../Home';
// import About from '../About';
// import Contact from '../Contact';
// import Resume from '../Resume';



export default function Header() {
   const [currentPage, setCurrentPage] = useState('Home');

   // const renderPage = () => {
   //    if (currentPage === 'Home') {
   //       return <Home />
   //    }
   //    if (currentPage === 'About') {
   //       return <About />
   //    }
   //    if (currentPage === 'Contact') {
   //       return <Contact />
   //    }
   //    if (currentPage === 'Resume') {
   //       return <Resume />
   //    }
   // }
   const handlePageChange = (page) => setCurrentPage(page);
   return (
      <>
         <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
         {/* {renderPage()} */}
      </>
   )
}