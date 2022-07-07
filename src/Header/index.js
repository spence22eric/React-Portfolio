import React, { useState } from 'react';
import Nav from '../components/Nav';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Resume from '../Resume';



export default function Header() {
   const [currentPage, setCurrentPage] = useState('Home');

   const renderPage = () => {
      if (currentPage === 'Home') {
         return <Home />
      }
      if (currentPage === 'About') {
         return <About />
      }
      if (currentPage === 'Contact') {
         return <Contact />
      }
      if (currentPage === 'Resume') {
         return <Resume />
      }
   }
   const handlePageChange = (page) => setCurrentPage(page);
   return (
      <>
         <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
         {renderPage()}
      </>
   )
}