import React from 'react';
import image from '../../assets/portrait/portrait.png'

export default function About() {
    return (
        <div>
            <div className='col-sm-12 hero-image pt-5'>
                    <h1>About Me</h1>
                </div>
            <div className='container-fluid d-flex'>
                <div className='row align-items-center justify-content-center padding-top'>
                    <div className='col-lg-3 m-5 justify-content-end'>
                        <img src={image} alt='empty placeholder portrait' className='rounded-circle img-fluid portrait' />
                    </div>
                    <div className='col-sm-12 col-lg-8'>
                        <p>Full stack web developer leveraging IT Support/System Administration experience to work in a team-oriented, collaborative role; as well as bringing forth strong oral and written communicative skills. Recently earned a certificate in full stack development from the Ohio State University web development bootcamp, with newly developed skills in JavaScript, CSS, SQL and the MERN stack. </p>
                        <br />
                        <p>Recognized as a flexible, detail-oriented individual with a passion for problem solving as well as the ability to work both independently or in a team environment. Applied aspects of agile development in a recent project with a group of 5 people; developing an application that helps individuals set and achieve their goals by creating a virtual rewards system for a user created character. I am excited to sharpen and leverage these skills within a quality-driven team to deliver the best experiences to my users.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}