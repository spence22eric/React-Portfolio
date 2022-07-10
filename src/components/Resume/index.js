import React from 'react'
import resume from '../../assets/other/Resume - Eric Spencer.docx'

export default function Resume() {
   
   return (
      <section className='text-light resume-list'>
         <div>
            <p>
               Download my resume <a href={resume}>here!</a>
            </p>
            <h3>Front-end Proficiencies</h3>
            <ul>
               <li>HTML</li>
               <li>CSS</li>
               <li>JavaScript</li>
               <li>jQuery</li>
               <li>responsive design</li>
               <li>React</li>
               <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
               <li>APIs</li>
               <li>Node</li>
               <li>Express</li>
               <li>MySQL, Sequelize</li>
               <li>MongoDB, Mongoose</li>
               <li>REST</li>
               <li>GraphQL</li>
            </ul>
         </div>
      </section>
   )
}