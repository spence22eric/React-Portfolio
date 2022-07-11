import React, { useState } from 'react';
import Nav from '../Nav'
// import Home from '../Home';




export default function Header() {
   const [currentPage, setCurrentPage] = useState('Home');

   const handlePageChange = (page) => setCurrentPage(page);

   // const renderPage = () => {
   //    if (currentPage === 'Home') {
   //       return <Home />
   //    }
   // }

   return (
      <>
         <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
         {/* {renderPage()} */}
      </>
   )
}