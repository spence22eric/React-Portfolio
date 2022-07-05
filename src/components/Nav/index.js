import React from 'react';

export default function Nav({ currentPage, handlePageChange }) {
   return (
      <nav class="navbar navbar-expand-lg bg-dark">
         <div class="container-fluid">
            <h1 className='text-light flex-grow-1 row name'>Eric Spencer</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

               <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                  <li className='nav-item'>
                     <a
                        href='#home'
                        onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav-active nav-link' : 'nav-link'}
                     >
                        Home
                     </a>
                  </li>
                  <li className='nav-item'>
                     <a
                        href='#about'
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-active nav-link' : 'nav-link'}
                     >
                        About Me
                     </a>
                  </li>
                  <li className='nav-item'>
                     <a
                        href='#contact'
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-active nav-link' : 'nav-link'}
                     >
                        Contact
                     </a>
                  </li>
                  <li className='nav-item'>
                     <a className='nav-link' href='#resume'>Resume</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav >
   )
}

