import React from 'react';
import image1 from '../../assets/other/zookeepr.jpg';
import image2 from '../../assets/other/pizzahunt.jpg';
import image3 from '../../assets/other/notetaker.jpg';
import image4 from '../../assets/other/photoport.jpg';
import image5 from '../../assets/other/runbuddy.jpg';


export default function Home() {
    return (
        <div>
            <div className='col-sm-12 hero-image pt-5'>
                <h1>Welcome to my portfolio!</h1>
            </div>
            <h2 className='text-light p-5'>
                Take a look at some of my projects below
            </h2>
            <section className='container'>
                <div className='row justify-content-center'>
                    <div className='p-5 col-lg-6 col-md-12'>
                        <div className='card bg-dark'>
                            <img className='card-img-top project-image' src={image1} height='286px' alt='card header' />
                            <div className='card-body'>
                                <h5 className='card-title text-light'>Zookeepr</h5>
                                <p className='card-text'>Built with: <span className='fw-bold'>JavaScript, Express.js, HTML, CSS</span></p>
                                <a href='https://sheltered-sierra-46062.herokuapp.com/' target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Click to visit!</a>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 col-lg-6 col-md-12'>
                        <div className='card bg-dark'>
                            <img className='card-img-top project-image' src={image2} height='286px' alt='card header' />
                            <div className='card-body'>
                                <h5 className='card-title text-light'>Pizzahunt</h5>
                                <p className='card-text'>Built with: <span className='fw-bold'>JavaScript, MongoDB, Mongoose, HTML, CSS</span></p>
                                <a href='https://fast-wave-58965.herokuapp.com/' target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Click to visit!</a>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 col-lg-6 col-md-12'>
                        <div className='card bg-dark'>
                            <img className='card-img-top project-image' src={image3} height='286px' alt='card header' />
                            <div className='card-body'>
                                <h5 className='card-title text-light'>Note Taker</h5>
                                <p className='card-text'>Built with: <span className='fw-bold'>JavaScript, Express.js, HTML, CSS</span></p>
                                <a href='https://thawing-sierra-56493.herokuapp.com/' target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Click to visit!</a>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 col-lg-6 col-md-12'>
                        <div className='card bg-dark'>
                            <img className='card-img-top project-image' src={image5} height='286px' alt='card header' />
                            <div className='card-body'>
                                <h5 className='card-title text-light'>Run Buddy</h5>
                                <p className='card-text'>Built with: <span className='fw-bold'>HTML, CSS</span></p>
                                <a href='https://spence22eric.github.io/run-buddy/' target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Click to visit!</a>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 col-lg-6 col-md-12'>
                        <div className='card bg-dark'>
                            <img className='card-img-top project-image' src={image4} height='286px' alt='card header' />
                            <div className='card-body'>
                                <h5 className='card-title text-light'>Photo-port</h5>
                                <p className='card-text'>Built with: <span className='fw-bold'>React, CSS</span></p>
                                <a href='https://spence22eric.github.io/Photo-Port/' target='_blank' rel="noopener noreferrer"  className='btn btn-primary'>Click to visit!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}