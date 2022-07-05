import React from 'react';

export default function Footer() {
   return (
      <footer className="bg-dark text-center mt-auto text-white">
         {/* Grid container */}
         <div className="container p-4">

            {/* Section: Social media */}
            <section className="mb-4">
               {/* Google */}
               <a className="btn btn-primary btn-floating m-4" style={{ background: '#dd4b39' }} href="mailto:spence22eric@gmail.com" target='_blank' rel='noopener noreferrer' role="button"><i class="fa fa-light fa-envelope"></i></a>

               {/* Linkedin */}
               <a className="btn btn-primary btn-floating m-4" style={{ background: '#0082ca' }} href="https://www.linkedin.com/in/ericspencer22" target='_blank' rel='noopener noreferrer' role="button"><i class="fa fa-brands fa-linkedin"></i></a>

               {/* Github */}
               <a className="btn btn-primary btn-floating m-4" style={{ background: '#333333' }} href="https://github.com/spence22eric" target='_blank' rel='noopener noreferrer' role="button"><i class="fa fa-brands fa-github"></i></a>
            </section>
         </div>
      </footer>
   )
}